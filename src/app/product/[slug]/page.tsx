import Link from "next/link";
import { notFound } from "next/navigation";
import MarketPriceTable from "@/components/product/MarketPriceTable";
import ProductSummary from "@/components/product/ProductSummary";
import { getProductBySlug } from "@/lib/api";
import { Suspense } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ProductPage( {
    params,
}: ProductPageProps ) {

    return(
        <Suspense
        fallback={
            <div className="mx-auto max-w-6xl px-4 py-12">
                <p className="text-gray-500">
                    পণ্যের তথ্য লোড হচ্ছে...

                </p>

            </div>
        }
        >
            <ProductDetails params={params} />



        </Suspense>
    );
}

async function ProductDetails( {
    params,
}: ProductPageProps ) {
    const {slug} = await params;
    const product = await getProductBySlug(slug)
    


    

    if (!product) {
        notFound();
    }

    return(
        <ProtectedRoute>
        <section className="mx-auto max-w-6xl px-4 py-12">
            <Link 
            href="/"
        className="mb-6 inline-flex text-sm font-medium text-green-700 hover:text-green-800"
            >
                ← হোম পেজে ফিরে যান
            </Link>
<ProductSummary product={product} />
<MarketPriceTable markets={product.markets} />

        </section>
        </ProtectedRoute>
        
    )
    
}