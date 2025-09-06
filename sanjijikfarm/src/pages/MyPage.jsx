import { useNavigate } from 'react-router-dom';
import ArrowIcon from '@/assets/icons/right-arrow.svg';

export default function MyPage() {
  const navigate = useNavigate();

  const menuList = [
    { label: '나의 구매내역', path: '/mypage/purchases' },
    { label: '나의 리뷰', path: '/mypage/reviews' },
    { label: '찜한 로컬푸드', path: '/mypage/likes' },
    { label: '환경 기여 배지', path: '/mypage/badges' },
  ];

  return (
    <div className="flex flex-col items-center px-5 pt-10">
      {/* 프로필 영역 */}
      <div className="flex flex-col items-center w-full border-b border-gray-200 pb-10">
        {/* 프로필 이미지 (placeholder) */}
        <div className="w-16 h-16 rounded-full bg-gray-300 mb-6" />

        {/* 사용자명 + 화살표 */}
        <button
          type="button"
          onClick={() => navigate('/mypage/profile')}
          className="flex items-center text-title-2 font-semibold"
        >
          김회원
          <ArrowIcon className="w-3 h-3 ml-5" alt="프로필 이동" />
        </button>
      </div>

      {/* 메뉴 리스트 */}
      <div className="w-full mt-12 space-y-7">
        {menuList.map((menu, idx) => (
          <button
            key={idx}
            onClick={() => navigate(menu.path)}
            className="flex w-full items-center justify-between text-title-2 font-bold"
          >
            {menu.label}
            <ArrowIcon className="w-3 h-3" alt="프로필 이동" />
          </button>
        ))}
      </div>
    </div>
  );
}
