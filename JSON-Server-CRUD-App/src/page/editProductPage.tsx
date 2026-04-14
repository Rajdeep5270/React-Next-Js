import { useEffect, useState } from "react";
import type { productTypeWithId } from "../utils/type";
import { useNavigate, useParams } from "react-router";
import { fetchSingle, productCategory, updateSingle } from "../services/productService";

export default function editProductPage() {

    const [productData, setProductData] = useState<productTypeWithId>({
        id: "",
        product_name: "",
        product_category: "",
        product_price: 0,
        product_stock: 0,
        product_image: "For Error Handling",
        product_description: ""
    });

    const [error, setError] = useState<any>({});

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchSingleDataToUpdate();
        }
    }, [id]);

    async function fetchSingleDataToUpdate() {
        const singleData = await fetchSingle(id || "");

        setProductData(singleData);
    }

    function onHandleChange(e: any) {
        const { name, value } = e.target;

        setProductData(old => ({ ...old, [name]: (name === 'product_price' || name === 'product_stock') ? Number(value) : value }));
    }

    async function onHandleSubmit(e: any) {
        e.preventDefault();

        if (!validation()) return;

        const res = await updateSingle(productData);

        if (res) {
            navigate("/view-product");
        }
    }

    function validation() {
        const error: any = {};

        if (!productData.product_name.trim()) error.product_name = "Product name is required";

        if (!productData.product_category.trim()) error.product_category = "Product category is required";

        if (!productData.product_price) error.product_price = "Product price is required";
        if (productData.product_price < 0) error.product_price = "Invalid price";

        if (!productData.product_stock) error.product_stock = "Product stock is required";
        if (productData.product_stock < 0) error.product_stock = "Invalid stock";

        if (!productData.product_image.trim()) error.product_image = "Product image is required";

        if (!productData.product_description.trim()) error.product_description = "Product description is required";

        setError(error);

        return Object.keys(error).length === 0;
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">

                {/* Header Section */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Edit Product
                    </h1>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        Edit the details below to update a item in your inventory.
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                    <form onSubmit={onHandleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">

                        {/* Product Name */}
                        <div className="sm:col-span-2">
                            <label htmlFor="product_name" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                Product Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="product_name"
                                    value={productData.product_name}
                                    onChange={onHandleChange}
                                    name="product_name"
                                    placeholder="e.g. Premium Wireless Headphones"
                                    className={`block w-full rounded-lg border-0 ${(error.product_name) ? ' border-2 border-red-500' : 'border-slate-50'} py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm sm:leading-6`}
                                />
                            </div>
                            {error.product_name && <p className="text-red-500 text-sm">{error.product_name}</p>}
                        </div>

                        {/* Product Category */}
                        <div className="sm:col-span-1">
                            <label htmlFor="product_category" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                Category
                            </label>
                            <div className="mt-2">
                                <select
                                    id="product_category"
                                    name="product_category"
                                    value={productData.product_category}
                                    onChange={onHandleChange}
                                    className={`block w-full rounded-lg border-0 ${(error.product_category) ? "border-2 border-red-500" : "border-slate-50"} py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm sm:leading-6`}
                                >
                                    <option value="">Select a category</option>
                                    {productCategory.map((product, index) => (
                                        <option key={index} value={product}>{product}</option>
                                    ))}
                                </select>
                            </div>
                            {error.product_category && <p className="text-red-500 text-sm">{error.product_category}</p>}
                        </div>

                        {/* Product Price */}
                        <div className="sm:col-span-1">
                            <label htmlFor="product_price" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                Price (USD)
                            </label>
                            <div className="mt-2 relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-slate-500 sm:text-sm">$</span>
                                </div>
                                <input
                                    type="number"
                                    id="product_price"
                                    onChange={onHandleChange}
                                    value={productData.product_price}
                                    name="product_price"
                                    placeholder="0.00"
                                    className={`block w-full rounded-lg border-0 ${error.product_price ? "border-2 border-red-500" : "border-slate-50"} py-2.5 pl-7 pr-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm sm:leading-6`}
                                />
                            </div>
                            {error.product_price && <p className="text-red-500 text-sm">{error.product_price}</p>}
                        </div>

                        {/* Product Stock */}
                        <div className="sm:col-span-1">
                            <label htmlFor="product_stock" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                Stock Quantity
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    id="product_stock"
                                    onChange={onHandleChange}
                                    value={productData.product_stock}
                                    name="product_stock"
                                    placeholder="0"
                                    className={`block w-full rounded-lg border-0 ${error.product_stock ? "border-2 border-red-500" : "border-slate-50"} py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm sm:leading-6`}
                                />
                            </div>
                            {error.product_stock && <p className="text-red-500 text-sm">{error.product_stock}</p>}
                        </div>

                        {/* Product Image URL */}
                        <div className="sm:col-span-1">
                            <label htmlFor="product_image" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                Image URL
                            </label>
                            <div className="mt-2">
                                <img src={productData.product_image} width={100} alt="" />
                                <input
                                    type="text"
                                    id="product_image"
                                    onChange={onHandleChange}
                                    value={productData.product_image}
                                    name="product_image"
                                    placeholder="https://images.com/..."
                                    className={`block w-full rounded-lg border-0 ${error.product_image ? "border-2 border-red-500" : "border-slate-50"} py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm sm:leading-6`}
                                />
                            </div>
                            {error.product_image && <p className="text-red-500 text-sm">{error.product_image}</p>}
                        </div>

                        {/* Product Description */}
                        <div className="sm:col-span-2">
                            <label htmlFor="product_description" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="product_description"
                                    name="product_description"
                                    value={productData.product_description}
                                    onChange={onHandleChange}
                                    rows={4}
                                    className={`block w-full rounded-lg border-0 ${error.product_description ? "border-2 border-red-500" : "border-slate-50"} py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm sm:leading-6`}
                                    placeholder="Tell users more about this product..."
                                />
                            </div>
                            {error.product_description && <p className="text-red-500 text-sm">{error.product_description}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="sm:col-span-2 mt-4">
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-yellow-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-yellow-500 focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all active:scale-[0.98]"
                            >
                                Upload Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}