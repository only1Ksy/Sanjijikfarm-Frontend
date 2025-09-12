import EmptyStar from '../../../assets/icons/emptystar.svg';
import GreenStar from '../../../assets/icons/greenstar.svg';

export default function ReviewCard({ name, date, rating, text, images = [], likes = 0 }) {
  return (
    <div className="mb-[0.5rem] rounded-lg bg-white p-[1rem]">
      {/* 헤더: 상품명 + 작성일 + 찜 버튼 */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-body-1 font-bold">{name}</p>
          <p className="text-body-2-med text-gray-700">{date}</p>
        </div>

        {/* 찜 버튼 */}
        <button className="text-body-2-med flex items-center gap-[0.25rem] rounded-full border border-gray-400 px-[0.3rem] py-[0.1rem] text-gray-700">
          <span>{likes}</span>
          <span>♡</span>
        </button>
      </div>

      {/* 별점 */}
      <div className="mt-[0.3rem] flex space-x-[0.2rem]">
        {Array.from({ length: 5 }).map((_, i) =>
          i < rating ? (
            <GreenStar key={i} className="h-[1rem] w-[1rem]" />
          ) : (
            <EmptyStar key={i} className="h-[1rem] w-[1rem]" />
          ),
        )}
      </div>

      {/* 리뷰 이미지 */}
      {images.length > 0 && (
        <div className="mt-[0.5rem] flex gap-[0.5rem] overflow-x-auto">
          {images.map((img, idx) => (
            <div key={idx} className="h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-md bg-gray-200">
              <img src={img} alt={`review-${idx}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* 리뷰 텍스트 */}
      {text && (
        <div className="text-body-2-med bg-pale-green mt-[0.8rem] rounded-md p-[0.5rem] leading-relaxed whitespace-pre-line">
          {text}
        </div>
      )}
    </div>
  );
}
