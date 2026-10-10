


export default function ProductSkeleton() {
    return (

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="animate-pulse">
                <div className="flex items-start justify-between  gap-4">
                    <div className="h-14 w-14 rounded-xl bg-gray-200" />

                    <div className="h-6 w-16 rounded-full bg-gray-200" />

                </div>

                <div className="mt-5">
                    <div className=" h-5 w-32 rounded bg-gray-200" />

                    <div className="mt-3 h-4 w-20 rounded bg-gray-200" />


                </div>
                <div className="mt-5 border-t border-gray-100 pt-4">
                    <div className="h-3 w-16 rounded bg-gray-200" />

                    <div className="mt-3 h-6 w-24 rounded bg-gray-200" />


                </div>
            </div>

        </div>













    );
}


interface ProductSkeletonGridProps {

    count?: number;

}

export function ProductSkeletonGrid({
    count = 8,

}: ProductSkeletonGridProps) {
    return (
        <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8">
                <div className="h-7 w-40 animate-pulse rounded bg-gray-200" />
                <div className="mt-3 h-4 w-64 animate-pulse rounded bg-gray-200" />

            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{Array.from({length: count}).map((_, index) => (
    <ProductSkeleton key={index} />
))}

            </div>

        </div>
    )
}