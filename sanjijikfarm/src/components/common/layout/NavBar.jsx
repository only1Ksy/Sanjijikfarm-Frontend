export default function NavBar() {
  return (
    <div className="absolute bottom-0 flex h-16 w-full items-center justify-center gap-8.5 bg-white shadow-2xl">
      <span className="text-body-2-med font-medium">홈</span>
      <span className="text-body-2-med font-medium">영수증</span>
      <span className="text-body-2-med font-medium">로컬푸드</span>
      <span className="text-body-2-med font-medium">소비리포트</span>
      <span className="text-body-2-med font-medium">마이페이지</span>
    </div>
  );
}
