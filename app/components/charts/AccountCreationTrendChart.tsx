import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface AccountCreationData {
  month: string;
  count: number;
}

interface AccountCreationTrendChartProps {
  data: AccountCreationData[];
}

export function AccountCreationTrendChart({ data }: AccountCreationTrendChartProps) {
  return (
    <Card className="border-none shadow-xl shadow-slate-200/50">
      <CardHeader>
        <CardTitle>Account Creation Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value} accounts`, 'New Accounts']}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="count" 
              stroke="#8b5cf6" 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
              name="New Accounts"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}