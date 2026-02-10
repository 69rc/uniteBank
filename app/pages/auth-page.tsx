"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { insertUserSchema, loginSchema } from "@shared/schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Landmark, ArrowRight, Loader2, CheckCircle, RefreshCw } from "lucide-react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const { loginMutation, registerMutation, user } = useAuth();
  const [, setLocation] = useLocation();
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setLocation("/dashboard");
    }
  }, [user, setLocation]);

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="grid lg:grid-cols-2 min-h-screen">
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
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs text-white"
                  >
                    User
                  </div>
                ))}
              </div>
              <p>Join 10,000+ satisfied customers today.</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Auth Forms */}
        <div className="flex items-center justify-center p-4 sm:p-8 bg-white dark:bg-slate-950">
          <div className="w-full max-w-md space-y-6">
            <div className="flex items-center gap-3 lg:hidden text-slate-900">
              <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 p-2 rounded-xl">
                <Landmark className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <p className="font-display font-bold text-2xl leading-tight">UnitedHorizon</p>
                <p className="text-sm text-slate-500">Secure banking anywhere</p>
              </div>
            </div>
            {registeredEmail ? (
              <PostRegistrationNotice
                email={registeredEmail}
                onBack={() => setRegisteredEmail(null)}
                onLogin={() => {
                  setRegisteredEmail(null);
                  setActiveTab("login");
                }}
              />
            ) : (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-slate-200/50 dark:bg-slate-800/50">
                  <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-900">
                    Login
                  </TabsTrigger>
                  <TabsTrigger value="register" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-900">
                    Register
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <LoginForm />
                </TabsContent>

                <TabsContent value="register">
                  <RegisterForm
                    onSuccess={(email) => {
                      setRegisteredEmail(email);
                    }}
                  />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const { loginMutation } = useAuth();
  const [captcha, setCaptcha] = useState<string>("");
  const [loadingCaptcha, setLoadingCaptcha] = useState(false);

  const fetchCaptcha = async () => {
    setLoadingCaptcha(true);
    try {
      const res = await fetch("/api/auth/captcha");
      const data = await res.json();
      setCaptcha(data.code);
    } catch (error) {
      console.error("Failed to fetch captcha", error);
    } finally {
      setLoadingCaptcha(false);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", loginCode: "" },
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
            <FormField
              control={form.control}
              name="loginCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <FormControl>
                        <Input placeholder="Enter code" {...field} maxLength={6} />
                      </FormControl>
                    </div>
                    <div className="flex items-center gap-2 px-3 border rounded-md bg-slate-50 select-none">
                      {loadingCaptcha ? (
                        <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                      ) : (
                        <div className="flex gap-1.5 px-1">
                          {captcha.split("").map((char, i) => {
                            // Seed random based on index and captcha code
                            const rotation = ((i * 13 + char.charCodeAt(0)) % 40) - 20; // -20 to 20 deg
                            const weight = [400, 600, 700, 800][(i + char.charCodeAt(0)) % 4];
                            const colors = ["text-slate-600", "text-blue-600", "text-indigo-600", "text-slate-900"];
                            const color = colors[(i + char.charCodeAt(0)) % colors.length];

                            return (
                              <span
                                key={i}
                                className={`font-mono inline-block ${color}`}
                                style={{
                                  transform: `rotate(${rotation}deg)`,
                                  fontWeight: weight,
                                  fontSize: '1.1rem'
                                }}
                              >
                                {char}
                              </span>
                            );
                          })}
                        </div>
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-slate-600"
                        onClick={fetchCaptcha}
                        disabled={loadingCaptcha}
                      >
                        <RefreshCw className={`h-3 w-3 ${loadingCaptcha ? "animate-spin" : ""}`} />
                      </Button>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 italic">
                    Please enter the 6-digit code shown above to verify you're human.
                  </p>
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

  const form = useForm<z.infer<typeof insertUserSchema>>({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      otherName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      nationality: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      idType: "",
      idNumber: "",
      idExpiryDate: "",
      accountType: "SAVINGS",
      currency: "USD",
      accountPurpose: "",
      password: "",
      transactionPin: "",
    },
  });

  return (
    <Card className="border-none shadow-xl shadow-slate-200/60 max-h-[80vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="font-display text-2xl">Create Account</CardTitle>
        <CardDescription>Complete your banking application form.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((d) =>
              registerMutation.mutate(d, {
                onSuccess: (res) => onSuccess(res.email),
              })
            )}
            className="space-y-6"
          >
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">
                Personal Information
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="otherName"
                render={({ field }) => {
                  // Handle null values by converting to empty string
                  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    field.onChange(e.target.value || null);
                  };

                  return (
                    <FormItem>
                      <FormLabel>Other Name (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ''}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nationality *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., Nigerian, American" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Contact Information</h3>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} placeholder="john@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} placeholder="+1234567890" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="123 Main Street" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State/Province *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZIP/Postal Code *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* ID Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Identification</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="idType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ID Type *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select ID Type</option>
                          <option value="National ID">National ID</option>
                          <option value="Passport">Passport</option>
                          <option value="Driver License">Driver License</option>
                          <option value="Voter ID">Voter ID</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="idNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ID Number *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="idExpiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID Expiry Date *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Account Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Account Information</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="accountType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Type *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="SAVINGS">Savings Account</option>
                          <option value="CURRENT">Current Account</option>
                          <option value="CHECKING">Checking Account</option>
                          <option value="BUSINESS">Business Account</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="USD">USD - US Dollar</option>
                          <option value="NGN">NGN - Nigerian Naira</option>
                          <option value="EUR">EUR - Euro</option>
                          <option value="GBP">GBP - British Pound</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="accountPurpose"
                render={({ field }) => {
                  // Handle null values by converting to empty string
                  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    field.onChange(e.target.value || null);
                  };

                  return (
                    <FormItem>
                      <FormLabel>Account Purpose (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ''}
                          placeholder="e.g., Personal savings, Business operations"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>

            {/* Security */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Security</h3>

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password *</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="Minimum 8 characters" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="transactionPin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transaction PIN *</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="4-6 digits" maxLength={6} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full mt-6" disabled={registerMutation.isPending}>
              {registerMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Account
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function PostRegistrationNotice({ email, onBack, onLogin }: { email: string; onBack: () => void; onLogin: () => void }) {
  return (
    <Card className="border-none shadow-xl shadow-slate-200/60 animate-in fade-in slide-in-from-right-4">
      <CardHeader className="text-center space-y-4">
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-6 h-6 text-yellow-600" />
        </div>
        <CardTitle className="font-display text-2xl">Application Received</CardTitle>
        <CardDescription>
          Thanks for registering, <span className="font-medium text-slate-900">{email}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-600 text-center leading-relaxed">
          Our compliance team is reviewing your submission. You will receive an email once your account has been
          approved. You can close this window or return to the login page.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button variant="outline" onClick={onBack}>
            Edit Application
          </Button>
          <Button onClick={onLogin}>Back to Login</Button>
        </div>
      </CardContent>
    </Card>
  );
}
