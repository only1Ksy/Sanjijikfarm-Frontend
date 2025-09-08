export default function ReportSummary({ totalPurchases, totalReducedCO2 }) {
  return (
    <div className="mt-6 mb-8 text-center">
      <p className="text-title-1 font-bold text-black">{`이번달`}</p>
      <p className="text-title-1 font-bold text-black">
        <span className="text-title-1 text-main-brown font-bold">{totalPurchases}건</span> 구매하고
        <br />총{' '}
        <span className="text-title-1 text-main-brown font-bold">{totalReducedCO2.toLocaleString()}kg-Co2</span>{' '}
        절감했어요
      </p>
    </div>
  );
}
