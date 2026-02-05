"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus } from "lucide-react";
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
import { useCreateTransaction } from "@/hooks/use-transactions";
import { useAdminUsers } from "@/hooks/use-admin-users";

const formSchema = z.object({
  // Either userId or accountNumber must be provided
  userId: z.string().optional(),
  accountNumber: z.string().min(10, "Account number must be at least 10 digits").max(20, "Account number is too long").optional(),
  amount: z.string().min(1, "Amount is required").refine(
    (val) => {
      const num = Number(val);
      return !isNaN(num) && num >= 0.01;
    },
    { message: "Amount must be greater than 0" }
  ),
  type: z.enum(["CREDIT", "DEBIT"]),
  description: z.string().min(3, "Description is required"),
}).refine(
  (data) => data.userId || data.accountNumber,
  {
    message: "Either user or account number must be provided",
    path: ["userId"],
  }
);

export function CreateTransactionDialog() {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useCreateTransaction();
  const { data: users } = useAdminUsers();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: undefined,
      accountNumber: undefined,
      type: "CREDIT",
      description: "",
      amount: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Prepare the payload based on whether userId or accountNumber was provided
    let payload: any = {
      amount: values.amount,
      type: values.type,
      description: values.description,
    };

    // If account number was provided, send it in the payload
    if (values.accountNumber) {
      payload.accountNumber = values.accountNumber;
    } else if (values.userId) {
      // Convert userId string to number
      payload.userId = Number(values.userId);
    }

    mutate(payload, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      },
    });
  }

  // Filter only approved users for transactions
  const approvedUsers = users?.filter((u) => u.status === "APPROVED") || [];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          New Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[95vw] rounded-2xl">
        <DialogHeader>
          <DialogTitle>Process Transaction</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            {/* User Selection */}
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select User (Optional)</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value === "" ? undefined : value);
                      // Clear account number when user is selected
                      form.setValue('accountNumber', undefined);
                    }}
                    value={field.value ?? ""}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a customer by name" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-64">
                      {approvedUsers.map((user) => (
                        <SelectItem key={user.id} value={user.id.toString()}>
                          {user.firstName} {user.lastName} ({user.accountNumber})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* OR separator */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex-shrink-0 px-4 text-xs font-medium text-gray-500 uppercase">
                Or
              </div>
            </div>

            {/* Account Number Input */}
            <FormField
              control={form.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient Account Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter 10-20 digit account number"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        // Clear user selection when account number is entered
                        form.setValue('userId', undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                        value={field.value || ""}
                        onChange={field.onChange}
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
                    <Input placeholder="e.g. Transfer, Payment, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2" disabled={isPending}>
              {isPending ? "Processing..." : "Process Transaction"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}