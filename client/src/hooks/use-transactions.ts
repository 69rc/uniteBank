import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { Transaction, InsertTransaction } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

// --- USER HOOKS ---

export function useTransactions() {
  return useQuery({
    queryKey: [api.user.listTransactions.path],
    queryFn: async () => {
      const res = await fetch(api.user.listTransactions.path);
      if (!res.ok) throw new Error("Failed to fetch transactions");
      return await res.json() as Transaction[];
    },
  });
}

// --- ADMIN HOOKS ---

export function useAllTransactions() {
  return useQuery({
    queryKey: [api.admin.listAllTransactions.path],
    queryFn: async () => {
      const res = await fetch(api.admin.listAllTransactions.path);
      if (!res.ok) throw new Error("Failed to fetch all transactions");
      return await res.json() as Transaction[];
    },
  });
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Define the type for the transaction creation input
  type CreateTransactionInput = {
    userId?: string;
    accountNumber?: string;
    type: "CREDIT" | "DEBIT";
    amount: string;
    description: string;
  };

  return useMutation({
    mutationFn: async (data: CreateTransactionInput) => {
      const res = await fetch(api.admin.createTransaction.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody.message || "Failed to create transaction");
      }
      return await res.json() as Transaction;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.admin.listAllTransactions.path] });
      queryClient.invalidateQueries({ queryKey: [api.admin.listUsers.path] }); // To update user balances
      toast({ title: "Success", description: "Transaction processed successfully" });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}
