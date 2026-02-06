"use client";

import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, X, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/sidebar";

interface Transfer {
    id: number;
    senderId: string;
    senderName: string;
    senderAccountNumber: string;
    recipientId: string;
    recipientName: string;
    recipientAccountNumber: string;
    amount: string;
    description: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
}

export default function AdminTransfersPage() {
    const { toast } = useToast();
    const [transfers, setTransfers] = useState<Transfer[]>([]);
    const [loading, setLoading] = useState(true);
    const [processingId, setProcessingId] = useState<number | null>(null);

    const fetchTransfers = async () => {
        try {
            const res = await fetch("/api/admin/transfers");
            if (res.ok) {
                const data = await res.json();
                setTransfers(data);
            } else {
                throw new Error("Failed to fetch transfers");
            }
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Could not load pending transfers",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransfers();
    }, []);

    const handleAction = async (id: number, action: "approve" | "reject") => {
        setProcessingId(id);
        try {
            const res = await fetch(`/api/admin/transfers/${id}/${action}`, {
                method: "POST",
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || `Failed to ${action} transfer`);
            }

            toast({
                title: "Success",
                description: `Transfer ${action}d successfully`,
            });

            fetchTransfers();
        } catch (error: any) {
            toast({
                title: "Action Failed",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setProcessingId(null);
        }
    };

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-screen">
                    <Loader2 className="h-8 w-8 animate-spin" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container mx-auto py-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Pending Transfer Requests</CardTitle>
                        <CardDescription>Review and approve user transfer requests.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {transfers.length === 0 ? (
                            <div className="text-center py-10 text-muted-foreground">
                                No pending transfers found.
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Sender</TableHead>
                                        <TableHead>Recipient</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {transfers.map((transfer) => (
                                        <TableRow key={transfer.id}>
                                            <TableCell>
                                                {new Date(transfer.createdAt).toLocaleDateString()}
                                                <br />
                                                <span className="text-xs text-muted-foreground">
                                                    {new Date(transfer.createdAt).toLocaleTimeString()}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">{transfer.senderName}</div>
                                                <div className="text-xs text-muted-foreground">{transfer.senderAccountNumber}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">{transfer.recipientName}</div>
                                                <div className="text-xs text-muted-foreground">{transfer.recipientAccountNumber}</div>
                                            </TableCell>
                                            <TableCell className="font-bold">
                                                ${parseFloat(transfer.amount).toFixed(2)}
                                            </TableCell>
                                            <TableCell>{transfer.description || "-"}</TableCell>
                                            <TableCell className="text-right space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                    onClick={() => handleAction(transfer.id, "reject")}
                                                    disabled={processingId === transfer.id}
                                                >
                                                    {processingId === transfer.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin" />
                                                    ) : (
                                                        <X className="h-4 w-4" />
                                                    )}
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="bg-green-600 hover:bg-green-700"
                                                    onClick={() => handleAction(transfer.id, "approve")}
                                                    disabled={processingId === transfer.id}
                                                >
                                                    {processingId === transfer.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin" />
                                                    ) : (
                                                        <Check className="h-4 w-4" />
                                                    )}
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
