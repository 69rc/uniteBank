"use client";

import { useAuth } from "@/hooks/use-auth";
import { Layout } from "@/components/layout/sidebar";
import { useTransactions } from "@/hooks/use-transactions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  CreditCard,
  Clock,
  AlertCircle,
} from "lucide-react";
import { format } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useLocation } from "wouter";

export default function Dashboard() {
  const { user, isLoading: authLoading } = useAuth();
  const { data: transactions, isLoading: txLoading } = useTransactions();
  const [, setLocation] = useLocation();

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
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 w-full max-w-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-1">
            Current Balance
          </p>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
            ${Number(user?.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Account Card */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl p-6 sm:p-8 min-h-[18rem] flex flex-col justify-between">
        {/* Abstract card decoration */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 z-10">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Account Type</p>
            <p className="text-2xl font-semibold">Premium Savings</p>
          </div>
          <CreditCard className="w-10 h-10 text-yellow-400" />
        </div>

        <div className="z-10">
          <p className="text-slate-400 text-sm font-medium mb-2">Account Number</p>
          <p className="font-mono text-3xl sm:text-4xl tracking-widest break-all">
            {user?.accountNumber?.replace(/(.{4})/g, "$1 ")}
          </p>
        </div>
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
    </Layout>
  );
}
