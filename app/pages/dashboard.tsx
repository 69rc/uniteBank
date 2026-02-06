"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Layout } from "@/components/layout/sidebar";
import { useTransactions } from "@/hooks/use-transactions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  CreditCard,
  Clock,
  AlertCircle,
  DollarSign,
  PiggyBank,
  Activity,
  Eye,
  EyeOff,
} from "lucide-react";
import { format } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useLocation } from "wouter";
import { BalanceFlowChart } from "@/components/charts/BalanceFlowChart";
import { LoansChart } from "@/components/charts/LoansChart";
import { DepositsTrendChart } from "@/components/charts/DepositsTrendChart";
import { AccountCreationTrendChart } from "@/components/charts/AccountCreationTrendChart";

// Mock data for charts - in a real app, this would come from API
const mockBalanceData = [
  { month: 'Jan', balance: 12000, deposits: 2000, withdrawals: 500 },
  { month: 'Feb', balance: 15000, deposits: 3500, withdrawals: 500 },
  { month: 'Mar', balance: 18000, deposits: 4000, withdrawals: 1000 },
  { month: 'Apr', balance: 16500, deposits: 2500, withdrawals: 4000 },
  { month: 'May', balance: 22000, deposits: 6000, withdrawals: 500 },
  { month: 'Jun', balance: 25000, deposits: 4500, withdrawals: 1500 },
];

const mockLoanData = [
  { name: 'Personal Loan', value: 15000 },
  { name: 'Mortgage', value: 250000 },
  { name: 'Auto Loan', value: 25000 },
  { name: 'Credit Card', value: 5000 },
];

const mockDepositData = [
  { day: 'Mon', amount: 4000 },
  { day: 'Tue', amount: 3000 },
  { day: 'Wed', amount: 2000 },
  { day: 'Thu', amount: 2780 },
  { day: 'Fri', amount: 1890 },
  { day: 'Sat', amount: 2390 },
  { day: 'Sun', amount: 3490 },
];

const mockAccountCreationData = [
  { month: 'Jan', count: 45 },
  { month: 'Feb', count: 52 },
  { month: 'Mar', count: 48 },
  { month: 'Apr', count: 78 },
  { month: 'May', count: 92 },
  { month: 'Jun', count: 110 },
];

export default function Dashboard() {
  const { user, isLoading: authLoading } = useAuth();
  const { data: transactions, isLoading: txLoading } = useTransactions();
  const [, setLocation] = useLocation();
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  // Redirect to auth if not authenticated
  if (!authLoading && !user) {
    setLocation("/auth");
    return null;
  }

  if (authLoading || txLoading) {
    return (
      <Layout>
        <div className="space-y-6">
          <Skeleton className="h-48 w-full rounded-2xl" />
          <Skeleton className="h-96 w-full rounded-2xl" />
        </div>
      </Layout>
    );
  }

  if (user?.status === "PENDING") {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto mt-20">
          <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 p-6 rounded-2xl shadow-lg">
            <Clock className="h-6 w-6" />
            <AlertTitle className="text-xl font-bold mb-2">Account Under Review</AlertTitle>
            <AlertDescription className="text-yellow-700/80">
              Your application is currently being reviewed by our compliance team.
              Once approved, you will gain full access to your account and dashboard features.
            </AlertDescription>
          </Alert>
        </div>
      </Layout>
    );
  }

  if (user?.status === "REJECTED") {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto mt-20">
          <Alert variant="destructive" className="p-6 rounded-2xl shadow-lg">
            <AlertCircle className="h-6 w-6" />
            <AlertTitle className="text-xl font-bold mb-2">Application Rejected</AlertTitle>
            <AlertDescription>
              Unfortunately, we could not approve your application at this time.
              Please contact support for more information.
            </AlertDescription>
          </Alert>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-between w-full">
        <div className="space-y-2 w-full">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Welcome back</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">
                Financial Overview
              </h1>
              <p className="text-slate-500">Good to see you, {user?.firstName}</p>
            </div>
          </div>
        </div>
        <Button
          className="w-full sm:w-auto shadow-lg shadow-primary/30"
          onClick={() => setLocation("/transactions?view=deposit")}
        >
          <DollarSign className="h-4 w-4" />
          Deposit
        </Button>
      </div>

      {/* Account Card */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl p-6 sm:p-8 min-h-[20rem] flex flex-col justify-between">
        {/* Abstract card decoration */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 z-10">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Account Type</p>
            <p className="text-2xl font-semibold">Premium Savings</p>
          </div>
          <CreditCard className="w-10 h-10 text-yellow-400" />
        </div>

        <div className="z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Available Balance</p>
              <p className="font-mono text-4xl sm:text-5xl tracking-tight">
                {isBalanceVisible
                  ? `$${Number(user?.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}`
                  : "••••••••"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="text-white border-white/30 bg-white/10 hover:bg-white/20"
                onClick={() => setIsBalanceVisible((prev) => !prev)}
              >
                {isBalanceVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {isBalanceVisible ? "Hide" : "Show"}
              </Button>
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-sm font-medium mb-2">Account Number</p>
            <p className="font-mono text-3xl sm:text-4xl tracking-widest break-all">
              {user?.accountNumber?.replace(/(.{4})/g, "$1 ")}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-none shadow-xl shadow-slate-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Balance</p>
                <p className="text-2xl font-bold">${Number(user?.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl shadow-slate-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Loans</p>
                <p className="text-2xl font-bold">$295,000</p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <Activity className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl shadow-slate-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Deposits (30d)</p>
                <p className="text-2xl font-bold">$12,500</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl shadow-slate-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Savings Rate</p>
                <p className="text-2xl font-bold">24%</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <PiggyBank className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card className="border-none shadow-xl shadow-slate-200/50">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-4 px-4 font-medium text-slate-500">Date</th>
                  <th className="text-left py-4 px-4 font-medium text-slate-500">Description</th>
                  <th className="text-left py-4 px-4 font-medium text-slate-500">Type</th>
                  <th className="text-right py-4 px-4 font-medium text-slate-500">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions?.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-slate-500">
                      No transactions found
                    </td>
                  </tr>
                ) : (
                  transactions?.map((tx) => (
                    <tr
                      key={tx.id}
                      className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0"
                    >
                      <td className="py-4 px-4 text-slate-600">
                        {format(new Date(tx.createdAt || new Date()), "MMM dd, yyyy")}
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-900">{tx.description}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            tx.type === "CREDIT"
                              ? "bg-green-100 text-green-800"
                              : "bg-slate-100 text-slate-800"
                          }`}
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td
                        className={`text-right py-4 px-4 font-bold font-mono ${
                          tx.type === "CREDIT" ? "text-green-600" : "text-slate-900"
                        }`}
                      >
                        {tx.type === "CREDIT" ? "+" : "-"}${Number(tx.amount).toLocaleString(
                          "en-US",
                          { minimumFractionDigits: 2 }
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4">
            {transactions?.length === 0 ? (
              <p className="text-center py-6 text-slate-500">No transactions found</p>
            ) : (
              transactions?.map((tx) => (
                <div
                  key={tx.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-slate-500">
                      {format(new Date(tx.createdAt || new Date()), "MMM dd, yyyy")}
                    </p>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        tx.type === "CREDIT"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {tx.type}
                    </span>
                  </div>
                  <p className="font-semibold text-slate-900 mb-1">{tx.description}</p>
                  <p
                    className={`text-lg font-mono font-bold ${
                      tx.type === "CREDIT" ? "text-green-600" : "text-slate-900"
                    }`}
                  >
                    {tx.type === "CREDIT" ? "+" : "-"}${Number(tx.amount).toLocaleString(
                      "en-US",
                      { minimumFractionDigits: 2 }
                    )}
                  </p>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Balance Flow Chart */}
        <BalanceFlowChart data={mockBalanceData} />

        {/* Loan Distribution Chart */}
        <LoansChart data={mockLoanData} />

        {/* Deposits Trend Chart */}
        <DepositsTrendChart data={mockDepositData} />

        {/* Account Creation Trend */}
        <AccountCreationTrendChart data={mockAccountCreationData} />
      </div>
    </Layout>
  );
}
