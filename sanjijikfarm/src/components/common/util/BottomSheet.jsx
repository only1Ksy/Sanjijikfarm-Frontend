'use client';

import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

export default function BottomSheet({
  open,
  onClose,
  title,
  children,
  /** 시트 높이 (vh). 100이면 화면 꽉 채움 */
  heightVh = 90,
  /** 기본 스냅: 'half' | 'full' */
  initialSnap = 'half',
}) {
  const controls = useAnimation();
  const y = useMotionValue(0);
  const sheetRef = useRef(null);

  // 시트 높이를 px로 고정 계산
  const sheetHeightPx = useMemo(() => {
    if (typeof window === 'undefined') return 0;
    return Math.round(window.innerHeight * (heightVh / 100));
  }, [heightVh]);

  // 스냅 포인트(px): FULL=0, HALF=시트의 55%, CLOSED=시트의 100%
  const SNAP = useMemo(() => {
    const HALF = Math.round(sheetHeightPx * 0.55);
    return { FULL: 0, HALF, CLOSED: sheetHeightPx };
  }, [sheetHeightPx]);

  const animateTo = async (to) => {
    await controls.start({
      y: to,
      transition: { type: 'spring', stiffness: 380, damping: 36 },
    });
  };

  // 열릴 때 초기 위치로 이동 + body 스크롤 락 + ESC
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    animateTo(initialSnap === 'full' ? SNAP.FULL : SNAP.HALF);

    const onKey = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, SNAP.FULL, SNAP.HALF, initialSnap]);

  if (!open) return null;

  const handleClose = async () => {
    await animateTo(SNAP.CLOSED);
    onClose?.();
  };

  const handleOverlayClick = (e) => {
    if (sheetRef.current && sheetRef.current.contains(e.target)) return;
    handleClose();
  };

  const handleDragEnd = async (_e, info) => {
    const endY = y.get(); // 현재 시트의 translateY(px)
    const vy = info.velocity.y || 0;

    // 빠르게 아래로 당기면 닫기
    if (vy > 800) return handleClose();

    // 가장 가까운 스냅 찾기
    const candidates = [SNAP.FULL, SNAP.HALF, SNAP.CLOSED];
    const target = candidates.reduce(
      (prev, curr) => (Math.abs(curr - endY) < Math.abs(prev - endY) ? curr : prev),
      candidates[0],
    );

    await animateTo(target);
    if (target === SNAP.CLOSED) onClose?.();
  };

  return createPortal(
    <div className="fixed inset-0 z-[1000]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" onClick={handleOverlayClick} aria-hidden />

      {/* Sheet (높이를 px로 고정) */}
      <motion.div
        ref={sheetRef}
        className="absolute right-0 bottom-0 left-0 mx-auto w-full max-w-[402px] rounded-t-2xl bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.25)]"
        style={{ height: sheetHeightPx, y }}
        initial={{ y: sheetHeightPx }}
        animate={controls}
        drag="y"
        dragConstraints={{ top: 0, bottom: sheetHeightPx }}
        dragElastic={0.12}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
      >
        {/* Handle + Header */}
        <div className="cursor-grab select-none active:cursor-grabbing">
          <div className="border-gray-2 flex flex-col items-center border-b px-5 pt-3 pb-2">
            <div className="mb-2 h-1.5 w-10 rounded-full bg-gray-300" />
            {title ? (
              <div className="flex w-full items-center justify-between pb-2">
                <h2 className="text-title-3 font-bold">{title}</h2>
                <button
                  onClick={handleClose}
                  className="cursor-pointer rounded-md px-2 py-1 text-gray-500 hover:bg-gray-100"
                  aria-label="close"
                >
                  ✕
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {/* Content: 내부만 스크롤 */}
        <div className="scrollbar-hide max-h-full overflow-auto pt-2" style={{ WebkitOverflowScrolling: 'touch' }}>
          {children}
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}
