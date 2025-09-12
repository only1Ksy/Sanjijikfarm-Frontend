import LocalfoodEmptyCard from '@/components/common/empty/LocalfoodEmptyCard';
import LikeLocalfoodCard from '@/components/common/like/LikeLocalfoodCard';

export default function MyLikesPage() {
  const TEMP_MENU_LIST = [
    {
      id: 1,
      name: '사과',
      price: 3000,
      hasNoReview: false,
      rating: 4.2,
      likeCount: 45,
      isLiked: true,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: '배',
      price: 4000,
      hasNoReview: false,
      rating: 4.0,
      likeCount: 30,
      isLiked: false,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: '감',
      price: 5000,
      hasNoReview: false,
      rating: 3.8,
      likeCount: 22,
      isLiked: false,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: '귤',
      price: 6000,
      hasNoReview: false,
      rating: 4.5,
      likeCount: 60,
      isLiked: true,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: '포도',
      price: 7000,
      hasNoReview: false,
      rating: 4.1,
      likeCount: 38,
      isLiked: false,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: '포도',
      price: 7000,
      hasNoReview: false,
      rating: 4.1,
      likeCount: 38,
      isLiked: false,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: '포도',
      price: 7000,
      hasNoReview: false,
      rating: 4.1,
      likeCount: 38,
      isLiked: false,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: '포도',
      price: 7000,
      hasNoReview: false,
      rating: 4.1,
      likeCount: 38,
      isLiked: false,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: '포도',
      price: 7000,
      hasNoReview: false,
      rating: 4.1,
      likeCount: 38,
      isLiked: false,
      url: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="flex h-full w-full">
      <div className="scrollbar-hide flex flex-grow flex-col overflow-scroll">
        {TEMP_MENU_LIST.length > 0 ? (
          TEMP_MENU_LIST.map((localfood) => <LikeLocalfoodCard key={localfood.id} localfood={localfood} />)
        ) : (
          <LocalfoodEmptyCard text="아직 찜한 메뉴가 없습니다." />
        )}
      </div>
    </div>
  );
}
