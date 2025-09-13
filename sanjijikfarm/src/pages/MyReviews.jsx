import ReviewCard from '@/components/common/review/ReviewCard';

export default function MyReviews() {
  // 나중엔 API에서 불러오기
  const myReviews = [
    {
      name: 'P딸기(이현) 로컬푸드',
      date: '2025.07.29',
      rating: 4,
      content: '딸기가 너무너무 맛있어요',
      reviewImages: ['/example.jpg', '/example.jpg', '/example.jpg'],
    },
    {
      name: 'P딸기(이현) 로컬푸드',
      date: '2025.07.29',
      rating: 3,
      content: '리뷰 텍스트 리뷰 텍스트 리뷰 텍스트',
      reviewImages: [],
    },
  ];

  return (
    <div className="h-screen overflow-y-auto p-4">
      {myReviews.map((review, idx) => (
        <ReviewCard key={idx} review={review} />
      ))}
    </div>
  );
}
