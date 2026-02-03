import { useAuth } from "@/hooks/use-auth";
import { Layout } from "@/components/layout/sidebar";
import { useAdminUsers, useApproveUser, useRejectUser } from "@/hooks/use-admin-users";
import { Redirect } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminUsersPage() {
  const { user, isLoading: authLoading } = useAuth();
  const { data: users, isLoading: usersLoading } = useAdminUsers();
  const approveMutation = useApproveUser();
  const rejectMutation = useRejectUser();
  const [search, setSearch] = useState("");

  if (authLoading) return null;
  if (!user || user.role !== "ADMIN") return <Redirect to="/dashboard" />;

  const filteredUsers = users?.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.firstName.toLowerCase().includes(search.toLowerCase()) ||
      u.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-400 tracking-[0.2em] uppercase">
            Admin Console
          </p>
          <h1 className="text-3xl font-display font-bold text-slate-900">User Management</h1>
          <p className="text-slate-500">Review KYC applications and manage accounts</p>
        </div>
      </div>

      <Card className="border-none shadow-xl shadow-slate-200/50">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between space-y-0 pb-4">
          <div className="space-y-1">
            <CardTitle>All Users</CardTitle>
            <CardDescription>Total users: {users?.length || 0}</CardDescription>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          {usersLoading ? (
            <div className="flex justify-center p-8">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            <>
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers?.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          {user.firstName} {user.lastName}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <StatusBadge status={user.status as any} />
                        </TableCell>
                        <TableCell className="font-mono">
                          ${Number(user.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="text-right">
                          {user.status === "PENDING" && (
                            <div className="flex justify-end gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50 border-green-200"
                                onClick={() => approveMutation.mutate(user.id)}
                                disabled={approveMutation.isPending}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                                onClick={() => rejectMutation.mutate(user.id)}
                                disabled={rejectMutation.isPending}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="md:hidden space-y-4">
                {filteredUsers?.map((user) => (
                  <div key={user.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-slate-900">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-sm text-slate-500 break-all">{user.email}</p>
                      </div>
                      <StatusBadge status={user.status as any} />
                    </div>
                    <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
                      <div>
                        <p className="text-xs text-slate-500">Balance</p>
                        <p className="font-mono font-bold text-slate-900">
                          ${Number(user.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                      {user.status === "PENDING" && (
                        <div className="flex gap-2 w-full sm:w-auto">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-green-600 border-green-200"
                            onClick={() => approveMutation.mutate(user.id)}
                            disabled={approveMutation.isPending}
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-red-600 border-red-200"
                            onClick={() => rejectMutation.mutate(user.id)}
                            disabled={rejectMutation.isPending}
                          >
                            Reject
                          </Button>
                        </div>
                      )}
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
