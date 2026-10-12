import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/bazar-hero.png";




export default function Hero(){

    return (
        <section className="bg-[#f3f8f1]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
           
           {/* Bam Dikar Contant */}
<div>
    <p className="mb-3 text-sm font-semibold text-green-700">

        এক নজরে আজকের বাজারদর

    </p>
<h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

    নিত্যপ্রয়োজনীয় পণ্যের

    <span className="block text-green-700"> সঠিক দাম জানুন </span>

</h1>
<p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
     চাল, ডাল, তেল, সবজি, মাছ ও মাংসসহ প্রয়োজনীয় পণ্যের সর্বশেষ
            বাজারদর সহজেই দেখুন।

</p>

<div className=" mt-7">
    <Link 
    href="#all-products" className="inline-flex items-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"

    >
       সব পণ্য দেখুন 
    
    </Link>


</div>

</div>


{/* Dan Dikar Contant */}

<div className="flex justify-center md:justify-end">
          <div className="flex h-72 w-full max-w-md items-center justify-center rounded-3xl bg-white p-8 shadow-sm">
            <div className="-translate-y-6 text-center">
              <div className="flex items-center justify-center">
    <Image
        src={heroImage}
        alt="বাজার দর"
        width={500}
        height={400}
        priority
        className="h-auto w-full max-w-md object-contain"
    />
</div>

              <p className="mt-0 text-lg font-semibold text-gray-800">
                আজকের বাজার দর
              </p>

              <p className="mt-0 text-sm text-gray-500">
                প্রয়োজনীয় পণ্যের দাম এখন আরও সহজে
              </p>
            </div>
          </div>
        </div>



        </div>

        </section>
    )
}