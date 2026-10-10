"use client"

import { useMemo, useState } from "react"

import ProductCard from "../product/ProductCard"
import SortDropdown from "@/components/category/SortDropdown";
import type { Product } from "@/types/product";

interface CategoryProductsProps {
products: Product[];
}
export default function CategoryProducts ({
    products,
}: CategoryProductsProps ) {
    const [sortOption, setSortOption] = useState("default");

    const sortedProducts = useMemo(() => {
        const copiedProducts = [...products];

        if (sortOption === "low-to-high") {
      return copiedProducts.sort((a, b) => a.today - b.today);
    }

    if (sortOption === "high-to-low") {
      return copiedProducts.sort((a, b) => b.today - a.today);
    }
    
    return copiedProducts;

    }, [products, sortOption]);

return (
<div>
    <div className="mb-6 flex justify-end">
        <SortDropdown
        value={sortOption}
        onChange={setSortOption}
        />


    </div>
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {sortedProducts.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
        />
    ))}

</div>
</div>


);

}

