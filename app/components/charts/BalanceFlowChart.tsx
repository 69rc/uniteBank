import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface BalanceFlowData {
  month: string;
  balance: number;
  deposits: number;
  withdrawals: number;
}

interface BalanceFlowChartProps {
  data: BalanceFlowData[];
}

export function BalanceFlowChart({ data }: BalanceFlowChartProps) {
  return (
    <Card className="border-none shadow-xl shadow-slate-200/50">
      <CardHeader>
        <CardTitle>Balance Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend />
            <Bar dataKey="balance" fill="#3b82f6" name="Account Balance" radius={[4, 4, 0, 0]} />
            <Bar dataKey="deposits" fill="#10b981" name="Deposits" radius={[4, 4, 0, 0]} />
            <Bar dataKey="withdrawals" fill="#ef4444" name="Withdrawals" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}