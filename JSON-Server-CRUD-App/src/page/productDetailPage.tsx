import { useNavigate, useParams } from "react-router"
import { fetchSingle } from "../services/productService";
import { useEffect, useState } from "react";
import type { productTypeWithId } from "../utils/type";
import { setDataInCart } from "../services/cartService";

export default function ProductDetailPage() {
    const [productData, setProductData] = useState<productTypeWithId | null>(null);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (id) fetchSingleProductData();
    }, [id]);

    async function fetchSingleProductData() {
        const data = await fetchSingle(id || "");
        setProductData(data);
    }

    if (!productData) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
            </div>
        );
    }

    async function addToCart() {
        const status = await setDataInCart(productData!);

        if (status) {
            navigate('/add-to-cart');
        }
    }

    return (
        <main className="min-h-screen bg-white py-12 dark:bg-slate-950 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">

                    {/* Left: Image Gallery/Display */}
                    <div className="flex flex-col">
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                            <img
                                src={productData.product_image}
                                alt={productData.product_name}
                                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <div className="flex flex-col">
                            {/* Category Badge */}
                            <span className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
                                {productData.product_category}
                            </span>

                            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                                {productData.product_name}
                            </h1>

                            <div className="mt-6 flex items-center justify-between border-b border-slate-200 pb-6 dark:border-slate-800">
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                                    ${productData.product_price}
                                </p>

                                {/* Stock Status */}
                                <div className="flex items-center gap-2">
                                    <span className={`h-2.5 w-2.5 rounded-full ${Number(productData.product_stock) > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                        {productData.product_stock} Units Available
                                    </span>
                                </div>
                            </div>

                            {/* Description Section */}
                            <div className="mt-8">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                    Description
                                </h3>
                                <div className="mt-4 space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                    {productData.product_description}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <button onClick={addToCart} className="flex flex-1 items-center justify-center rounded-2xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-95">
                                    Add to Cart
                                </button>
                                <button className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 dark:border-slate-800/50">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Free shipping included
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    2 Year Warranty
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}