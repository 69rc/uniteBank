"use client";

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Landmark, ArrowRight, ShieldCheck, Globe, Zap, Menu } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-lg shadow-yellow-500/20">
              <Landmark className="w-5 h-5 text-slate-900" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              United<span className="text-yellow-500">Horizon</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-yellow-400 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="hover:text-yellow-400 transition-colors">
              Testimonials
            </a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">
              About Us
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <Link href="/auth">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 font-semibold shadow-lg shadow-yellow-500/20">
                Open Account
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900 border-slate-800 text-white">
                <div className="flex flex-col gap-6 mt-10">
                  <a href="#features" className="text-lg font-medium hover:text-yellow-400 transition-colors">
                    Features
                  </a>
                  <a href="#testimonials" className="text-lg font-medium hover:text-yellow-400 transition-colors">
                    Testimonials
                  </a>
                  <a href="#about" className="text-lg font-medium hover:text-yellow-400 transition-colors">
                    About Us
                  </a>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-16 pb-32 lg:pt-32">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-50" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-yellow-500 text-xs font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Banking for the future
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700">
            Experience the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
              Future of Banking
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-900 delay-100">
            Manage your wealth with unparalleled security and sophistication.
            UnitedHorizon brings the power of global banking to your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <Link href="/auth">
              <Button size="lg" className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 h-12 px-8 text-lg font-semibold shadow-xl shadow-yellow-500/20 w-full sm:w-auto">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "50K+" },
              { label: "Countries", value: "120+" },
              { label: "Transactions", value: "$2B+" },
              { label: "Support", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-slate-600 text-lg">
              We provide the tools and security you need to manage your finances with confidence and ease.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-yellow-500" />}
              title="Bank-Grade Security"
              description="Your assets are protected by enterprise-level encryption and multi-factor authentication systems."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-blue-500" />}
              title="Global Access"
              description="Access your funds from anywhere in the world with our borderless banking infrastructure."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-purple-500" />}
              title="Instant Transfers"
              description="Send and receive money instantly across our network with zero delay or hidden fees."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Trusted by thousands
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
            />
            <TestimonialCard
              name="Michael Chen"
              role="Freelance Developer"
              content="The security features give me peace of mind, and the mobile app is incredibly intuitive. Highly recommended!"
            />
            <TestimonialCard
              name="Elena Rodriguez"
              role="Digital Nomad"
              content="I travel constantly, and UnitedHorizon is the only bank that keeps up with my lifestyle. True borderless banking."
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-700 text-xs font-medium">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Building the future of finance, effectively and securely.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded in 2024, UnitedHorizon was born from a simple idea: banking should be transparent, accessible, and designed for the modern world. We combine cutting-edge technology with traditional banking values to provide a service that puts you first.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-1">Our Mission</h4>
                <p className="text-slate-600 text-sm">To empower individuals and businesses with financial freedom.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-1">Our Vision</h4>
                <p className="text-slate-600 text-sm">A world where financial boundaries do not exist.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-yellow-600 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                alt="Team meeting"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Ready to transform your financial life?
              </h2>
              <p className="text-slate-900/80 text-xl mb-10 font-medium">
                Join thousands of users who trust UnitedHorizon for their daily banking needs.
              </p>
              <Link href="/auth">
                <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-10 text-xl font-bold shadow-xl border-none">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-500 p-1.5 rounded-lg">
                  <Landmark className="w-4 h-4 text-slate-900" />
                </div>
                <span className="font-display font-bold text-lg text-white">UnitedHorizon</span>
              </div>
              <p className="text-sm leading-relaxed">
                Empowering your financial journey with modern solutions for a digital world.
              </p>
            </div>

            {[
              { title: "Product", links: ["Features", "Pricing", "API", "Docs"] },
              { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2 text-sm">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-yellow-500 transition-colors">
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
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a
                href="https://wa.me/13107409287"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
                aria-label="Chat with us on WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-none shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-8">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ name, role, content }: { name: string; role: string; content: string }) {
  return (
    <Card className="bg-slate-800 border-slate-700 text-slate-300">
      <CardContent className="p-8 space-y-6">
        <div className="flex justify-center md:justify-start">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p className="text-lg italic">"{content}"</p>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
