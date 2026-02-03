import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { insertUserSchema, loginSchema, otpSchema } from "@shared/schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Landmark, ArrowRight, Loader2, CheckCircle } from "lucide-react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const { loginMutation, registerMutation, verifyOtpMutation, user } = useAuth();
  const [, setLocation] = useLocation();
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);

  if (user) {
    setLocation("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Panel - Branding */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 p-2.5 rounded-xl shadow-lg shadow-yellow-500/20">
              <Landmark className="w-8 h-8 text-slate-900" />
            </div>
            <span className="font-display font-bold text-3xl tracking-tight">
              United<span className="text-yellow-500">Horizon</span>
            </span>
          </div>
          
          <h1 className="font-display text-6xl font-medium leading-tight mb-6">
            Banking for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Modern Era
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-md leading-relaxed">
            Experience secure, seamless, and sophisticated financial management designed for your lifestyle.
          </p>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs text-white">
                  User
                </div>
              ))}
            </div>
            <p>Join 10,000+ satisfied customers today.</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Forms */}
      <div className="flex items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-md space-y-6">
          {registeredEmail ? (
             <OtpForm email={registeredEmail} onVerify={() => setLocation("/dashboard")} />
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-slate-200/50">
                <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Login</TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              
              <TabsContent value="register">
                <RegisterForm onSuccess={(email) => setRegisteredEmail(email)} />
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const { loginMutation } = useAuth();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <Card className="border-none shadow-xl shadow-slate-200/60">
      <CardHeader>
        <CardTitle className="font-display text-2xl">Welcome Back</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((d) => loginMutation.mutate(d))} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-2" disabled={loginMutation.isPending}>
              {loginMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function RegisterForm({ onSuccess }: { onSuccess: (email: string) => void }) {
  const { registerMutation } = useAuth();
  
  // Custom schema to match form steps if we wanted multi-step, but keeping simple for now
  const form = useForm<z.infer<typeof insertUserSchema>>({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "",
      dob: "", address: "", country: "", password: ""
    },
  });

  return (
    <Card className="border-none shadow-xl shadow-slate-200/60 max-h-[80vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="font-display text-2xl">Create Account</CardTitle>
        <CardDescription>Apply for a new digital banking account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((d) => registerMutation.mutate(d, {
            onSuccess: (res) => onSuccess(res.email)
          }))} className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input type="email" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl><Input type="tel" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
               <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl><Input type="date" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl><Input type="password" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-4" disabled={registerMutation.isPending}>
              {registerMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Account
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function OtpForm({ email, onVerify }: { email: string; onVerify: () => void }) {
  const { verifyOtpMutation } = useAuth();
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { email, code: "" },
  });

  return (
    <Card className="border-none shadow-xl shadow-slate-200/60 animate-in fade-in slide-in-from-right-4">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
        <CardTitle className="font-display text-2xl">Verify Email</CardTitle>
        <CardDescription>
          We sent a 6-digit code to <span className="font-medium text-slate-900">{email}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((d) => verifyOtpMutation.mutate(d, { onSuccess: onVerify }))} className="space-y-6">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="text-center text-2xl tracking-[0.5em] font-mono h-14" 
                      maxLength={6} 
                      placeholder="000000"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={verifyOtpMutation.isPending}>
              {verifyOtpMutation.isPending ? "Verifying..." : "Verify & Continue"} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
