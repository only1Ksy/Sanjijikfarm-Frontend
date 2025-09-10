import { useNavigate } from 'react-router-dom';

import ReceiptCard from '../components/feature/Receipt/ReceiptCard';

export default function ReceiptMain() {
  const navigate = useNavigate();

  const dummyReceipts = [
    {
      id: '1',
      storeName: '김포로컬푸드 공동판매장',
      price: 46300,
      date: '2025.07.31.',
      rating: 3.8,
    },
    { id: '2', storeName: '김포로컬푸드 공동판매장', price: 46300, date: '2025.07.31.', rating: 0 },
    { id: '3', storeName: '김포로컬푸드 공동판매장', price: 46300, date: '2025.07.31.', rating: 3.8 },
  ];
  

  return (
    <div className="relative mx-auto w-full max-w-md px-4 py-8">
     {dummyReceipts.map((r) => (
        <ReceiptCard key={r.id} {...r} />
      ))}

      {/* + 버튼 */}
      <button
        onClick={() => navigate('/receipt/upload')}
        className="bg-gray-1 text-gray-7 fixed right-45 bottom-20 z-50 flex h-14 w-14 items-center justify-center rounded-full text-3xl"
      >
        +
      </button>
    </div>
  );
}
