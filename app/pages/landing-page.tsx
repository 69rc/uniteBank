"use client";

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  Landmark,
  ArrowRight,
  ShieldCheck,
  Globe,
  Zap,
  Menu,
  CreditCard,
  Smartphone,
  Sparkles,
  Wifi,
  Clock,
  Apple,
  Play,
  MessageCircle,
  Send,
  Users,
  Briefcase,
  TrendingUp,
  Layers,
  Headphones,
  HelpCircle,
  ArrowUpRight,
  CheckCircle,
  Star,
  ChevronRight,
  Lock,
  Award,
  BarChart3,
  Coins,
  DollarSign,
  Wallet,
  PiggyBank,
  LineChart,
  Shield,
  FileCheck,
  Building2,
  Rocket,
  Target,
  Lightbulb,
  Calendar,
  Phone,
  Mail,
} from "lucide-react";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const whatsappNumber = "13107409287"; // +1 (310) 740-9287

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans transition-colors overflow-x-hidden">
      {/* Navigation */}
      <nav className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrollY > 50
          ? "bg-slate-900/95 backdrop-blur-xl border-white/10 shadow-lg shadow-slate-900/10"
          : "bg-slate-900/60 backdrop-blur-sm border-white/5"
      )}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600 p-2 rounded-xl shadow-lg shadow-yellow-500/30 group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110">
                <Landmark className="w-5 h-5 text-slate-900" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                United<span className="text-yellow-400">Horizon</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {["Features", "Testimonials", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/auth">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 hover:from-yellow-400 hover:to-yellow-500 font-semibold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300">
                Open Account
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900 border-slate-800 text-white">
                <div className="flex flex-col gap-6 mt-10">
                  {["Features", "Testimonials", "About"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-lg font-medium hover:text-yellow-400 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                  <hr className="border-slate-800" />
                  <Link href="/auth">
                    <Button variant="ghost" className="w-full justify-start text-lg text-slate-300 hover:text-white hover:bg-white/10">
                      Login
                    </Button>
                  </Link>
                  <Link href="/auth">
                    <Button className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400 font-semibold">
                      Open Account
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 pb-32 lg:pt-32">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-yellow-500/30 via-yellow-400/20 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse delay-1000" />

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full animate-float delay-500" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-yellow-400 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 hover:border-yellow-500/50 transition-all group">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                </span>
                <span className="group-hover:text-yellow-300 transition-colors">Banking for the future</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700">
                Experience the
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-gradient">
                  Future of Banking
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-900 delay-100">
                Manage your wealth with <span className="text-yellow-400 font-semibold">unparalleled security</span>, personalized insights, and live specialists available in seconds. UnitedHorizon brings the power of premium banking to every device you own.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <Link href="/auth">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 hover:from-yellow-400 hover:to-yellow-500 h-14 px-8 text-lg font-bold shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 w-full sm:w-auto group transition-all duration-300 hover:scale-105">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-600 bg-slate-800/30 backdrop-blur-sm text-slate-200 hover:bg-slate-700/50 hover:text-white hover:border-slate-500 w-full sm:w-auto transition-all duration-300">
                    Explore Features
                  </Button>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 text-left">
                {[
                  { label: "Real-time FX rates", value: "+180" },
                  { label: "Global banks connected", value: "72" },
                  { label: "Smart automation rules", value: "1200+" },
                ].map((item, i) => (
                  <div key={item.label} className="text-white/80 group cursor-default">
                    <p className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-yellow-400 transition-colors">{item.value}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-400 mt-1">{item.label}</p>
                  </div>
                ))}</div>
            </div>

            {/* Hero card preview - Enhanced */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 blur-3xl animate-pulse" />
              <div className="relative space-y-6">
                {/* Premium Card */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-500 hover:scale-[1.02] group">
                  <div className="flex items-center justify-between mb-10 text-white">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-300 group-hover:text-yellow-400 transition-colors">UnitedHorizon</p>
                      <p className="text-2xl font-semibold mt-2">Premier Infinite</p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full animate-pulse" />
                      <CreditCard className="w-10 h-10 text-yellow-400 relative" />
                    </div>
                  </div>
                  <p className="text-3xl font-mono tracking-widest text-white">
                    5249  ••••  ••••  1024
                  </p>
                  <div className="flex items-center justify-between mt-10 text-white">
                    <div>
                      <p className="text-xs text-slate-400">CARD HOLDER</p>
                      <p className="text-lg font-semibold">Alex Morgan</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">EXPIRY</p>
                      <p className="text-lg font-semibold">08/29</p>
                    </div>
                  </div>
                </div>

                {/* AI Insights Card */}
                <Card className="bg-white/95 backdrop-blur-xl border-none shadow-2xl hover:shadow-yellow-200/20 transition-all duration-500 hover:scale-[1.02]">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400/30 blur-lg rounded-full animate-pulse" />
                      <Sparkles className="w-10 h-10 text-yellow-500 relative" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">New</span>
                      </div>
                      <p className="text-lg font-bold text-slate-900">AI-powered spending insights</p>
                      <p className="text-sm text-slate-600">Detect patterns, forecast cash flow, and optimize budgets automatically.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-purple-500/5" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "50K+", icon: Users },
              { label: "Countries", value: "120+", icon: Globe },
              { label: "Transactions", value: "$2B+", icon: TrendingUp },
              { label: "Support", value: "24/7", icon: Headphones },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{stat.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced */}
      <section id="features" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">grow</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We provide the tools and security you need to manage your finances with confidence and ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Bank-Grade Security",
                description: "Your assets are protected by enterprise-level encryption and multi-factor authentication systems.",
                color: "yellow",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Access",
                description: "Access your funds from anywhere in the world with our borderless banking infrastructure.",
                color: "blue",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Transfers",
                description: "Send and receive money instantly across our network with zero delay or hidden fees.",
                color: "purple",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Smart Mobile Banking",
                description: "Control limits, freeze cards, and access budgeting tools all from our AI-assisted mobile experience.",
                color: "green",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "24/7 Human Specialists",
                description: "Reach live experts in seconds through chat, voice, or video no matter where you are in the world.",
                color: "pink",
              },
              {
                icon: <Send className="w-8 h-8" />,
                title: "Borderless Payments",
                description: "Automate multi-currency payouts with transparent FX rates and compliance-ready documentation.",
                color: "slate",
              },
            ].map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-sm font-semibold">
                <CreditCard className="w-4 h-4" />
                Premium Cards
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
                Crafted for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">bold</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Unlock multi-currency wallets, airport lounge access, lifestyle concierge, and zero-fee international ATM withdrawals. Your UnitedHorizon card adapts to every country you visit.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Wifi className="w-5 h-5" />, text: "Tap-to-pay worldwide with offline protection" },
                  { icon: <Lock className="w-5 h-5" />, text: "Dynamic CVV that refreshes every hour" },
                  { icon: <Smartphone className="w-5 h-5" />, text: "Real-time card controls inside the app" },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-2xl hover:scale-105 transition-transform duration-500">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Black Label</CardTitle>
                  <p className="text-sm text-slate-400">Tailored for private clients</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <p className="text-sm text-slate-200">Exclusive rewards program</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <p className="text-sm text-slate-200">1-hour concierge response</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-yellow-400" />
                    <p className="text-sm text-slate-200">Global lounge access</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-slate-200 dark:border-slate-700 shadow-lg hover:scale-105 transition-transform duration-500">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Everyday Elevate</CardTitle>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Up to 4% back on global spend</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-4xl font-display text-slate-900 dark:text-white">$0</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Annual fee forever</p>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      Link to Apple Pay, Google Pay, and wearable wallets in seconds.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Built for every moment of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">financial journey</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Whether you're scaling a company, managing generational wealth, or freelancing across continents, UnitedHorizon keeps you moving forward.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Founders",
                description: "Spin up subsidiary accounts, payroll, and FX hedging in minutes while a dedicated advisor handles compliance.",
                icon: <Briefcase className="w-10 h-10" />,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Remote Creators",
                description: "Receive payments in 40+ currencies, route income to smart savings jars, and automate quarterly tax planning.",
                icon: <Rocket className="w-10 h-10" />,
                color: "from-yellow-500 to-yellow-600",
              },
              {
                title: "Modern Families",
                description: "Issue shared cards with programmable allowances, monitor spending in real time, and invest excess cash effortlessly.",
                icon: <Users className="w-10 h-10" />,
                color: "from-purple-500 to-purple-600",
              },
            ].map((useCase) => (
              <Card key={useCase.title} className="shadow-xl border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-500 group bg-white dark:bg-slate-900">
                <CardContent className="p-8 space-y-4">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform",
                    useCase.color
                  )}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{useCase.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white dark:bg-slate-950" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-400 text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4" />
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Transparent pricing designed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">scale with you</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Pay only for the sophistication you need—upgrade seamlessly when your portfolio or business evolves.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Essential",
                price: "$0",
                period: "forever",
                description: "Perfect for everyday banking and independent professionals.",
                items: ["Global accounts in 5 currencies", "Instant transfers up to $25K", "Priority chat support", "Mobile & web access"],
                cta: "Get Started",
                highlight: false,
                icon: <Wallet className="w-6 h-6" />,
              },
              {
                name: "Velocity",
                price: "$79",
                period: "per month",
                description: "For scaling startups needing deeper controls and analytics.",
                items: ["Everything in Essential", "Treasury automation rules", "Multi-approval workflows", "Dedicated success partner", "Advanced analytics"],
                cta: "Start Free Trial",
                highlight: true,
                icon: <Rocket className="w-6 h-6" />,
              },
              {
                name: "Private Office",
                price: "Custom",
                period: "tailored pricing",
                description: "Fully tailored program with on-site experts and family office tooling.",
                items: ["Everything in Velocity", "24/7 concierge team", "Lifestyle & travel desk", "Integrated wealth planning", "White-glove onboarding"],
                cta: "Book Consultation",
                highlight: false,
                icon: <Building2 className="w-6 h-6" />,
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "border shadow-xl flex flex-col hover:-translate-y-2 transition-all duration-500 relative overflow-hidden",
                  plan.highlight
                    ? "border-yellow-400 dark:border-yellow-600 shadow-yellow-200 dark:shadow-yellow-900/30 scale-105"
                    : "border-slate-200 dark:border-slate-800"
                )}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 text-xs font-bold px-4 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      plan.highlight
                        ? "bg-gradient-to-br from-yellow-500 to-yellow-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    )}>
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl text-slate-900 dark:text-white">{plan.name}</CardTitle>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <p className="text-5xl font-display font-bold text-slate-900 dark:text-white">{plan.price}</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400 mt-2">{plan.period}</p>
                  </div>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400 flex-1 mb-6">
                    {plan.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={cn(
                      "w-full h-12 font-semibold transition-all duration-300",
                      plan.highlight
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 hover:from-yellow-400 hover:to-yellow-500 shadow-lg shadow-yellow-500/30"
                        : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Security & Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Your security is our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">top priority</span>
            </h2>
            <p className="text-slate-300 text-lg">
              Bank-grade security infrastructure protecting your assets with military-grade encryption and compliance certifications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Lock className="w-8 h-8" />, title: "256-bit Encryption", description: "Military-grade security for all transactions" },
              { icon: <Shield className="w-8 h-8" />, title: "FDIC Insured", description: "Up to $250,000 per account" },
              { icon: <FileCheck className="w-8 h-8" />, title: "SOC 2 Certified", description: "Independently audited security controls" },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "PCI DSS Level 1", description: "Highest level of payment security" },
            ].map((item, i) => (
              <Card key={i} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 text-sm font-semibold mb-6">
              <Layers className="w-4 h-4" />
              Integrations
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Connected to the platforms your business <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">already loves</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Sync treasury data with accounting suites, CRMs, compliance monitoring, and real-time communication tools in just a few clicks.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {["Notion", "Stripe", "QuickBooks", "Salesforce", "Slack", "Plaid", "Xero", "HubSpot"].map((partner) => (
              <div
                key={partner}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 py-8 px-6 text-center text-lg font-semibold tracking-wide hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{partner}</span>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            {[
              { label: "API uptime", value: "99.99%", icon: <BarChart3 className="w-5 h-5" /> },
              { label: "Average rollout", value: "12 days", icon: <Calendar className="w-5 h-5" /> },
              { label: "Certified partners", value: "120+", icon: <Award className="w-5 h-5" /> },
            ].map((stat) => (
              <Card key={stat.label} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3 text-purple-600 dark:text-purple-400">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-display font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest mt-2 text-slate-600 dark:text-slate-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950" id="faq">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-6">
                <HelpCircle className="w-4 h-4" />
                Help Center
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Answers backed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">actual humans</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                We combine AI-guided knowledge with always-on specialists so you never feel lost.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Headphones className="w-6 h-6 text-blue-500" />
                  <p className="text-sm text-slate-600 dark:text-slate-400">Live chat and WhatsApp support with 45-second avg response</p>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-purple-500" />
                  <p className="text-sm text-slate-600 dark:text-slate-400">Knowledge base curated by compliance, product, and concierge teams</p>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <p className="text-sm text-slate-600 dark:text-slate-400">Quarterly webinars featuring industry experts</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  question: "How secure are cross-border transfers?",
                  answer: "Every transfer is protected by adaptive risk scoring, biometric approvals, and partner bank insurance across 120+ countries.",
                },
                {
                  question: "Can I connect multiple businesses to one login?",
                  answer: "Yes, our workspace model lets you toggle between entities while maintaining approval controls and auditor views.",
                },
                {
                  question: "Do you integrate with legacy ERPs?",
                  answer: "We provide REST and GraphQL endpoints plus managed connectors for SAP, Oracle NetSuite, and custom on-prem systems.",
                },
                {
                  question: "Is there a dedicated account manager?",
                  answer: "Velocity and Private Office tiers include a single point of contact plus region-specific specialists.",
                },
                {
                  question: "What currencies do you support?",
                  answer: "We support 40+ major currencies with real-time FX rates and transparent conversion fees. Multi-currency wallets are available on all plans.",
                },
              ].map((item) => (
                <details key={item.question} className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                    <span className="ml-4 text-slate-400 group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-24 bg-white dark:bg-slate-950" id="journey">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-400 text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Your Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Your journey with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">UnitedHorizon</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              A guided rollout from day zero to full-scale adoption.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-yellow-500 h-full rounded-full" />
            <div className="space-y-12">
              {[
                {
                  title: "Week 1 — Discovery",
                  description: "Security audit, data migration plan, and compliance requirements captured with your executives.",
                  icon: <Lightbulb className="w-5 h-5" />,
                },
                {
                  title: "Week 2 — Configuration",
                  description: "Set up treasury policies, approval flows, and accounting automation inside a sandbox.",
                  icon: <Target className="w-5 h-5" />,
                },
                {
                  title: "Week 4 — Launch",
                  description: "Roll out to your organization with on-demand training and dual-run support.",
                  icon: <Rocket className="w-5 h-5" />,
                },
                {
                  title: "Ongoing — Optimization",
                  description: "Quarterly reviews uncover new savings opportunities and upcoming features to pilot.",
                  icon: <TrendingUp className="w-5 h-5" />,
                },
              ].map((step, index) => (
                <div key={step.title} className="relative flex items-center gap-8">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex items-center justify-center font-bold text-xl shadow-xl shadow-yellow-500/30 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">thousands</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Don't just take our word for it. Here's what our customers have to say about UnitedHorizon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Small Business Owner"
              content="UnitedHorizon transformed how I manage my business finances. The international transfer speed is unmatched."
              avatar="SJ"
            />
            <TestimonialCard
              name="Michael Chen"
              role="Freelance Developer"
              content="The security features give me peace of mind, and the mobile app is incredibly intuitive. Highly recommended!"
              avatar="MC"
            />
            <TestimonialCard
              name="Elena Rodriguez"
              role="Digital Nomad"
              content="I travel constantly, and UnitedHorizon is the only bank that keeps up with my lifestyle. True borderless banking."
              avatar="ER"
            />
          </div>
        </div>
      </section>

      {/* About Us Section - Enhanced */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-200 text-yellow-700 text-sm font-semibold">
              <Landmark className="w-4 h-4" />
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
              Building the future of finance, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">effectively and securely</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded in 2024, UnitedHorizon was born from a simple idea: banking should be transparent, accessible, and designed for the modern world. We combine cutting-edge technology with traditional banking values to provide a service that puts you first.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Our Mission</h4>
                <p className="text-slate-600 dark:text-slate-400">To empower individuals and businesses with financial freedom.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">Our Vision</h4>
                <p className="text-slate-600 dark:text-slate-400">A world where financial boundaries do not exist.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-yellow-600 rounded-3xl transform rotate-3 scale-105 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                alt="Team meeting"
                className="relative rounded-3xl shadow-2xl w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-purple-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse delay-1000" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                Ready to transform your financial life?
              </h2>
              <p className="text-slate-900/80 text-xl mb-10 font-medium">
                Join thousands of users who trust UnitedHorizon for their daily banking needs.
              </p>
              <Link href="/auth">
                <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-16 px-12 text-xl font-bold shadow-2xl border-none hover:scale-105 transition-all duration-300 group">
                  Create Free Account
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-lg shadow-yellow-500/20">
                  <Landmark className="w-5 h-5 text-slate-900" />
                </div>
                <span className="font-display font-bold text-lg text-white">UnitedHorizon</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Empowering your financial journey with modern solutions for a digital world.
              </p>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-slate-500">Download the app</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white hover:border-yellow-500 hover:bg-slate-800 transition-all group"
                  >
                    <Apple className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500">Download on the</p>
                      <p className="text-sm font-semibold text-white">App Store</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white hover:border-yellow-500 hover:bg-slate-800 transition-all group"
                  >
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500">Get it on</p>
                      <p className="text-sm font-semibold text-white">Google Play</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {[
              { title: "Product", links: ["Features", "Pricing", "API", "Docs"] },
              { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4">{col.title}</h4>
                <ul className="space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} UnitedHorizon Bank. All rights reserved.</p>
            <div className="flex gap-6">
              {["Twitter", "LinkedIn", "Instagram", "WhatsApp"].map((social) => (
                <a key={social} href="#" className="hover:text-yellow-400 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center text-white hover:from-green-400 hover:to-green-500 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </a>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  const colorMap: Record<string, string> = {
    yellow: "from-yellow-500 to-yellow-600 group-hover:shadow-yellow-200",
    blue: "from-blue-500 to-blue-600 group-hover:shadow-blue-200",
    purple: "from-purple-500 to-purple-600 group-hover:shadow-purple-200",
    green: "from-green-500 to-green-600 group-hover:shadow-green-200",
    pink: "from-pink-500 to-pink-600 group-hover:shadow-pink-200",
    slate: "from-slate-700 to-slate-900 group-hover:shadow-slate-300",
  };

  return (
    <Card className="border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-white dark:bg-slate-900 overflow-hidden">
      <CardContent className="p-8">
        <div className={cn(
          "w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
          colorMap[color]
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ name, role, content, avatar }: { name: string; role: string; content: string; avatar: string }) {
  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-yellow-500/50 text-slate-300 hover:-translate-y-2 transition-all duration-500 group">
      <CardContent className="p-8 space-y-6">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="text-lg italic leading-relaxed">"{content}"</p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
            {avatar}
          </div>
          <div>
            <h4 className="font-bold text-white">{name}</h4>
            <p className="text-sm text-slate-400">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
