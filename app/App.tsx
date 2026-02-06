"use client";

import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/landing-page";
import AuthPage from "@/pages/auth-page";
import Dashboard from "@/pages/dashboard";
import TransactionsPage from "@/pages/transactions";
import TransferPage from "@/pages/transfer";
import AdminUsersPage from "@/pages/admin/admin-users";
import AdminTransactionsPage from "@/pages/admin/admin-transactions";
import AdminTransfersPage from "@/pages/admin/admin-transfers";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/transfer" component={TransferPage} />
      <Route path="/transactions" component={TransactionsPage} />
      <Route path="/admin/users" component={AdminUsersPage} />
      <Route path="/admin/transactions" component={AdminTransactionsPage} />
      <Route path="/admin/transfers" component={AdminTransfersPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
