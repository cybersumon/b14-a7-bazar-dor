"use client"

interface SortDropdownProps {
    value: string;
    onChange: (value: string) => void;

}

export default function SortDropdown({
    value,
    onChange,
}: SortDropdownProps) {
    return (
        <div className=" flex items-center gap-2">
            <label
                htmlFor="sort"
                className="text-sm font-medium text-gray-700"
            >
                সাজান:
            </label>

            <select
                id="sort"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-green-600"
            >

                <option value="default" >
                    ডিফল্ট
                </option>

                <option value="low-to-high">
                    টিয়া : কম থিক্কা বেশি
                </option>
                <option value="high-to-low">
                    দাম: বেশি 2 কম
                </option>


            </select>


        </div>
    )
}