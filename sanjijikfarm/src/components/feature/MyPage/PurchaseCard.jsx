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
    <div className="flex h-[4.9375rem] w-[23rem] rounded-md bg-white px-[0.625rem] py-[0.6875rem]">
      {/* 좌우 영역 구분 */}
      <div className="flex w-full flex-col justify-start">
        {/* 상단: storeName + 별점 / date */}
        <div className="flex items-start justify-between">
          <div className="text-body-1 flex items-center font-semibold">
            <span>{storeName}</span>
            {hasRating && (
              <span className="text-main-brown text-body-2-med ml-2 flex items-center font-semibold">
                <StarIcon className="mr-0.5 h-3 w-3" />
                {rating.toFixed(1)}
              </span>
            )}
          </div>
          <div className="text-body-1 text-gray-6">{date}</div>
        </div>

        {/* 하단: 금액 / 버튼 */}
        <div className="mt-[0.7rem] flex items-end justify-between">
          <div className="text-body-1 text-gray-7 mb-1">{amount.toLocaleString()}원</div>
          <button
            className="bg-main-green text-body-2 h-[1.5rem] w-[4.35rem] rounded-[0.1875rem] font-bold text-white hover:bg-green-600"
            onClick={onReceiptClick}
          >
            영수증 보기
          </button>
        </div>
      </div>
    </div>
  );
}
