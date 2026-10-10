import type { Product } from "@/types/product";

interface PriceTickerProps {
    products: Product[];

}

function toBanglaNumber(value: number) {
    return new Intl.NumberFormat("bn-BD").format(value);
}

export default function PriceTicker({
    products,
}: PriceTickerProps) {
    const tickerProducts = products.slice(0, 10);

    return (
    <div className="overflow-hidden border-t border-gray-100 bg-green-700 py-2 text-white">
        <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap">
            {[...tickerProducts, ...tickerProducts].map(
                (product, index) => {
                    const isUp = product.change.dir === "up";
                    const isDown = product.change.dir === "down";

return (
    <div
    key={`${product.id}-${index}`}
className="flex items-center gap-2 text-sm"

    >

        <span>
            {product.image}
        </span>
        <span className="font-medium">
            {product.nameBn}

        </span>

        <span>
            {toBanglaNumber(product.today)}  টাকা


        </span>


<span
                  className={
                    isUp
                      ? "text-green-200"
                      : isDown
                        ? "text-red-200"
                        : "text-gray-200"
                  }
                >
                  {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
                  {toBanglaNumber(product.change.pct)}%
                </span>
              </div>
            );
          }
        )}
      </div>
    </div>
    );
}