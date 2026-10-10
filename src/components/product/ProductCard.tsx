import { Product } from "@/types/product";
import Link from "next/link";

 


 interface ProductCardProps {
    product: Product;

 }
 
 function toBanglaNumber(value: number){
    return new Intl.NumberFormat("bn-BD").format(value);
 }

 function getUnitLabel(unit:string){
    const units:Record<string, string> = {
        kg: "প্রতি কেজি",
    liter: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
    };
    return units[unit] ?? unit;

 }

 export default function ProductCard({product} : ProductCardProps) {
    const isUp = product.change.dir === "up";
    const isDown = product.change.dir === "down";

    return (
        <Link
        href={`/product/${product.slug}`}
        className="block rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"

        
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-3xl">
{product.image}
                </div>
<span
className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
    isUp
    ? "bg-green-100 text-green-700"
    : isDown
    ? "bg-red-100 text-red-700"
    : "bg-gray-100 text-gray-600"
}`}


>
    {isUp ? "▲" : isDown ? "▼" : "_" } {" "}
    {toBanglaNumber(product.change.pct)}%


</span>

            </div>

            <div className="mt-5">
                <h3 className="text-lg font-bold text-gray-900">
                    {product.nameBn}

                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    {getUnitLabel(product.unit)}

                </p>

            </div>
        <div className="mt-5 border-t border-gray-100 pt-4">
<p className="text-xs text-gray-500">
    আজকের দাম

</p>

<p className="mt-1 text-xl font-bold text-gray-900">
          {toBanglaNumber(product.today)} টাকা
        </p>

        </div>
        
        </Link>
    );
 }