"use client";

import { useAuth } from "@/hooks/use-auth";
import { Layout } from "@/components/layout/sidebar";
import { useAllTransactions } from "@/hooks/use-transactions";
import { Redirect } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CreateTransactionDialog } from "@/components/transactions/transaction-dialog";
import { EditTransactionDialog } from "@/components/transactions/edit-transaction-dialog";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminTransactionsPage() {
  const { user, isLoading: authLoading } = useAuth();
  const { data: transactions, isLoading: txLoading } = useAllTransactions();

  if (authLoading) return null;
  if (!user || user.role !== "ADMIN") return <Redirect to="/dashboard" />;

  return (
    <Layout>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-400 tracking-[0.2em] uppercase">
            Admin Console
          </p>
          <h1 className="text-3xl font-display font-bold text-slate-900">System Transactions</h1>
          <p className="text-slate-500">Monitor and manage all banking activities</p>
        </div>
        <div className="w-full sm:w-auto">
          <CreateTransactionDialog />
        </div>
      </div>

      <Card className="border-none shadow-xl shadow-slate-200/50">
        <CardHeader>
          <CardTitle>Global Ledger</CardTitle>
          <CardDescription>All credit and debit operations across the system</CardDescription>
        </CardHeader>
        <CardContent>
          {txLoading ? (
            <div className="flex justify-center p-8">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            <>
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>User ID</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="w-[100px] text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions?.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell className="text-slate-500">
                          {format(new Date(tx.createdAt || new Date()), "MMM dd, yyyy HH:mm")}
                        </TableCell>
                        <TableCell className="font-mono text-xs">#{tx.userId}</TableCell>
                        <TableCell className="font-medium">{tx.description}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${tx.type === "CREDIT"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                              }`}
                          >
                            {tx.type}
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-mono font-bold">
                          ${Number(tx.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="text-right">
                          <EditTransactionDialog transaction={tx} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="md:hidden space-y-4">
                {transactions?.map((tx) => (
                  <div
                    key={tx.id}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
                      <span>{format(new Date(tx.createdAt || new Date()), "MMM dd, yyyy HH:mm")}</span>
                      <span className="font-mono text-xs">#{tx.userId}</span>
                    </div>
                    <p className="font-semibold text-slate-900">{tx.description}</p>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${tx.type === "CREDIT"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                          }`}
                      >
                        {tx.type}
                      </span>
                      <span
                        className={`text-lg font-mono font-bold ${tx.type === "CREDIT" ? "text-green-600" : "text-red-600"
                          }`}
                      >
                        ${Number(tx.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                      <EditTransactionDialog transaction={tx} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </Layout>
  );
}
