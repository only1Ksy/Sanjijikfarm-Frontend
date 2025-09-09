import FilterIcon from '@/assets/icons/filter.svg';
import LocalfoodContent from '@/components/feature/localfood/LocalfoodContent';

export default function LocalfoodModal({ shopList, filter, toggleFilter }) {
  return (
    <div className="flex max-h-100 w-full flex-col overflow-scroll">
      <button
        className="text-gray-7 text-body-2-med flex cursor-pointer items-center gap-1 self-end px-3 font-medium"
        onClick={toggleFilter}
      >
        <span>{filter}</span>
        <FilterIcon />
      </button>
      {shopList.map((shop, index) => (
        <LocalfoodContent key={`shop list ${index}`} shop={shop} />
      ))}
    </div>
  );
}
