import { useEffect, useState } from "react";
import { Download, Heart, Eye, Search } from "lucide-react";

interface wallPaperType {
    id: number;
    tags: string;
    webformatURL: string;
    largeImageURL: string;
    views: number;
    likes: number;
}

export default function HomePage() {
    const [wallPaper, setWallPaper] = useState<wallPaperType[]>([]);

    const [liveSearch, setLiveSearch] = useState<string>("");

    const apiKey = "55644129-77dbe8dd2ad976ad7b3a02f40";
    const api = `https://pixabay.com/api/?key=${apiKey}&q=${liveSearch}`;

    const fetchAllWallPapers = async () => {
        const res = await fetch(api);
        const data = await res.json();
        setWallPaper(data.hits);
    };

    useEffect(() => {
        fetchAllWallPapers();
    }, [liveSearch]);

    return (
        <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-indigo-100">
            {/* Background Decor */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-linear-to-b from-indigo-50/50 to-transparent -z-10" />

            <main className="pt-32 pb-20 px-6 max-w-400 mx-auto">

                {/* --- Hero Section --- */}
                <section className="mb-20 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                        </span>
                        Live Wallpaper Feed
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        Elevate Your <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">Digital Canvas.</span>
                    </h2>

                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Discover thousands of hand-picked, high-resolution wallpapers for your creative projects and devices.
                    </p>

                    {/* Premium Search Bar */}
                    <div className="relative max-w-2xl mx-auto mt-10 group">
                        <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
                        <div className="relative flex items-center bg-white rounded-2xl shadow-sm border border-slate-200 p-2">
                            <Search className="ml-4 text-slate-400" size={20} />
                            <input
                                onChange={(e: any) => setLiveSearch(e.target.value)}
                                type="text"
                                placeholder="Search for 'Minimalist Mountains' or 'Neon Tokyo'..."
                                className="w-full p-3 outline-none text-slate-700 bg-transparent"
                            />
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-600 transition-all">
                                Search
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- Wallpaper Grid --- */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                    {wallPaper.map((img) => (
                        <div
                            key={img.id}
                            className="break-inside-avoid group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)] hover:-translate-y-2"
                        >
                            {/* Image Component */}
                            <img
                                src={img.webformatURL}
                                alt={img.tags}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Intelligent Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {img.tags.split(',').slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[10px] font-bold bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-md uppercase tracking-widest">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-1.5 text-white/90">
                                            <Heart size={16} className="fill-white/20" />
                                            <span className="text-sm font-medium">{img.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-white/90">
                                            <Eye size={16} />
                                            <span className="text-sm font-medium">{img.views}</span>
                                        </div>
                                    </div>

                                    <a
                                        target="_blank"
                                        download
                                        className="bg-white text-slate-900 p-3 rounded-xl hover:bg-indigo-500 hover:text-white transition-colors shadow-xl"
                                    >
                                        <Download size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}