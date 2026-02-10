(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/uniteBank/app/lib/queryClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest,
    "getQueryFn",
    ()=>getQueryFn,
    "queryClient",
    ()=>queryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
;
async function throwIfResNotOk(res) {
    if (!res.ok) {
        const text = await res.text() || res.statusText;
        throw new Error(`${res.status}: ${text}`);
    }
}
async function apiRequest(method, url, data) {
    const res = await fetch(url, {
        method,
        headers: data ? {
            "Content-Type": "application/json"
        } : {},
        body: data ? JSON.stringify(data) : undefined,
        credentials: "include"
    });
    await throwIfResNotOk(res);
    return res;
}
const getQueryFn = ({ on401: unauthorizedBehavior })=>async ({ queryKey })=>{
        const res = await fetch(queryKey.join("/"), {
            credentials: "include"
        });
        if (unauthorizedBehavior === "returnNull" && res.status === 401) {
            return null;
        }
        await throwIfResNotOk(res);
        return await res.json();
    };
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            queryFn: getQueryFn({
                on401: "throw"
            }),
            refetchInterval: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            retry: false
        },
        mutations: {
            retry: false
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/uniteBank/app/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/uniteBank/app/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/uniteBank/app/hooks/use-auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/shared/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/wouter/esm/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useAuth() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    const { data: user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].auth.me.path
        ],
        queryFn: {
            "useAuth.useQuery": async ()=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].auth.me.path);
                if (res.status === 401) return null;
                if (!res.ok) throw new Error("Failed to fetch user");
                return await res.json();
            }
        }["useAuth.useQuery"],
        retry: false
    });
    const loginMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAuth.useMutation[loginMutation]": async (credentials)=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].auth.login.path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                });
                if (!res.ok) {
                    if (res.status === 401) throw new Error("Invalid email or password");
                    const errorData = await res.json().catch({
                        "useAuth.useMutation[loginMutation]": ()=>null
                    }["useAuth.useMutation[loginMutation]"]);
                    throw new Error(errorData?.message || "Login failed");
                }
                return await res.json();
            }
        }["useAuth.useMutation[loginMutation]"],
        onSuccess: {
            "useAuth.useMutation[loginMutation]": (data)=>{
                queryClient.setQueryData([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].auth.me.path
                ], data);
                const displayName = data.firstName?.trim() || data.lastName?.trim() || data.email;
                toast({
                    title: "Welcome back!",
                    description: `Logged in as ${displayName}`
                });
            }
        }["useAuth.useMutation[loginMutation]"],
        onError: {
            "useAuth.useMutation[loginMutation]": (error)=>{
                toast({
                    title: "Login Failed",
                    description: error.message,
                    variant: "destructive"
                });
            }
        }["useAuth.useMutation[loginMutation]"]
    });
    const logoutMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAuth.useMutation[logoutMutation]": async ()=>{
                await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].auth.logout.path, {
                    method: "POST"
                });
            }
        }["useAuth.useMutation[logoutMutation]"],
        onSuccess: {
            "useAuth.useMutation[logoutMutation]": ()=>{
                queryClient.clear();
                toast({
                    title: "Logged out",
                    description: "See you next time!"
                });
                setLocation("/auth");
            }
        }["useAuth.useMutation[logoutMutation]"],
        onError: {
            "useAuth.useMutation[logoutMutation]": ()=>{
                toast({
                    title: "Logout Failed",
                    description: "Please try again",
                    variant: "destructive"
                });
            }
        }["useAuth.useMutation[logoutMutation]"]
    });
    const registerMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAuth.useMutation[registerMutation]": async (data)=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].auth.register.path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.message || "Registration failed");
                }
                return await res.json();
            }
        }["useAuth.useMutation[registerMutation]"],
        onSuccess: {
            "useAuth.useMutation[registerMutation]": (res)=>{
                toast({
                    title: "Application submitted",
                    description: res.message
                });
            }
        }["useAuth.useMutation[registerMutation]"],
        onError: {
            "useAuth.useMutation[registerMutation]": (error)=>{
                toast({
                    title: "Registration Failed",
                    description: error.message,
                    variant: "destructive"
                });
            }
        }["useAuth.useMutation[registerMutation]"]
    });
    const forgotPasswordMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAuth.useMutation[forgotPasswordMutation]": async ({ email })=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].auth.forgotPassword.path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email
                    })
                });
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.message || "Unable to send OTP");
                }
                return await res.json();
            }
        }["useAuth.useMutation[forgotPasswordMutation]"],
        onSuccess: {
            "useAuth.useMutation[forgotPasswordMutation]": ()=>{
                toast({
                    title: "OTP sent",
                    description: "Check your email for the password reset code."
                });
            }
        }["useAuth.useMutation[forgotPasswordMutation]"],
        onError: {
            "useAuth.useMutation[forgotPasswordMutation]": (error)=>{
                toast({
                    title: "Request Failed",
                    description: error.message,
                    variant: "destructive"
                });
            }
        }["useAuth.useMutation[forgotPasswordMutation]"]
    });
    const resetPasswordMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAuth.useMutation[resetPasswordMutation]": async (payload)=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].auth.resetPassword.path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.message || "Unable to reset password");
                }
                return await res.json();
            }
        }["useAuth.useMutation[resetPasswordMutation]"],
        onSuccess: {
            "useAuth.useMutation[resetPasswordMutation]": ()=>{
                toast({
                    title: "Password updated",
                    description: "You can now log in with your new password."
                });
            }
        }["useAuth.useMutation[resetPasswordMutation]"],
        onError: {
            "useAuth.useMutation[resetPasswordMutation]": (error)=>{
                toast({
                    title: "Reset Failed",
                    description: error.message,
                    variant: "destructive"
                });
            }
        }["useAuth.useMutation[resetPasswordMutation]"]
    });
    return {
        user,
        isLoading,
        loginMutation,
        logoutMutation,
        registerMutation,
        forgotPasswordMutation,
        resetPasswordMutation
    };
}
_s(useAuth, "SntydPfuPEH4WLBq89qEh+sGSvg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/uniteBank/app/hooks/use-transactions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllTransactions",
    ()=>useAllTransactions,
    "useCreateTransaction",
    ()=>useCreateTransaction,
    "useTransactions",
    ()=>useTransactions,
    "useUpdateTransaction",
    ()=>useUpdateTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/shared/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/hooks/use-toast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
function useTransactions() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].user.listTransactions.path
        ],
        queryFn: {
            "useTransactions.useQuery": async ()=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].user.listTransactions.path);
                if (!res.ok) throw new Error("Failed to fetch transactions");
                return await res.json();
            }
        }["useTransactions.useQuery"]
    });
}
_s(useTransactions, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAllTransactions() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listAllTransactions.path
        ],
        queryFn: {
            "useAllTransactions.useQuery": async ()=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listAllTransactions.path);
                if (!res.ok) throw new Error("Failed to fetch all transactions");
                return await res.json();
            }
        }["useAllTransactions.useQuery"]
    });
}
_s1(useAllTransactions, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateTransaction() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateTransaction.useMutation": async (data)=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.createTransaction.path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                if (!res.ok) {
                    const errorBody = await res.json().catch({
                        "useCreateTransaction.useMutation": ()=>({})
                    }["useCreateTransaction.useMutation"]);
                    throw new Error(errorBody.message || "Failed to create transaction");
                }
                return await res.json();
            }
        }["useCreateTransaction.useMutation"],
        onSuccess: {
            "useCreateTransaction.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listAllTransactions.path
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listUsers.path
                    ]
                }); // To update user balances
                toast({
                    title: "Success",
                    description: "Transaction processed successfully"
                });
            }
        }["useCreateTransaction.useMutation"],
        onError: {
            "useCreateTransaction.useMutation": (error)=>{
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive"
                });
            }
        }["useCreateTransaction.useMutation"]
    });
}
_s2(useCreateTransaction, "zHg3Sjn36STGCnrkGliH3sciqaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateTransaction() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateTransaction.useMutation": async ({ id, data })=>{
                const res = await fetch(`/api/admin/transactions/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                if (!res.ok) {
                    const errorBody = await res.json().catch({
                        "useUpdateTransaction.useMutation": ()=>({})
                    }["useUpdateTransaction.useMutation"]);
                    throw new Error(errorBody.message || "Failed to update transaction");
                }
                return await res.json();
            }
        }["useUpdateTransaction.useMutation"],
        onSuccess: {
            "useUpdateTransaction.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listAllTransactions.path
                    ]
                });
                toast({
                    title: "Success",
                    description: "Transaction updated successfully"
                });
            }
        }["useUpdateTransaction.useMutation"],
        onError: {
            "useUpdateTransaction.useMutation": (error)=>{
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive"
                });
            }
        }["useUpdateTransaction.useMutation"]
    });
}
_s3(useUpdateTransaction, "zHg3Sjn36STGCnrkGliH3sciqaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/uniteBank/app/hooks/use-admin-users.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdminUsers",
    ()=>useAdminUsers,
    "useApproveUser",
    ()=>useApproveUser,
    "useRejectUser",
    ()=>useRejectUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/shared/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/hooks/use-toast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
function useAdminUsers() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listUsers.path
        ],
        queryFn: {
            "useAdminUsers.useQuery": async ()=>{
                const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listUsers.path);
                if (!res.ok) throw new Error("Failed to fetch users");
                return await res.json();
            }
        }["useAdminUsers.useQuery"]
    });
}
_s(useAdminUsers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useApproveUser() {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useApproveUser.useMutation": async (userId)=>{
                const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.approveUser.path, {
                    id: userId
                });
                const res = await fetch(url, {
                    method: "POST"
                });
                if (!res.ok) throw new Error("Failed to approve user");
                return await res.json();
            }
        }["useApproveUser.useMutation"],
        onSuccess: {
            "useApproveUser.useMutation": (data)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listUsers.path
                    ]
                });
                toast({
                    title: "User Approved",
                    description: `${data.firstName} can now access their account.`
                });
            }
        }["useApproveUser.useMutation"],
        onError: {
            "useApproveUser.useMutation": (error)=>{
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive"
                });
            }
        }["useApproveUser.useMutation"]
    });
}
_s1(useApproveUser, "zHg3Sjn36STGCnrkGliH3sciqaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useRejectUser() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useRejectUser.useMutation": async (userId)=>{
                const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.rejectUser.path, {
                    id: userId
                });
                const res = await fetch(url, {
                    method: "POST"
                });
                if (!res.ok) throw new Error("Failed to reject user");
                return await res.json();
            }
        }["useRejectUser.useMutation"],
        onSuccess: {
            "useRejectUser.useMutation": (data)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].admin.listUsers.path
                    ]
                });
                toast({
                    title: "User Rejected",
                    description: `${data.firstName} has been denied access.`
                });
            }
        }["useRejectUser.useMutation"],
        onError: {
            "useRejectUser.useMutation": (error)=>{
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive"
                });
            }
        }["useRejectUser.useMutation"]
    });
}
_s2(useRejectUser, "zHg3Sjn36STGCnrkGliH3sciqaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/uniteBank/app/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/wouter/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$lib$2f$queryClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/lib/queryClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/components/ui/toaster.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/components/theme-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$not$2d$found$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/not-found.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$landing$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/landing-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$auth$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/auth-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$transactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/transactions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$transfer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/transfer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$admin$2f$admin$2d$users$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/admin/admin-users.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$admin$2f$admin$2d$transactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/admin/admin-transactions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$admin$2f$admin$2d$transfers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/pages/admin/admin-transfers.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Router() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                path: "/",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$landing$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                path: "/auth",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$auth$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                path: "/dashboard",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                path: "/transfer",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$transfer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                path: "/transactions",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$transactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                path: "/admin/users",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$admin$2f$admin$2d$users$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                path: "/admin/transactions",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$admin$2f$admin$2d$transactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                path: "/admin/transfers",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$admin$2f$admin$2d$transfers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$wouter$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$pages$2f$not$2d$found$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/uniteBank/app/App.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Router;
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$lib$2f$queryClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                        fileName: "[project]/Documents/uniteBank/app/App.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Router, {}, void 0, false, {
                        fileName: "[project]/Documents/uniteBank/app/App.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/uniteBank/app/App.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/uniteBank/app/App.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/uniteBank/app/App.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = App;
const __TURBOPACK__default__export__ = App;
var _c, _c1;
__turbopack_context__.k.register(_c, "Router");
__turbopack_context__.k.register(_c1, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/uniteBank/app/App.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/uniteBank/app/App.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Documents_uniteBank_app_5f21ed97._.js.map