import ItemCard from "@/components/feature/Receipt/ItemCard";
const dummyGroupedData = [
  {
    date: '2025.07.29',
    items: [
      { name: '김포로컬푸드 공동판매장', code: '2100032732783', price: 4000, quantity: 1, total: 4000, rating: 3.8 },
      { name: '김포로컬푸드 공동판매장', code: '2100032732783', price: 4000, quantity: 1, total: 4000, rating: 0 },
    ],
  },
  {
    date: '2025.07.31',
    items: [
      { name: '김포로컬푸드 공동판매장', code: '2100032732783', price: 4000, quantity: 1, total: 4000, rating: 4.2 },
      { name: '김포로컬푸드 공동판매장', code: '2100032732783', price: 4000, quantity: 1, total: 4000},
    ],
  },
  {
    date: '2025.08.01',
    items: [
      { name: '김포로컬푸드 공동판매장', code: '2100032732783', price: 4000, quantity: 1, total: 4000, rating: 4.2 },
      { name: '김포로컬푸드 공동판매장', code: '2100032732783', price: 4000, quantity: 1, total: 4000},
    ],
  },
];

export default function MyPurchases() {
  return (
    <div className="relative h-screen bg-white">
      <div className="overflow-y-auto px-5 pt-6 pb-6 scrollbar-hide" style={{ height: 'calc(100vh - 120px)' }}>
        {dummyGroupedData.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className={`pt-6 ${groupIdx > 0 ? 'mt-4 border-t border-gray-200' : ''}`}
          >
            <h2 className="text-title-3 mb-4 ml-2 font-bold">{group.date}</h2>
            <div className="space-y-4">
              {group.items.map((item) => (
                  <ItemCard
                    name={item.name}
                    code={item.code}
                    price={item.price}
                    qty={item.quantity}
                    total={item.total}
                    rating={item.rating}
                  />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
