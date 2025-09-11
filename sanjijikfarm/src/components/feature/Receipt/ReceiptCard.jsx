import { useNavigate } from 'react-router-dom';

export default function ReceiptCard({ id, storeName, date, price, rating }) {
  const navigate = useNavigate();
  const showRating = rating !== undefined && rating !== null && rating > 0;

  const handleClick = () => {
    navigate(`/receipt/${id}`);
  };

  return (
    <div className="mb-2 flex items-center justify-between rounded-md bg-gray-100 p-4">
      <div className="flex flex-col">
        <div className="text-body-1 flex items-center gap-1 font-semibold">
          {storeName}
          {showRating && (
            <span className="text-main-brown text-body-2-med ml-2 flex items-center font-semibold">★ {rating}</span>
          )}
        </div>
        <div className="text-body-1 text-gray-7 mb-1">{price.toLocaleString()}원</div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="text-body-1 text-gray-6">{date}</span>
        <button
          onClick={handleClick}
          className="bg-main-green text-body-2 h-[1.5rem] w-[4.35rem] rounded-[0.1875rem] font-bold text-white hover:bg-green-600"
        >
          영수증 보기
        </button>
      </div>
    </div>
  );
}
