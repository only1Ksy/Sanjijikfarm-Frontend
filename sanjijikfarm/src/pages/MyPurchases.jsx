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
      <div className="px-5 py-8 h-screen overflow-hidden">
        {/* 스크롤이 생길 카드 리스트 영역 */}
        <div className="overflow-y-auto max-h-[75vh] pr-1 scrollbar-hide">
          {dummyGroupedData.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className={`pt-6 ${groupIdx > 0 ? 'border-t border-gray-200 mt-4' : ''}`}
            >
              <h2 className="text-title-3 font-bold ml-2 mb-4">{group.date}</h2>
              <div className="space-y-4">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="w-full flex justify-center">
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
  