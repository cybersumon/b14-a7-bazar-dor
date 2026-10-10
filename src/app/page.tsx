
import Hero from "@/components/home/Hero";
import HomeProducts from "@/components/home/HomeProducts";
import { ProductSkeletonGrid } from "@/components/product/ProductSkeleton";

import { Suspense } from "react";


export default function Home() {





  return (

    <>
    
    <Hero />
<Suspense
// fallback={
//   <div className="mx-auto max-w-6xl px-4 py-16">
// <p className="text-gray-500">
//   পণ্যের তথ্য লোড হচ্ছে...

// </p>

//   </div>

// }

fallback={<ProductSkeletonGrid />}
>

  <HomeProducts />


</Suspense>






  

    </>
  );
}
