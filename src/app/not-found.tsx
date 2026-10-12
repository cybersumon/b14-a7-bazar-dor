import Link from "next/link";

export default function notFound(){
    return(
        <section className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="text-center">
        <div className="text-7xl font-bold text-green-700">
          404
        </div>

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে অথবা লিংকটি সঠিক নয়।
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </section>
  );
}
