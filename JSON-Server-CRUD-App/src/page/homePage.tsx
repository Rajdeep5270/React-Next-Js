import { Link } from "react-router";

export default function homePage() {
    return (
        <>
            <main className="relative min-h-[90vh] overflow-hidden bg-white dark:bg-slate-900">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">

                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="#" className="inline-flex space-x-6">
                                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                    What's new
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-600 dark:text-slate-400">
                                    <span>Just shipped v1.0</span>
                                    <svg className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </a>
                        </div>

                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                            Design your future <span className="bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">effortlessly.</span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Welcome to your new home page. Build beautiful, responsive interfaces faster than ever with our pre-styled components and intuitive design system.
                        </p>

                        <div className="mt-10 flex items-center gap-x-6">
                            <Link to={'add-product'}>
                                <button className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-all hover:-translate-y-0.5">
                                    Get Started Free
                                </button></Link>
                            <button className="text-sm font-semibold leading-6 text-slate-900 dark:text-white group">
                                Live demo <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>

                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div className="rounded-2xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <div className="w-120 h-80 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl flex items-center justify-center">
                                    <span className="text-slate-400 font-mono italic">// Your Product Screenshot Here</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}