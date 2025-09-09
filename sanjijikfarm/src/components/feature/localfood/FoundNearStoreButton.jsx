import ShopIcon from '@/assets/icons/shop.svg';

export default function FoundNearStoreButton() {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-gray-1 flex h-8.5 w-49 cursor-pointer items-center justify-center gap-2.5 rounded-2xl">
        <ShopIcon />
        <span className="text-body-2-med font-medium">인근 로컬푸드 판매처 찾기</span>
      </div>
    </div>
  );
}
