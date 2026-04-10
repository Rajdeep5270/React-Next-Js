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
                            <li><Link to="/" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link></li>
                            <li><Link to="add-product" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Add Product</Link></li>
                            <li><Link to="view-product" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">View Product</Link></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a href="#" className="hidden px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 sm:block">
                            Log in
                        </a>
                        <a href="#" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-indigo-500/20 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
                            Get Started
                        </a>
                    </div>

                </div>
            </nav>
        </header>
    </>
}