import PurchaseHistory from '../components/feature/Report/PurchaseHistory';
import ReportSummary from '../components/feature/Report/ReportSummary';
import WeeklyBarChart from '../components/feature/Report/WeekyBarChart';

const mockData = {
  month: '2025년 7월',
  totalPurchases: 10,
  totalReducedCO2: 5000,
  weeklyReduction: [
    { week: '첫째주', value: 0 },
    { week: '둘째주', value: 1000 },
    { week: '셋째주', value: 1500 },
    { week: '넷째주', value: 2500 },
  ],
  history: [
    {
      date: '2025.08.01',
      items: [
        {
          store: '○○○직판장',
          product: '복숭아',
          amount: '1,000kg-Co2',
        },
        {
          store: '○○○직판장',
          product: '복숭아 / 1개',
          amount: '1,000kg-Co2',
        },
      ],
    },
  ],
};

export default function ReportPage() {
  return (
    <div className="scrollbar-hide h-screen max-h-[82vh] overflow-y-auto pt-[1.7rem]">
      <h2 className="text-title-3 text-center font-bold">{mockData.month}</h2>
      <ReportSummary totalPurchases={mockData.totalPurchases} totalReducedCO2={mockData.totalReducedCO2} />
      <WeeklyBarChart data={mockData.weeklyReduction} />

      <div className="mt-2 border-t border-gray-200">
        <PurchaseHistory history={mockData.history} />
      </div>
    </div>
  );
}
