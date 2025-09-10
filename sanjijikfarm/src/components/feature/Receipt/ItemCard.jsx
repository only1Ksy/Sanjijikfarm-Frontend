export default function ItemCard({ name, code, price, qty, total, rating }) {
  const hasRating = rating && rating > 0;

  return (
    <div className="rounded-md bg-white p-4 mb-3">
      {/* 상품명 */}
      <div className="text-body-1 font-semibold mb-1">{name}</div>

      {/* 코드 + 가격 정보 */}
      <div className="flex justify-between text-body-2-med text-gray-700 mb-1">
        <span>{code}</span>
        <span>{price.toLocaleString()}</span>
        <span>{qty}</span>
        <span className="text-body-2-med text-gray-700">{total.toLocaleString()}</span>
      </div>

      {/* 별점 + 리뷰 버튼 */}
      <div className="flex justify-between items-center mt-2">
        {hasRating ? (
          <span className="text-main-brown text-body-2-med">★ {rating}</span>
        ) : (
          <span />
        )}

        <button
          className={`px-3 py-1 rounded text-body-2 font-semibold ${
            hasRating
              ? 'bg-pale-green text-black'
              : 'bg-main-green text-white hover:bg-green-600'
          }`}
        >
          {hasRating ? '리뷰 수정' : '리뷰 생성'}
        </button>
      </div>
    </div>
  );
}
