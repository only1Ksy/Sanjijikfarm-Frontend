export default function ReportSummary({ totalPurchases, totalReducedCO2 }) {
  return (
    <div className="text-center mt-6 mb-8">
      <p className="text-title-1 text-black font-bold">{`이번달`}</p>
      <p className="text-title-1 font-bold text-black">
        <span className="text-title-1 font-bold text-main-brown">
          {totalPurchases}건
        </span>{' '}
        구매하고<br />
        총{' '}
        <span className="text-title-1 font-bold text-main-brown">
          {totalReducedCO2.toLocaleString()}kg-Co2
        </span>{' '}
        절감했어요
      </p>
    </div>
  );
}
