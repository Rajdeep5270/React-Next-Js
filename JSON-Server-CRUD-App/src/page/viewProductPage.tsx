import { useEffect, useState } from "react";
import type { productTypeWithId } from "../utils/type";
import { deleteProduct, fetchAll } from "../services/productService";
import { useNavigate } from "react-router";

export default function viewProductPage() {

    const [allProductsData, setAllProductsData] = useState<productTypeWithId[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemPerPage, setItemPerPage] = useState<number>(10);

    const totalItems = allProductsData.length;
    const totalPages = Math.ceil(totalItems / itemPerPage);

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    const currentProducts = allProductsData.slice(startIndex, endIndex);

    function getPagination(currentPage: number, totalPages: number) {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 2) {
            return [1, 2, "...", totalPages];
        }

        if (currentPage >= totalPages - 1) {
            return [1, "...", totalPages - 1, totalPages];
        }

        return [1, "...", currentPage, "...", totalPages];
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])

    const navigate = useNavigate();

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
                    <div className={`${currentProducts.length > 10 ? "overflow-y-auto max-h-200" : ""}`}>
                        <table className="w-full text-left border-collapse">
                            {/* Table Header */}
                            <thead className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                                <tr>
                                    {["No.", "Product", "Category", "Price", "Stock", "Description", "Actions"].map((header) => (
                                        <th key={header} className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                {currentProducts.map((p, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                                            {startIndex + idx + 1}
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
                                            <button onClick={() => navigate(`/edit-product/${p.id}`)} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                                                Edit
                                            </button>
                                            <button onClick={() => deleteProduct(p.id)} className="text-rose-600 hover:text-rose-900 dark:text-rose-400 dark:hover:text-rose-300">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                            {/* Table Footer with Pagination */}
                            <tfoot className="sticky bottom-0 z-20  bg-slate-50/50 dark:bg-slate-800/20">
                                <tr>
                                    <td colSpan={7} className="px-6 py-4">
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                                            {/* Items Per Page */}
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Show</span>
                                                <select
                                                    value={itemPerPage}
                                                    onChange={(e) => {
                                                        setItemPerPage(Number(e.target.value));
                                                        setCurrentPage(1);
                                                    }}
                                                    className="h-9 w-20 rounded-lg border border-slate-200 bg-white px-2 text-sm font-medium text-slate-700 outline-none transition-all hover:border-slate-300 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700"
                                                >
                                                    {[10, 20, 50, 100].map(val => (
                                                        <option key={val} value={val}>{val}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Navigation Controls */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                    disabled={currentPage === 1}
                                                    className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
                                                >
                                                    Previous
                                                </button>

                                                <div className="flex items-center gap-1">
                                                    {getPagination(currentPage, totalPages).map((page, idx) => {

                                                        if (page === "...") {
                                                            return (
                                                                <span key={idx} className="px-2 text-slate-400">
                                                                    ...
                                                                </span>
                                                            );
                                                        }

                                                        const isActive = currentPage === page;

                                                        return (
                                                            <button
                                                                key={idx}
                                                                onClick={() => setCurrentPage(page as number)}
                                                                className={`h-9 min-w-[36px] px-2 flex items-center justify-center rounded-lg text-sm font-semibold transition-all ${isActive
                                                                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/40"
                                                                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                                                                    }`}
                                                            >
                                                                {page}
                                                            </button>
                                                        );
                                                    })}
                                                </div>

                                                <button
                                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                    disabled={currentPage === totalPages}
                                                    className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
                                                >
                                                    Next
                                                </button>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>


            </div>
        </div >
    );
}