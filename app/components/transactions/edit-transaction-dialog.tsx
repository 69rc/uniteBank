import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Edit2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUpdateTransaction } from "@/hooks/use-transactions";
import { Transaction } from "@shared/schema";

const formSchema = z.object({
    amount: z.string().min(1, "Amount is required").refine(
        (val) => {
            const num = Number(val);
            return !isNaN(num) && num >= 0.01;
        },
        { message: "Amount must be greater than 0" }
    ),
    type: z.enum(["CREDIT", "DEBIT"]),
    description: z.string().min(3, "Description is required"),
    createdAt: z.string().optional(),
});

export function EditTransactionDialog({ transaction }: { transaction: Transaction }) {
    const [open, setOpen] = useState(false);
    const { mutate, isPending } = useUpdateTransaction();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: transaction.type as "CREDIT" | "DEBIT",
            description: transaction.description,
            amount: transaction.amount.toString(),
            createdAt: transaction.createdAt ? new Date(transaction.createdAt).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16),
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        mutate({
            id: transaction.id,
            data: values as any,
        }, {
            onSuccess: () => {
                setOpen(false);
            },
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit2 className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-[95vw] rounded-2xl">
                <DialogHeader>
                    <DialogTitle>Edit Transaction</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="CREDIT">Credit (Deposit)</SelectItem>
                                                <SelectItem value="DEBIT">Debit (Withdrawal)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount ($)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                inputMode="decimal"
                                                placeholder="0.00"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Correction, Adjustment, etc." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="createdAt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Transaction Date</FormLabel>
                                    <FormControl>
                                        <Input type="datetime-local" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-2" disabled={isPending}>
                            {isPending ? "Updating..." : "Update Transaction"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
