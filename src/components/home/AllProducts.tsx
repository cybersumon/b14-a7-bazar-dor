// import { getProducts } from "@/lib/api";
import ProductCard from "../product/ProductCard";
import { Product } from "@/types/product";


interface AllProductsProps {
    products: Product[];
}


export default function AllProducts({products}: AllProductsProps ) {
// const products = await getProducts();


return (

    <section
    id="all-products"
    className="mx-auto max-w-6xl px-4 py-16"
    
    >
<div>
<h2 className="text-2xl font-bold text-gray-900">
    সব পণ্য

</h2>
<p className="mt-2 text-gray-500">
    নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর দেখুন।

</p>


</div>


<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{products.map((product) => (
    <ProductCard key={product.id} product={product} />
))}

</div>
    </section>
)


}