import { useEffect, useState } from "react";
import { fetchAll } from "../services/productService";
import type { productTypeWithId } from "../utils/type";
import { Link } from "react-router";

export default function homePage() {

    const [allProduct, setAllProduct] = useState<productTypeWithId[]>([]);
    const [allCategories, setAllCategories] = useState<string[]>([]);
    const [filterCategory, setFilterCategory] = useState<string>("");

    useEffect(() => {
        fetchAllProducts();
    }, [])

    useEffect(() => {
        let allCategory: any = new Set(allProduct.map(product => product.product_category));

        allCategory = Array.from(allCategory);

        setAllCategories(allCategory);
    }, [allProduct]);

    async function fetchAllProducts() {
        const allData = await fetchAll();

        setAllProduct(allData);
    }

    const filteredProduct = (filterCategory === "") ? allProduct : allProduct.filter(product => product.product_category === filterCategory);

    console.log(filteredProduct);

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Header Section */}
                <div className="sm:flex sm:items-center sm:justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Product Catalog
                        </h1>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            Explore our latest collection of high-quality products curated just for you.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 flex gap-3">
                        <div className="relative">
                            <select onChange={(e) => setFilterCategory(e.target.value)}
                                name="selectCategory"
                                className="appearance-none w-full rounded-lg bg-white pl-4 pr-10 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 transition-all duration-200 hover:bg-slate-50 hover:ring-slate-400 hover:shadow-md dark:bg-slate-900 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-800 dark:hover:ring-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer"
                            >
                                <option value="">All</option>
                                {allCategories.map((cat, idx) => (
                                    <option key={idx} value={cat} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                                        {cat}
                                    </option>
                                ))}
                            </select>

                            {/* Custom Dropdown Arrow */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProduct.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {filteredProduct.map((product, index) => (
                            <Link key={index} to={`product-detail/${product.id}`}>
                                <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                                    {/* Image Container */}
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                                        <img
                                            src={product.product_image}
                                            alt={product.product_name}
                                            className="h-72 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-1 flex-col p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.product_name}
                                            </h2>
                                            <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                                                ${product.product_price}
                                            </p>
                                        </div>

                                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400 line-clamp-2">
                                            {product.product_description}
                                        </p>

                                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                                            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-400">
                                                In Stock
                                            </span>
                                            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
                                                View Details &rarr;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* Empty State Message */
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                        <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-4 mb-4">
                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">No products found</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                            We couldn't find any products matching your current filters. Try selecting a different category.
                        </p>
                    </div>
                )}
            </div>
        </div >
    );
};