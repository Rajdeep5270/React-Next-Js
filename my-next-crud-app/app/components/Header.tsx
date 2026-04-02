import Link from "next/link";

export default function Header() {
    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo/Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <h4 className="text-xl font-bold tracking-tight text-gray-900">
                            Bikes<span className="text-blue-600">.</span>
                        </h4>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-8 items-center">
                        <li>
                            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                Contact
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}