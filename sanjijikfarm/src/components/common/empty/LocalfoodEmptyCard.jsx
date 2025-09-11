import EmptyLogoIcon from '@/assets/icons/empty-logo.svg';

export default function LocalfoodEmptyCard({ text }) {
  return (
    <div className="text-gray-7 text-body-1 flex h-full w-full flex-col items-center justify-center gap-5 font-medium">
      <EmptyLogoIcon />
      <span>{text}</span>
    </div>
  );
}
