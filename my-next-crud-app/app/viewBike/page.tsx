"use client";

import { useState } from "react";
import { bikeDataType } from "../utils/type";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Contact() {
    const [allBikes, setAllBikes] = useState<bikeDataType[]>(JSON.parse(localStorage.getItem('bikes') || '[]'));

    const router = useRouter();

    function deleteBike(id: number) {
        const deletedBike = allBikes.filter(bike => bike.id !== id);

        setAllBikes(deletedBike);

        localStorage.setItem('bikes', JSON.stringify(deletedBike));

        toast.success("Bike deleted successfully...");
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                    Fleet Inventory
                </h1>
                <p className="text-gray-500 mt-2">Manage and view all registered motorbikes</p>
            </header>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">No</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">Brand</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">Fuel</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">Features</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-700 text-center uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {allBikes.length > 0 ? (
                            allBikes.map((bike, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{bike.brand}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{bike.bikeName}</td>
                                    <td className="px-6 py-4 text-sm font-mono text-green-600">${bike.bikePrice}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                            {bike.fuelType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">
                                        {bike.features}
                                    </td>
                                    <td className="px-6 py-4 text-center space-x-3">
                                        <button onClick={() => router.push(`/editBike/${bike.id}`)} className="text-sm font-semibold text-indigo-600 hover:text-indigo-900 transition-colors">
                                            Edit
                                        </button>
                                        <button onClick={() => deleteBike(bike.id)} className="text-sm font-semibold text-red-600 hover:text-red-900 transition-colors">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="px-6 py-10 text-center text-gray-400 italic">
                                    No bikes found in the inventory.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}