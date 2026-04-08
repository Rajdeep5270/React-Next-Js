"use client";

import { useEffect, useState } from "react";
import { bikeDataType } from "../utils/type";
import { toast } from "react-toastify";

export default function About() {

    const brandName = ["Royal Enfield", "Hero", "Honda", "Suzuki", "Bajaj"];
    const fuelType = ["Petrol", "Diesel", "EV", "CNG"];
    const features = ["Disc Brake", "Alloy Wheels", "Bluetooth", "Navigation", "USB Charging"];



    const [bikeData, setBikeData] = useState<bikeDataType>({
        id: Math.floor(Math.random() * 10000),
        brand: "",
        bikeName: "",
        bikePrice: 0,
        fuelType: "",
        features: []
    });

    const [error, setError] = useState<any>({});

    const [allBikes, setAllBikes] = useState<bikeDataType[]>(JSON.parse(localStorage.getItem('bikes') || '[]'));

    useEffect(() => {
        localStorage.setItem('bikes', JSON.stringify(allBikes));
    }, [allBikes]);

    function onSubmit(event: any) {
        event.preventDefault();

        if (!validation()) {
            return;
        }

        setAllBikes(bikes => [...bikes, bikeData]);

        toast.success("Bike added successfully...");

        setBikeData({
            id: Math.floor(Math.random() * 10000),
            brand: "",
            bikeName: "",
            bikePrice: 0,
            fuelType: "",
            features: []
        });

    }


    const onHandleChange = (e: any) => {
        const { name, value } = e.target;

        setBikeData(bikeData => ({ ...bikeData, [name]: (name === 'bikePrice') ? Number(value) : value }))
    }

    const onChangeFeatures = (e: any) => {
        const { value, checked } = e.target;

        setBikeData(bikeData => ({ ...bikeData, features: (checked) ? [...bikeData.features, value] : bikeData.features.filter(features => features !== value) }))
    }

    function validation() {
        const error: any = {};

        if (!bikeData.brand) error.brand = "Bike brand is required";

        if (!bikeData.bikeName) error.bikeName = "Bike name is required";

        if (!bikeData.bikePrice) error.bikePrice = "Bike price is required";

        if (bikeData.bikePrice < 0) error.bikePrice = "Bike price is invalid";

        if (!bikeData.fuelType) error.fuelType = "Fuel type is required";

        if (bikeData.features.length < 1) error.features = "Features is required";

        setError(error);

        return Object.keys(error).length === 0;
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
                        <label htmlFor="brand" className="block text-sm font-semibold text-gray-700 mb-2">Brand {bikeData.brand}</label>
                        <select value={bikeData.brand} onChange={onHandleChange} name="brand" id="brand" className={`w-full px-4 py-2.5 ${error.brand ? ' border-red-500' : ' border-gray-300'}  bg-red-100-50 border text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block transition`}>
                            <option>Select Brand</option>
                            {brandName.map((brand, idx) => {
                                return <option key={idx} value={brand}>{brand}</option>
                            })}
                        </select>
                        {error.brand && <p className="text-red-600 text-sm">{error.brand}</p>}
                    </div>

                    {/* Name & Price Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                                value={bikeData.bikeName}
                                onChange={onHandleChange}
                                type="text"
                                name="bikeName"
                                placeholder="eg: Himalayan"
                                className={`w-full px-4 py-2 bg-gray-50 border ${error.bikeName ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
                            />
                            {error.bikeName && <p className="text-red-500 text-sm">{error.bikeName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Price</label>
                            <input
                                value={bikeData.bikePrice}
                                onChange={onHandleChange}
                                type="number"
                                name="bikePrice"
                                placeholder="₹ 0.00"
                                className={`w-full px-4 py-2 bg-gray-50 border ${error.bikePrice ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
                            />
                            {error.bikePrice && <p className="text-red-500 text-sm">{error.bikePrice}</p>}
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
                                        checked={bikeData.fuelType === fuel}
                                        onChange={onHandleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition">{fuel}</span>
                                </label>
                            })}
                        </div>
                        {error.fuelType && <p className="text-red-500 text-sm">{error.fuelType}</p>}
                    </div>

                    {/* Features */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Features</label>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                            {features.map((feature, idx) => {
                                return <label key={idx} className="inline-flex items-center cursor-pointer group">
                                    <input
                                        value={feature}
                                        checked={bikeData.features.includes(feature)}
                                        name="features"
                                        type="checkbox"
                                        onChange={onChangeFeatures}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition">{feature}</span>
                                </label>
                            })}
                        </div>
                        {error.fuelType && <p className="text-red-500 text-sm mt-1">{error.fuelType}</p>}
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