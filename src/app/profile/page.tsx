"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client"

export default function MyProfile() {
    const router = useRouter();


    const { data: session, isPending } = authClient.useSession();

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");


    useEffect(() => {
        if (!isPending && !session?.user) {
            router.push("/signin");

        }
        if (session?.user?.name) {
            setName(session.user.name);
        }

    }, [session, isPending, router]);

    async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("");
        setLoading(true);

        const { error } = await authClient.updateUser({
            name,

        });

        setLoading(false);
        if (error) {
            setMessage(error.message || "Profile Update Fail");

            return;
        }

        setMessage("প্রোফাইল সফলভাবে আপডেট হয়েছে।");
        router.refresh();
    
    }

            if (isPending) {
            return (
                <div className="flex min-h-[60vh] items-center justify-center">
                    <p className="text-gray-500">
                        প্রোফাইল লোড হচ্ছে...
                    </p>
                </div>
            );

        }



        if (!session?.user) {
            return null;
        }
        return (
            <section className="mx-auto max-w-3xl px-4 py-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                    <div className="flex flex-col items-center">

                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700">
                            {session.user.name?.charAt(0).toUpperCase() || "U"}


                        </div>
                        <h1 className="mt-3 text-xl font-bold text-green-950">

                            {session.user.name}
                        </h1>

                        <p className="text-sm text-gray-500">
                            {session.user.email}
                        </p>

                    </div>

                    <form
                        onSubmit={handleUpdate}
                        className="mt-8 space-y-4"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                নাম
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                required
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-green-600"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                ইমেইল
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={session.user.email}
                                disabled
                                className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-gray-500"
                            />
                        </div>

                        {message && (
                            <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
                                {message}

                            </p>


                        )}
                        <button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"

                        >

                            {loading
                                ? "আপডেট হচ্ছে..."
                                : "প্রোফাইল আপডেট করুন"

                            }

                        </button>
                    </form>
                </div>
            </section>



        );
}