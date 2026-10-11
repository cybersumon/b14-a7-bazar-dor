import type { Product } from "@/types/product";

interface ProductSummaryProps {
    product:Product;
}

function toBanglaNumber(value: number){
    return new Intl.NumberFormat("bn-BD").format(value);

}


function getUnitLabel(unit: string) {
    const units: Record<string, string> = {
        kg: "প্রতি কেজি",
    liter: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস", 
    };
return units[unit] ?? unit;


}

export default function ProductSummary({
    product,
}: ProductSummaryProps) {
    const minimumPrice = Math.min(
        ...product.markets.map((market) => market.min)
    );

const averagePrice = Math.round(
    product.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0
    ) / product.markets.length
  );

return (

    <div className="grid gap-8 lg:grid-cols-2">
        {/* Product info */}
<div className="rounded-2xl border border-gray-200 bg-white p-6">
<div className=" flex items-start gap-4">
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 text-5xl" >
{product.image}
    </div>
<div>
    <p className="text-sm font-medium text-green-700">
        {product.categoryIcon} {product.categoryNameBn}

    </p>

    <h1 className="mt-1 text-3xl font-bold text-gray-900">
        {product.nameBn}

    </h1>

    <p className="mt-2 text-sm text-gray-500">
        {getUnitLabel(product.unit)}

    </p>
</div>

</div>
<p className=" mt-6 leading-7 text-gray-600">
    দেশের বিভিন্ন বাজারে {product.nameBn}-এর আজকের সর্বশেষ
          বাজারদর ও মূল্য পরিবর্তনের তথ্য দেখুন।

</p>
</div>

{/* price summary */}
<div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900">
          মূল্য সংক্ষেপ
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
              সর্বনিম্ন দাম
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900">
                {toBanglaNumber(minimumPrice)} টাকা

            </p>


            </div>

            <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                    গড় দাম

                </p>

               <p className="mt-1 text-xl font-bold text-gray-900">
              {toBanglaNumber(averagePrice)} টাকা
            </p> 

            </div >

            <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-green-700">
                    আজকের দাম

                </p>


                <p className="mt-1 text-xl font-bold text-green-800">
                    {toBanglaNumber(product.today)} টাকা

                </p>

            </div>

        </div>

</div>

    </div>
)





}
