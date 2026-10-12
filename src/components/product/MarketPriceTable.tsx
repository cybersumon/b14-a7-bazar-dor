import { MarketPrice } from "@/types/product";

interface MarketPriceProps {
    markets: MarketPrice[];
}

function toBanglaNumber(value: number) {
    return new Intl.NumberFormat("bd-BD").format(value);

}

export default function MarketPriceTable({
    markets,
}: MarketPriceProps) {
    return (
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-6 py 5 ">
                <h2 className="text-xl font-bold text-gray-900">
                    বাজারভিত্তিক আজকের দাম
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    বিভিন্ন বাজারের সর্বনিম্ন ও সর্বোচ্চ মূল্য।

                </p>

            </div>

            <div className="overflow-x-autoauto">
                <table className="w-full min-w-[650px] text-left">
                    <thead className="bg-gray-50 text-sm text-gray-600">
                        <tr>
                            <th className="px-6 py-4 font-semibold">
                                বাজার
                            </th>

                            <th className="px-6 py-4 font-semibold">
                                বিভাগ
                            </th>

                            <th className="px-6 py-4 font-semibold">
                                সব থেকে কম
                            </th>

                            <th className="px-6 py-4 font-semibold">
                                সব থেকে বেশি
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {markets.map((market, index) => (
                            <tr
                                key={`${market.market}-${index}`}
                                className="border-t border-gray-100"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {market.market}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {market.division}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {toBanglaNumber(market.min)} টাকা
                                </td>

                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {toBanglaNumber(market.max)} টাকা
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    )
}