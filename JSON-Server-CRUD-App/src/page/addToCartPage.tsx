import { useEffect, useState } from "react";
import { fetchAll } from "../services/cartService"
import type { productTypeWithId } from "../utils/type";


export default function AddToCartPage() {
    const [cartData, setCartData] = useState<productTypeWithId[]>([]);

    useEffect(() => {
        fetchCartAllProducts();
    }, []);

    async function fetchCartAllProducts() {
        const data = await fetchAll();
        setCartData(data);
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Shopping Cart
                    </h1>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        You have {cartData.length} items in your cart.
                    </p>
                </div>

                {/* Simplified Table Container */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Product</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Category</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Price</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                {cartData.map((product, idx) => (
                                    <tr key={product.id || idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        {/* Product & Image */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={product.product_image}
                                                    alt={product.product_name}
                                                    className="h-12 w-12 flex-none rounded-lg object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                                                />
                                                <span className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                                                    {product.product_name}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Category */}
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                                {product.product_category}
                                            </span>
                                        </td>

                                        {/* Price */}
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">
                                            ${product.product_price}
                                        </td>

                                        {/* Remove Action */}
                                        <td className="px-6 py-4 text-right">
                                            <button className="rounded-lg px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10 transition-all">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {/* Empty State */}
                                {cartData.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-20 text-center">
                                            <div className="flex flex-col items-center">
                                                <div className="rounded-full bg-slate-100 p-3 dark:bg-slate-800">
                                                    <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                    </svg>
                                                </div>
                                                <p className="mt-4 text-sm font-medium text-slate-500">Your cart is feeling a bit light.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}