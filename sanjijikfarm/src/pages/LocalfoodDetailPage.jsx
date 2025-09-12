import { useState } from 'react';

import LocalfoodEmptyCard from '@/components/common/empty/LocalfoodEmptyCard';
import LikeLocalfoodCard from '@/components/common/like/LikeLocalfoodCard';
import ReviewCard from '@/components/common/review/ReviewCard';
import LocalfoodDetailToggle from '@/components/feature/localfood/localfood-detail/LocalfoodDetailToggle';
import UpperLocafoodInfo from '@/components/feature/localfood/localfood-detail/UpperLocafoodInfo';

export default function LocalfoodDetailPage() {
  const [activeTab, setActiveTab] = useState('menu');

  const TEMP_LOCALFOOD_DETAIL = {
    id: 1,
    name: '김포로컬푸트 공동판매장',
    rating: 3.8,
    reviewCount: 37,
    address: '경기도 김포시',
    url: 'https://via.placeholder.com/',
    phone: '010-1234-5678',
  };

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
  ];

  const TEMP_REVIEW_LIST = [
    { id: 1, name: '딸기', date: '2023-10-01', rating: 5, content: '맛있어요!', reviewImages: [] },
    {
      id: 2,
      name: '바나나',
      date: '2023-10-02',
      rating: 4,
      content:
        '좋아요! 다음에 또 구매할게요. 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 긴 리뷰 테스트 ',
      reviewImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
    },
    {
      id: 3,
      name: '키위',
      date: '2023-10-03',
      rating: 3,
      content: '그저 그래요.',
      reviewImages: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
      ],
    },
    { id: 4, name: '망고', date: '2023-10-04', rating: 5, content: '최고예요!', reviewImages: [] },
    { id: 5, name: '파인애플', date: '2023-10-05', rating: 4, content: '괜찮아요.', reviewImages: [] },
  ];

  // TODO: Fetch data from API and replace TEMP data
  // (activeTab 상태에 따라 메뉴 or 리뷰 API 호출)

  return (
    <div className="flex h-full w-full flex-col">
      <UpperLocafoodInfo shop={TEMP_LOCALFOOD_DETAIL} />
      <LocalfoodDetailToggle onSelect={setActiveTab} active={activeTab} />
      <div className="scrollbar-hide flex flex-grow flex-col overflow-scroll">
        {activeTab === 'menu' ? (
          TEMP_MENU_LIST.length > 0 ? (
            TEMP_MENU_LIST.map((localfood) => <LikeLocalfoodCard key={localfood.id} localfood={localfood} />)
          ) : (
            <LocalfoodEmptyCard text="아직 등록된 메뉴가 없습니다." />
          )
        ) : TEMP_REVIEW_LIST.length > 0 ? (
          TEMP_REVIEW_LIST.map((review) => <ReviewCard key={review.id} review={review} />)
        ) : (
          <LocalfoodEmptyCard text="아직 등록된 리뷰가 없습니다." />
        )}
      </div>
    </div>
  );
}
