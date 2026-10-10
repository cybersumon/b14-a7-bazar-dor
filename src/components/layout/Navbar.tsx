"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const categories = [
    {name: "সকল পণ্য", href: "/"},
    {name: "চাল", href: "/category/chal"},
    {name: "ডাল", href: "/category/dal"},
    {name: "তেল", href: "/category/tel"},
    {name: "সবজি", href: "/category/sobji"},
    {name: "মাছ", href: "/category/mach"},
    {name: "মাংস", href: "/category/mangsho"},
    {name: "ডিম-দুধ", href: "/category/dim-dud"},
    {name: "মসলা", href: "/category/mosla"},


];

export default function Navbar() {
const pathname = usePathname();

const [banglaDate, setBanglaDate] = useState("");
useEffect(() => {
const formatedDate = new Intl.DateTimeFormat("bn-BD", {
day:"numeric",
month:"long",
year:"numeric",
timeZone:"Asia/Dhaka",
}).format(new Date());


setBanglaDate(formatedDate);
},[]);

return (
    <header className="border-b border-gray-200 bg-white">
        {/* Uporar navbar */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
            <div className="flex items-center gap-2">
                <span className="text-2xl">🛒</span>
                <div>
                    <h1 className="text-xl font-bold text-green-700">
বাজার দর
                    </h1>

                    <p className="text-xs text-gray-500">
                        {banglaDate}

                    </p>


                </div>

            </div>
            </Link>
{/* Authantication button */}
<div className="flex items-center gap-2">
    <Link
    href="/signin" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
    >
      সাইন ইন  
    </Link>
    <Link
    href="/signup" className="rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
    >

        সাইন আপ
    
    </Link>

</div>

        </div>

        {/* catagory navigation */}

        <nav className="border-t border-gray-100">
            <div className="mx-auto max-w-6xl overflow-x-auto px-4">
                <div className="flex min-w-max items-center gap-1 py-2"
                > {categories.map((category) => {
                    const isActive = 
                    category.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(category.href);


                  return (

                    <Link
                    key={category.href}
                    href={category.href} className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                        isActive
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    >
                        {category.name}
                    </Link>
                  );
                })}

                </div>

            </div>

        </nav>


        {/* akhana price ticker add korta hoba  */}

    </header>
);

}