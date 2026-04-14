import { Link } from "react-router";

export default function Header() {
    return <>
        <header className="antialiased">
            <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                    <div className="flex items-center gap-2 transition-opacity hover:opacity-90">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 shadow-md">
                            <span className="text-lg font-bold text-white italic">G</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Brand</span>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <li><Link to="/" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Product Catalog</Link></li>
                            <li><Link to="add-product" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Add Product</Link></li>
                            <li><Link to="view-product" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">View Product</Link></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link
                            to="add-to-cart"
                            className="group relative flex items-center p-2 text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                            aria-label="View Cart"
                        >
                            {/* Shopping Cart Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 transition-transform group-hover:scale-110"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />

                            </svg>

                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    </>
}