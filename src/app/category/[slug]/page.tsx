import Link from "next/link";
import CategoryProducts from "@/components/category/CategoryProducts";
import { getProductsByCategory } from "@/lib/api";

interface CategoryPageProps {
    params: Promise<{

        slug: string

    }>;
}

export default async function CategoryPage({
    params,
}: CategoryPageProps) {
    const { slug } = await params;

    const products = await getProductsByCategory(slug);

    if (products.length === 0) {
        return (
            <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
                <div className="text-6xl">🔍</div>

                <h1 className=" mt-4 text-3xl font-bold text-gray-900">
                    কোনো পণ্য পাওয়া যায়নি

                </h1>

                <p className="mt-2 text-gray-600">
                    এই ক্যাটাগরিতে কোনো পণ্য নেই অথবা ক্যাটাগরিটি সঠিক নয়।


                </p>

                <Link
          href="/"
          className="mt-6 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
        >

          হোম পেজে ফিরে যান

        </Link>



            </section>
        )
    }
const firstProduct = products[0];

return (
<section className="mx-auto max-w-6xl px-4 py-12">
    <div className="mb-8">
        <div className="flex items-center gap-3">
            <span className="text-4xl"> {firstProduct.categoryIcon}</span>
<div>
    <h1 className="text-3xl font-bold text-gray-900">
        {firstProduct.categoryNameBn}

    </h1>

    <p className="mt-1 text-gray-600"> এই ক্যাটাগরির আজকের বাজারদর দেখুন। </p>


    
</div>





        </div>



    </div>

<CategoryProducts products={products} />

</section>

)






}