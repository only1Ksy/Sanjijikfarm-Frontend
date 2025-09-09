import { NavLink } from 'react-router-dom';

import LogoIcon from '@/assets/icons/logo.svg';

export default function SplashPage() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
      <LogoIcon />
      <div className="text-title-0 flex flex-col items-center font-extrabold">
        <span>로컬푸드 플랫폼,</span>
        <span>
          <span className="text-main-green">산지직팜</span>
          <span>에 오신 것을</span>
        </span>
        <span>환영합니다</span>
      </div>
      <div className="text-body-2-med flex flex-col items-center font-medium">
        <span>우리 앱을 통해 로컬푸드 소비를 인증하고,</span>
        <span>탄소 절감 효과를 확인해 보세요.</span>
      </div>
      <div className="flex gap-4">
        <NavLink
          to={'/login'}
          className="bg-main-green text-body-1 flex h-7.75 w-17.75 items-center justify-center rounded-2xl font-bold text-white"
        >
          로그인
        </NavLink>
        <NavLink
          to={'/signup'}
          className="text-body-1 text-main-green border-main-green flex h-7.75 w-17.75 items-center justify-center rounded-2xl border-2 bg-white font-bold"
        >
          회원가입
        </NavLink>
      </div>
    </div>
  );
}
