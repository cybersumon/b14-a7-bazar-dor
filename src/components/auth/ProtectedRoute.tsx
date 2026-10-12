"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;

}){
    const router = useRouter();
    const {data: session, isPending } = authClient.useSession();

useEffect(() =>{
if (!isPending && !session?.user){
    toast.info("পণ্যের বিস্তারিত দেখতে আগে সাইন ইন করুন");
    router.push("/signin");

}

},[session, isPending, router]);

if (isPending){
    return(
    <div className="flex min-h-[50vh] items-center justify-center">
                <p className="text-gray-500">
                    লোড হচ্ছে...
                </p>
            </div>
        );
    }

    if (!session?.user) {
        return null;
    }

    return <>{children}</>;
}