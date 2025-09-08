import PurchaseCard from '@/components/feature/MyPage/PurchaseCard';

const dummyGroupedData = [
  {
    date: '2025.07.29',
    items: [
      {
        name: '김포로컬푸드 공동판매장',
        code: '2100032732783',
        price: 4000,
        quantity: 1,
        total: 4000,
        rating: 3.8, // 예시용
      },
      {
        name: '김포로컬푸드 공동판매장',
        code: '2100032732783',
        price: 4000,
        quantity: 1,
        total: 4000,
        rating: 0, // 별점 없음
      },
    ],
  },
  {
    date: '2025.07.31',
    items: [
      {
        name: '김포로컬푸드 공동판매장',
        code: '2100032732783',
        price: 4000,
        quantity: 1,
        total: 4000,
        rating: 4.2,
      },
      {
        name: '김포로컬푸드 공동판매장',
        code: '2100032732783',
        price: 4000,
        quantity: 1,
        total: 4000,
        rating: 0,
      },
    ],
  },
  {
    date: '2025.08.01',
    items: [
      {
        name: '김포로컬푸드 공동판매장',
        code: '2100032732783',
        price: 4000,
        quantity: 1,
        total: 4000,
        rating: 4.2,
      },
      {
        name: '김포로컬푸드 공동판매장',
        code: '2100032732783',
        price: 4000,
        quantity: 1,
        total: 4000,
        rating: 0,
      },
    ],
  },
];

export default function MyPurchases() {
  return (
    <div className="h-screen overflow-hidden px-5 py-8">
      {/* 스크롤이 생길 카드 리스트 영역 */}
      <div className="scrollbar-hide max-h-[75vh] overflow-y-auto pr-1">
        {dummyGroupedData.map((group, groupIdx) => (
          <div key={groupIdx} className={`pt-6 ${groupIdx > 0 ? 'mt-4 border-t border-gray-200' : ''}`}>
            <h2 className="text-title-3 mb-4 ml-2 font-bold">{group.date}</h2>
            <div className="space-y-4">
              {group.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex w-full justify-center">
                  <PurchaseCard
                    storeName={item.name}
                    amount={item.total}
                    date={group.date}
                    hasRating={item.rating > 0}
                    rating={item.rating}
                    onReceiptClick={() => alert(`${item.name} 영수증 보기`)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
