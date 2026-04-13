import { useEffect, useState } from "react";
import type { productTypeWithId } from "../utils/type";
import { deleteProduct, fetchAll } from "../services/productService";

export default function viewProductPage() {

    const [allProductsData, setAllProductsData] = useState<productTypeWithId[]>([]);

    useEffect(() => {
        fetchAllProducts();
    }, [])

    async function fetchAllProducts() {
        const allData = await fetchAll();

        setAllProductsData(allData);
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Header Section */}
                <div className="sm:flex sm:items-center sm:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            View Products
                        </h1>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            A list of all the products in your account including their name, price, stock, and status.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0">
                        <button className="block rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors">
                            Export CSV
                        </button>
                    </div>
                </div>

                {/* Table Card */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 dark:bg-slate-800/50">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">No.</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Product</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Category</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Price</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Stock</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Description</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                {allProductsData.map((p, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={p.product_image}
                                                    alt={p.product_name}
                                                    className="h-10 w-10 rounded-lg object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                                                />
                                                <span className="text-sm font-medium text-slate-900 dark:text-white">
                                                    {p.product_name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400">
                                                {p.product_category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                            ${p.product_price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className={`h-1.5 w-1.5 rounded-full ${p.product_stock < 10 ? 'bg-rose-500' : 'bg-emerald-500'}`}></span>
                                                <span className="text-sm text-slate-600 dark:text-slate-400">{p.product_stock} in stock</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                                            {p.product_description}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium space-x-3">
                                            <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                                                Edit
                                            </button>
                                            <button onClick={() => deleteProduct(p.id)} className="text-rose-600 hover:text-rose-900 dark:text-rose-400 dark:hover:text-rose-300">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}