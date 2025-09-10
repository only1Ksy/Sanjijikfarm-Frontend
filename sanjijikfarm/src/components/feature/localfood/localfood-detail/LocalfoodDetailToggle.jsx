import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function LocalfoodDetailToggle({ onSelect, active }) {
  const [isReady, setIsReady] = useState(false);

  const sections = [
    { id: 'menu', label: '메뉴' },
    { id: 'review', label: '리뷰' },
  ];

  const activeIndex = sections.findIndex((section) => section.id === active);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-title-3 border-gray-2 relative flex h-12 w-full items-start border-b font-semibold">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          onClick={() => onSelect(id)}
          className="flex w-50.25 cursor-pointer flex-col items-center gap-2 pt-3 pb-2"
        >
          <span className={clsx(active === id ? 'text-gray-9' : 'text-gray-4')}>{label}</span>
        </div>
      ))}

      <div
        className={clsx('absolute bottom-0 h-0.5 bg-black', isReady && 'transition-transform duration-300 ease-in-out')}
        style={{
          width: `${100 / sections.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </div>
  );
}
