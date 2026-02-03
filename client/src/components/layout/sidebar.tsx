import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { 
  LayoutDashboard, 
  Users, 
  ArrowRightLeft, 
  LogOut, 
  ShieldCheck,
  Landmark
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();

  const isAdmin = user?.role === "ADMIN";

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      show: true
    },
    {
      label: "User Management",
      href: "/admin/users",
      icon: Users,
      show: isAdmin
    },
    {
      label: isAdmin ? "All Transactions" : "My Transactions",
      href: isAdmin ? "/admin/transactions" : "/dashboard", // User sees transactions on dashboard for simplicity in this MVP
      icon: ArrowRightLeft,
      show: true
    }
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col fixed left-0 top-0 border-r border-slate-800 shadow-2xl z-50">
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
        {navItems.filter(item => item.show).map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href} className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              isActive 
                ? "bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/5" 
                : "text-slate-400 hover:text-white hover:bg-white/5"
            )}>
              <item.icon className={cn("w-5 h-5", isActive ? "text-yellow-400" : "group-hover:text-yellow-400 transition-colors")} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-6 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold border-2 border-slate-700 shadow-inner">
            {user?.firstName?.[0]}{user?.lastName?.[0]}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate">{user?.firstName} {user?.lastName}</p>
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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
          {children}
        </div>
      </main>
    </div>
  );
}
