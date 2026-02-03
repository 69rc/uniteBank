import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import {
  LayoutDashboard,
  Users,
  ArrowRightLeft,
  LogOut,
  ShieldCheck,
  Landmark,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const getNavItems = (isAdmin: boolean) => [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    show: true,
  },
  {
    label: "User Management",
    href: "/admin/users",
    icon: Users,
    show: isAdmin,
  },
  {
    label: isAdmin ? "All Transactions" : "My Transactions",
    href: isAdmin ? "/admin/transactions" : "/dashboard",
    icon: ArrowRightLeft,
    show: true,
  },
];

export function Sidebar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();

  const isAdmin = user?.role === "ADMIN";
  const navItems = getNavItems(isAdmin);

  return (
    <div className="hidden md:flex h-screen w-64 bg-slate-900 text-white flex-col fixed left-0 top-0 border-r border-slate-800 shadow-2xl z-40">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-lg shadow-yellow-500/20">
            <Landmark className="w-6 h-6 text-slate-900" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            United<span className="text-yellow-500">Horizon</span>
          </span>
        </div>
      </div>

      <div className="flex-1 py-6 px-4 space-y-2">
        {navItems
          .filter((item) => item.show)
          .map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive
                    ? "bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/5"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5",
                    isActive
                      ? "text-yellow-400"
                      : "group-hover:text-yellow-400 transition-colors"
                  )}
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
      </div>

      <div className="p-6 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold border-2 border-slate-700 shadow-inner">
            {user?.firstName?.[0]}
            {user?.lastName?.[0]}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <div className="flex items-center gap-1">
              {isAdmin && <ShieldCheck className="w-3 h-3 text-yellow-500" />}
              <p className="text-xs text-slate-400 truncate">{user?.email}</p>
            </div>
          </div>
        </div>

        <Button
          variant="destructive"
          className="w-full justify-start gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border-none"
          onClick={() => logoutMutation.mutate()}
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const isAdmin = user?.role === "ADMIN";
  const navItems = getNavItems(isAdmin);

  return (
    <div className="md:hidden sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b border-slate-200">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-lg shadow-yellow-500/20">
            <Landmark className="w-5 h-5 text-slate-900" />
          </div>
          <span className="font-display font-bold text-lg text-slate-900">
            United<span className="text-yellow-500">Horizon</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
            {user?.firstName?.[0]}
            {user?.lastName?.[0]}
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72 bg-slate-900 border-slate-800 text-white">
              <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-lg shadow-yellow-500/20">
                  <Landmark className="w-5 h-5 text-slate-900" />
                </div>
                <span className="font-display font-bold text-lg">
                  United<span className="text-yellow-500">Horizon</span>
                </span>
              </div>
              <div className="py-6 px-4 space-y-2">
                {navItems
                  .filter((item) => item.show)
                  .map((item) => {
                    const isActive = location === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                          isActive
                            ? "bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/5"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "w-5 h-5",
                            isActive
                              ? "text-yellow-400"
                              : "group-hover:text-yellow-400 transition-colors"
                          )}
                        />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
              </div>
              <div className="p-6 border-t border-slate-800 space-y-4">
                <div>
                  <p className="text-sm font-semibold">{user?.firstName} {user?.lastName}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    {isAdmin && <ShieldCheck className="w-3 h-3 text-yellow-500" />}
                    <span>{user?.email}</span>
                  </div>
                </div>
                <Button
                  variant="destructive"
                  className="w-full justify-start gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border-none"
                  onClick={() => {
                    logoutMutation.mutate();
                    setOpen(false);
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex flex-col min-h-screen md:ml-64">
        <MobileNav />
        <main className="flex-1 px-4 py-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
