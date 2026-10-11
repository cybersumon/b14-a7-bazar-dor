"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { authClient } from "@/lib/auth-client"


export default function SignInPage() {
    const router = useRouter();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>

    ) {
        event.preventDefault();

        setError("")
        setLoading(true);

        const { error } = await authClient.signIn.email({

            email,
            password,
        });

        setLoading(false);

        if (error) {
            setError(error.message || " আপনি কিছু ভূল করছেন ");
            return;
        }


        router.push("/");
        router.refresh();

    }
    return (
        <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center px-4 py-12">
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                        সাইন ইন করুন

                    </h1>

                    <p className="mt-2 text-sm text-gray-500">

                        আপনার অ্যাকাউন্টে প্রবেশ করুন।
                    </p>

                </div>


                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-4"
                >


                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            ইমেইল
                        </label>

                        <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-green-600" placeholder="আপনার ইমেইল টি দিন " />


                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-1 block text-sm font-medium text-gray-700"
                        >
                            পাসওয়ার্ড
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            minLength={8}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-green-600"
                            placeholder="আপনার পাসওয়ার্ড দিন "
                        />


                    </div>


                    {error && (
                        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                            {error}

                        </p>
                    )}

                    <button type="submit" disabled={loading}
                        className="w-full rounded-lg bg-green-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"

                    >
                        {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}

                    </button>
                </form>

                <p className="mt-5 text-center text-sm text-gray-600">
                    নতুন ব্যবহারকারী?{" "}
                    <Link
                        href="/signup"
                        className="font-semibold text-green-700 hover:text-green-800"



                    >
                        রেজিস্টার করুন
                    </Link>
                </p>


            </div>
        </section>
    )

}