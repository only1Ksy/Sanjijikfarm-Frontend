import CautionIcon from '@/assets/icons/caution.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import StarIcon from '@/assets/icons/star.svg';

export default function HeartLocalfood({ localfood }) {
  return (
    <div className="border-gray-2 flex w-full gap-4 border-b p-4">
      {/* left section */}
      <div className="flex flex-grow justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-0.5 pl-0.5">
            <span className="text-body-1 font-bold">{localfood.name}</span>
            <span className="text-body-2 font-semibold">{localfood.price.toLocaleString()}</span>
          </div>
          {localfood.hasNoReview && (
            <div className="flex items-center gap-0.5">
              <CautionIcon />
              <span className="text-body-2-med font-medium">한 달 동안 리뷰 없었음</span>
            </div>
          )}
        </div>
        <div className="text-body-2-med flex flex-col items-end justify-between font-medium">
          <div className="text-main-brown flex items-center gap-0.5">
            <StarIcon />
            <span>{localfood.rating}</span>
          </div>
          <button className="border-gray-7 text-gray-7 hover:bg-gray-1 flex cursor-pointer items-center gap-0.5 rounded-3xl border px-1">
            {localfood.likeCount}
            <HeartIcon />
          </button>
        </div>
      </div>
      {/* right section - image */}
      <div className="bg-pale-green h-20 w-20">
        <img className="h-full w-full object-cover" src={localfood.url} alt="localfood img" />
      </div>
    </div>
  );
}
