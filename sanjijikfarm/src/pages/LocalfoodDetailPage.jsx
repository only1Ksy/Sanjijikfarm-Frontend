import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getShopProductList } from '@/api/localfood/ProductController';
import { getShopReviewList } from '@/api/localfood/ReviewController';
import { getShopDetail } from '@/api/localfood/ShopController';
import LocalfoodEmptyCard from '@/components/common/empty/LocalfoodEmptyCard';
import LikeLocalfoodCard from '@/components/common/like/LikeLocalfoodCard';
import ReviewCard from '@/components/common/review/ReviewCard';
import LocalfoodDetailToggle from '@/components/feature/localfood/localfood-detail/LocalfoodDetailToggle';
import UpperLocafoodInfo from '@/components/feature/localfood/localfood-detail/UpperLocafoodInfo';

export default function LocalfoodDetailPage() {
  // URL 파라미터에서 shopId 추출
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('menu');

  // 매장 상세 정보 쿼리
  const {
    data: shopDetail,
    isLoading: isShopDetailLoading,
    error: shopDetailError,
  } = useQuery({
    queryKey: ['shopDetail', id],
    queryFn: () => getShopDetail(id),
    enabled: !!id, // id가 있을 때만 쿼리 실행
  });
  // 매장 상품 리스트 쿼리
  const {
    data: shopProducts = [],
    isLoading: isShopProductsLoading,
    error: shopProductsError,
  } = useQuery({
    queryKey: ['shopProducts', id],
    queryFn: () => getShopProductList(id),
    enabled: !!id && activeTab == 'menu', // id가 있을 때, menu 탭인 경우만 쿼리 실행
  });
  // 매장 리뷰 리스트 쿼리
  const {
    data: shopReviews,
    isLoading: isShopReviewsLoading,
    error: shopReviewsError,
  } = useQuery({
    queryKey: ['shopReviews', id],
    queryFn: () => getShopReviewList(id),
    enabled: !!id && activeTab == 'review', // id가 있을 때, review 탭인 경우만 쿼리 실행
  });

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading shop details.</div>;
  // if (!shopDetail) return <div>No shop details found.</div>;

  console.log(shopReviews);
  console.log('isLoading:', isShopDetailLoading, isShopProductsLoading, isShopReviewsLoading);
  console.log('error:', shopDetailError, shopProductsError, shopReviewsError);

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

  return (
    <div className="flex h-full w-full flex-col">
      <UpperLocafoodInfo shop={shopDetail} />
      <LocalfoodDetailToggle onSelect={setActiveTab} active={activeTab} />
      <div className="scrollbar-hide flex flex-grow flex-col overflow-scroll">
        {activeTab === 'menu' ? (
          shopProducts.length > 0 ? (
            shopProducts.map((localfood) => <LikeLocalfoodCard key={localfood.productId} localfood={localfood} />)
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
