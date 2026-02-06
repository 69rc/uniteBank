"use client";

import { useAuth } from "@/hooks/use-auth";
import { Layout } from "@/components/layout/sidebar";
import { useAdminUsers, useApproveUser, useRejectUser } from "@/hooks/use-admin-users";
import { Redirect } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Search, Loader2, Eye, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCallback, useMemo, useState } from "react";
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
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const { toast } = useToast();

  if (authLoading) return null;
  if (!user || user.role !== "ADMIN") return <Redirect to="/dashboard" />;

  const filteredUsers = users?.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.firstName.toLowerCase().includes(search.toLowerCase()) ||
      u.lastName.toLowerCase().includes(search.toLowerCase())
  );

  const selectedUser = useMemo(() => {
    if (!selectedUserId) return null;
    return users?.find((u) => u.id === selectedUserId) ?? null;
  }, [selectedUserId, users]);

  const handleCopy = useCallback(
    async (value?: string | null) => {
      if (!value) return;
      await navigator.clipboard.writeText(value);
      toast({ title: "Copied", description: `${value} copied to clipboard` });
    },
    [toast]
  );

  const closeDialog = useCallback(() => setSelectedUserId(null), []);

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

      <TooltipProvider>
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
                      {filteredUsers?.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">
                            {item.firstName} {item.lastName}
                          </TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>
                            <StatusBadge status={item.status as any} />
                          </TableCell>
                          <TableCell className="font-mono">
                            ${Number(item.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-8 w-8 p-0"
                                    onClick={() => setSelectedUserId(item.id)}
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>View details</TooltipContent>
                              </Tooltip>
                              {item.status === "PENDING" && (
                                <>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50 border-green-200"
                                        onClick={() => approveMutation.mutate(item.id)}
                                        disabled={approveMutation.isPending}
                                      >
                                        <Check className="h-4 w-4" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Approve</TooltipContent>
                                  </Tooltip>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                                        onClick={() => rejectMutation.mutate(item.id)}
                                        disabled={rejectMutation.isPending}
                                      >
                                        <X className="h-4 w-4" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Reject</TooltipContent>
                                  </Tooltip>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="md:hidden space-y-4">
                  {filteredUsers?.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {item.firstName} {item.lastName}
                          </p>
                          <p className="text-sm text-slate-500 break-all">{item.email}</p>
                        </div>
                        <StatusBadge status={item.status as any} />
                      </div>
                      <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
                        <div>
                          <p className="text-xs text-slate-500">Balance</p>
                          <p className="font-mono font-bold text-slate-900">
                            ${Number(item.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                          <Button size="sm" variant="secondary" className="flex-1" onClick={() => setSelectedUserId(item.id)}>
                            View
                          </Button>
                          {item.status === "PENDING" && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 text-green-600 border-green-200"
                                onClick={() => approveMutation.mutate(item.id)}
                                disabled={approveMutation.isPending}
                              >
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 text-red-600 border-red-200"
                                onClick={() => rejectMutation.mutate(item.id)}
                                disabled={rejectMutation.isPending}
                              >
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </TooltipProvider>

      <Dialog open={!!selectedUser} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="max-w-xl">
          {selectedUser && (
            <>
              <DialogHeader>
                <DialogTitle>
                  {selectedUser.firstName} {selectedUser.lastName}
                </DialogTitle>
                <DialogDescription className="space-x-2">
                  <Badge variant="secondary">{selectedUser.status}</Badge>
                  <Badge variant="outline">{selectedUser.role}</Badge>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <p className="text-sm text-slate-500">Account Number</p>
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-lg break-all">
                      {selectedUser.accountNumber || "Not assigned"}
                    </p>
                    {selectedUser.accountNumber && (
                      <Button variant="ghost" size="icon" onClick={() => handleCopy(selectedUser.accountNumber)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <div className="grid gap-1 text-sm">
                  <p className="text-slate-500">Email</p>
                  <p>{selectedUser.email}</p>
                </div>
                <div className="grid gap-1 text-sm">
                  <p className="text-slate-500">Phone</p>
                  <p>{selectedUser.phone}</p>
                </div>
                <div className="grid gap-1 text-sm">
                  <p className="text-slate-500">Balance</p>
                  <p className="font-mono font-semibold">
                    ${Number(selectedUser.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
