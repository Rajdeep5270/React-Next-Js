"use client";

import { useState } from "react";

export default function About() {

    const brandName = ["Royal Enfield", "Hero", "Honda", "Suzuki", "Bajaj"];
    const fuelType = ["Petrol", "Diesel", "EV", "CNG"];
    const features = ["Disc Brake", "Alloy Wheels", "Bluetooth", "Navigation", "USB Charging"];

    type bikeDataType = {
        id: number,
        brand: string,
        bikeName: string,
        bikePrice: number,
        fuelType: string,
        features: string[]
    }

    const [bikeData, setBikeData] = useState<bikeDataType>({
        id: Math.floor(Math.random() * 10000),
        brand: "",
        bikeName: "",
        bikePrice: 0,
        fuelType: "",
        features: []
    });

    function onSubmit(event: any) {
        event.preventDefault();

        console.log(bikeData);

        console.log("Form Submitted...");
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <header className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Vehicle Specifications</h2>
                    <p className="text-gray-500 text-sm">Enter the details to list the bike on the marketplace.</p>
                </header>

                <form className="space-y-6" onSubmit={onSubmit}>
                    {/* Brand Selection */}
                    <div>
                        <label htmlFor="bikeBrand" className="block text-sm font-semibold text-gray-700 mb-2">Brand {bikeData.brand}</label>
                        <select onChange={(e => setBikeData({ ...bikeData, brand: e.target.value }))} name="bikeBrand" id="bikeBrand" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition">
                            <option>Select Brand</option>
                            {brandName.map((brand, idx) => {
                                return <option key={idx} value={brand}>{brand}</option>
                            })}
                        </select>
                    </div>

                    {/* Name & Price Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                                onChange={(e => setBikeData({ ...bikeData, bikeName: e.target.value }))}
                                type="text"
                                name="bikeName"
                                placeholder="eg: Himalayan"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Price</label>
                            <input
                                type="number"
                                name="bikePrice"
                                placeholder="₹ 0.00"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            />
                        </div>
                    </div>

                    {/* Fuel Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Fuel Type</label>
                        <div className="flex flex-wrap gap-6">
                            {fuelType.map((fuel, idx) => {
                                return <label key={idx} className="inline-flex items-center group cursor-pointer">
                                    <input
                                        type="radio"
                                        name="fuelType"
                                        value={fuel}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition">{fuel}</span>
                                </label>
                            })}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Features</label>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                            {features.map((feature, idx) => {
                                return <label key={idx} className="inline-flex items-center cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition">{feature}</span>
                                </label>
                            })}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-blue-200 transition duration-200 transform active:scale-[0.98]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}