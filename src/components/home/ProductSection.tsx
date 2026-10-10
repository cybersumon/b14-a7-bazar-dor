import ProductCard from "../product/ProductCard";
import type { Product } from "@/types/product";


interface ProductSectionProps {
    title: string;
    products: Product[];

}


export default function ProductSection({
    title,
    products,

} : ProductSectionProps ) {
return (


    <section className="mx-auto max-w-6xl px-4 py-10" >
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl font-bold text-gray-900">
{title}

</h2>

</div>
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
{products.map((product) => (
    <ProductCard key={product.id} product={product} />
))}

</div>




    </section>
)
}