import { Search, Image, Menu, User } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200/50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

                {/* Logo Section */}
                <div className="flex items-center gap-2 shrink-0 cursor-pointer">
                    <div className="bg-linear-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg">
                        <Image size={24} className="text-white" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 hidden sm:block">
                        WallScape
                    </h1>
                </div>

                {/* Search Bar - Center */}
                <div className="flex-1 max-w-2xl relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search 4K wallpapers, artists, or categories..."
                        className="w-full bg-gray-100/80 border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 rounded-full py-2 pl-10 pr-4 transition-all outline-none text-sm"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Explore</a>
                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Collections</a>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md shadow-indigo-200">
                        Upload
                    </button>
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden border border-gray-300">
                        <User size={20} className="text-gray-500" />
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Menu size={24} />
                </button>

            </div>
        </header>
    );
}