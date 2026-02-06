import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface DepositData {
  day: string;
  amount: number;
}

interface DepositsTrendChartProps {
  data: DepositData[];
}

export function DepositsTrendChart({ data }: DepositsTrendChartProps) {
  return (
    <Card className="border-none shadow-xl shadow-slate-200/50">
      <CardHeader>
        <CardTitle>Daily Deposits Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Amount']}
              labelFormatter={(label) => `Day: ${label}`}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#10b981" 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
              name="Daily Deposits"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}