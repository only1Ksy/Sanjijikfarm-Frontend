import ReviewCard from '../components/feature/mypage/ReviewCard';

export default function MyReviews() {
  // 나중엔 API에서 불러오기
  const myReviews = [
    {
      name: 'P딸기(이현) 로컬푸드',
      date: '2025.07.29',
      rating: 4,
      text: '딸기가 너무너무 맛있어요',
      images: ['/example.jpg', '/example.jpg', '/example.jpg'],
      likes: 177,
    },
    {
      name: 'P딸기(이현) 로컬푸드',
      date: '2025.07.29',
      rating: 3,
      text: '리뷰 텍스트 리뷰 텍스트 리뷰 텍스트',
      images: [],
      likes: 88,
    },
  ];

  return (
    <div className="h-screen overflow-y-auto p-[1rem]">
      {myReviews.map((review, idx) => (
        <ReviewCard key={idx} {...review} />
      ))}
    </div>
  );
}
