export default function NotFoundPage() {
    return (
        <main className="grid min-h-screen place-items-center bg-white px-6 py-24 dark:bg-slate-950 sm:py-32 lg:px-8">
            <div className="text-center">

                {/* Animated 404 Header */}
                <p className="text-6xl font-black text-indigo-600 dark:text-indigo-500 animate-bounce">
                    404
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Page not found
                </h1>

                <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
                    Sorry, we couldn’t find the page you’re looking for. <br className="hidden sm:block" />
                    It might have been moved, or it never existed in the first place.
                </p>

                {/* Decorative Graphic Element */}
                <div className="mt-10 flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-indigo-500/20 blur-2xl dark:bg-indigo-500/10"></div>
                        <svg
                            className="relative mx-auto h-32 w-32 text-slate-300 dark:text-slate-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/"
                        className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        Go back home
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                    >
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

            </div>
        </main>
    );
}