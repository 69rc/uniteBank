import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { User } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useAdminUsers() {
  return useQuery({
    queryKey: [api.admin.listUsers.path],
    queryFn: async () => {
      const res = await fetch(api.admin.listUsers.path);
      if (!res.ok) throw new Error("Failed to fetch users");
      return await res.json() as User[];
    },
  });
}

export function useApproveUser() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (userId: string) => {
      const url = buildUrl(api.admin.approveUser.path, { id: userId });
      const res = await fetch(url, { method: "POST" });
      if (!res.ok) throw new Error("Failed to approve user");
      return await res.json() as User;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [api.admin.listUsers.path] });
      toast({ title: "User Approved", description: `${data.firstName} can now access their account.` });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}

export function useRejectUser() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (userId: string) => {
      const url = buildUrl(api.admin.rejectUser.path, { id: userId });
      const res = await fetch(url, { method: "POST" });
      if (!res.ok) throw new Error("Failed to reject user");
      return await res.json() as User;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [api.admin.listUsers.path] });
      toast({ title: "User Rejected", description: `${data.firstName} has been denied access.` });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });
}
