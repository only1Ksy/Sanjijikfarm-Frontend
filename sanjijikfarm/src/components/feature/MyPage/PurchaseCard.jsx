import StarIcon from '@/assets/icons/star.svg';

export default function PurchaseCard({
  storeName = '',
  amount = 0,
  date = '',
  hasRating = false,
  rating = 0,
  onReceiptClick = () => {},
}) {
  return (
    <div className="flex w-[23rem] h-[4.9375rem] px-[0.625rem] py-[0.6875rem] rounded-md bg-white">
      {/* 좌우 영역 구분 */}
      <div className="flex flex-col justify-start w-full">
        {/* 상단: storeName + 별점 / date */}
        <div className="flex justify-between items-start">
          <div className="flex items-center text-body-1 font-semibold">
            <span>{storeName}</span>
            {hasRating && (
              <span className="flex items-center text-main-brown text-body-2-med font-semibold ml-2">
                <StarIcon className="w-3 h-3 mr-0.5" />
                {rating.toFixed(1)}
              </span>
            )}
          </div>
          <div className="text-body-1 text-gray-6">{date}</div>
        </div>

        {/* 하단: 금액 / 버튼 */}
        <div className="flex justify-between items-end mt-[0.7rem]">
          <div className="text-body-1 text-gray-7 mb-1">
            {amount.toLocaleString()}원
          </div>
          <button
            className="w-[4.35rem] h-[1.5rem] rounded-[0.1875rem] bg-main-green hover:bg-green-600 text-white text-body-2 font-bold"
            onClick={onReceiptClick}
          >
            영수증 보기
          </button>
        </div>
      </div>
    </div>
  );
}
