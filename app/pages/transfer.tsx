"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Layout } from "@/components/layout/sidebar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const transferSchema = z.object({
    recipientAccountNumber: z.string().min(10, "Account number must be at least 10 digits"),
    amount: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
        message: "Amount must be greater than 0",
    }),
    description: z.string().optional(),
});

type TransferFormValues = z.infer<typeof transferSchema>;

export default function TransferPage() {
    const { toast } = useToast();
    const [recipientName, setRecipientName] = useState<string | null>(null);
    const [isCheckingName, setIsCheckingName] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<TransferFormValues>({
        resolver: zodResolver(transferSchema),
        defaultValues: {
            recipientAccountNumber: "",
            amount: "",
            description: "",
        },
    });

    const accountNumber = form.watch("recipientAccountNumber");

    // Debounced Name Enquiry
    useEffect(() => {
        const checkName = async () => {
            if (accountNumber.length >= 10) {
                setIsCheckingName(true);
                setRecipientName(null);
                try {
                    const res = await fetch(`/api/transfers/name-enquiry?accountNumber=${accountNumber}`);
                    if (res.ok) {
                        const data = await res.json();
                        setRecipientName(`${data.firstName} ${data.lastName}`);
                    } else {
                        setRecipientName(null);
                    }
                } catch (error) {
                    setRecipientName(null);
                } finally {
                    setIsCheckingName(false);
                }
            } else {
                setRecipientName(null);
            }
        };

        const timeoutId = setTimeout(checkName, 500);
        return () => clearTimeout(timeoutId);
    }, [accountNumber]);

    const onSubmit = async (data: TransferFormValues) => {
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/transfers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    recipientAccountNumber: data.recipientAccountNumber,
                    amount: parseFloat(data.amount),
                    description: data.description,
                }),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Transfer failed");
            }

            toast({
                title: "Transfer Request Sent",
                description: "Your transfer has been submitted for approval.",
            });
            form.reset();
            setRecipientName(null);
        } catch (error: any) {
            toast({
                title: "Transfer Failed",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <div className="container mx-auto py-10 max-w-lg">
                <Card>
                    <CardHeader>
                        <CardTitle>Transfer Money</CardTitle>
                        <CardDescription>Send funds to another United Horizon account.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="recipientAccountNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Recipient Account Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter account number" {...field} />
                                            </FormControl>
                                            <div className="h-6 text-sm">
                                                {isCheckingName ? (
                                                    <span className="flex items-center text-muted-foreground">
                                                        <Loader2 className="mr-2 h-3 w-3 animate-spin" /> Verifying...
                                                    </span>
                                                ) : recipientName ? (
                                                    <span className="flex items-center text-green-600 font-medium">
                                                        <CheckCircle className="mr-2 h-3 w-3" /> {recipientName}
                                                    </span>
                                                ) : accountNumber.length >= 10 && !isCheckingName ? (
                                                    <span className="flex items-center text-red-500">
                                                        <AlertCircle className="mr-2 h-3 w-3" /> Account not found
                                                    </span>
                                                ) : null}
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="amount"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Amount (USD)</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="0.00" step="0.01" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description (Optional)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="What's this for?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full" disabled={isSubmitting || !recipientName}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                                        </>
                                    ) : (
                                        "Transfer Funds"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
