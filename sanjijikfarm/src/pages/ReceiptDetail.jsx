import { useParams } from 'react-router-dom';

import ItemCard from '../components/feature/Receipt/ItemCard';

export default function ReceiptDetail() {
  const { id } = useParams();

  const dummyReceipt = {
    id: id,
    date: '2025.07.31.',
    store: '김포로컬푸드 공동판매장',
    address: '경기도 김포시 김포대로 1009-51',
    ceo: '정완철',
    phone: '031-981-8456',
    bizNo: '402-82-00347',
    items: [
      { name: 'P딸기(이현) 로컬푸드', code: '2100032732783', price: 4000, qty: 1, total: 4000 },
      { name: 'P딸기(이현) 로컬푸드', code: '2100032732783', price: 4000, qty: 1, total: 4000 },
      { name: 'P딸기(이현) 로컬푸드', code: '2100032732783', price: 4000, qty: 1, total: 4000, rating: 3.8 },
      { name: 'P딸기(이현) 로컬푸드', code: '2100032732783', price: 4000, qty: 1, total: 4000, rating: 3.8 },
      { name: 'P딸기(이현) 로컬푸드', code: '2100032732783', price: 4000, qty: 1, total: 4000, rating: 3.8 },
    ],
    summary: {
      total: 18460,
    },
  };

  return (
    <div className="h-screen overflow-hidden bg-white">
      <div className="scrollbar-hide max-h-[calc(100vh-120px)] overflow-y-auto px-4 py-3">
        <div className="mb-6 border-b border-gray-300 py-3 text-sm text-gray-800">
          <p className="text-body-2-med text-center text-gray-600">{dummyReceipt.date}</p>
          <div className="mb-4 border-b border-gray-300 pb-4">
            <p className="text-title-3 text-center font-bold">{dummyReceipt.store}</p>
          </div>

          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="text-body-2-med w-[5rem] shrink-0 text-gray-700">주소</span>
              <span className="text-body-2-med text-gray-700">{dummyReceipt.address}</span>
            </div>

            <div className="flex justify-between gap-4">
              <div className="flex gap-2">
                <span className="text-body-2-med w-[5rem] shrink-0 text-gray-700">대표</span>
                <span className="text-body-2-med text-gray-700">{dummyReceipt.ceo}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-body-2-med shrink-0 text-gray-700">전화</span>
                <span className="text-body-2-med text-gray-700">{dummyReceipt.phone}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="text-body-2-med w-[5rem] shrink-0 text-gray-700">사업자번호</span>
              <span className="text-body-2-med text-gray-700">{dummyReceipt.bizNo}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 space-y-3">
          {dummyReceipt.items.map((item, i) => (
            <ItemCard key={i} {...item} />
          ))}
        </div>

        <div className="mt-6 border-t border-gray-300">
          <SummaryRow label="총구매액" value={dummyReceipt.summary.total} />
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="text-body-2-med flex items-center justify-end gap-2 px-2 py-4 text-gray-700">
      <span>{label}</span>
      <div className="h-[14px] w-[1px] bg-gray-300" />
      <span>{value.toLocaleString()}</span>
    </div>
  );
}
