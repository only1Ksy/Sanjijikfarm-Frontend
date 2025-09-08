import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export default function WeeklyBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data} barCategoryGap="30%">
        <XAxis
          dataKey="week"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 18, fontWeight: 700, fill: '#1E1E1E' }}
          tickMargin={12}
        />
        <YAxis hide />
        <Bar dataKey="value" fill="#2F9C53" barSize={35} />
      </BarChart>
    </ResponsiveContainer>
  );
}
