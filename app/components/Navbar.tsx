import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

                {/* Logo + Company Name */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/logo.jpeg"
                        alt="Sree Fire Services Logo"
                        width={60}
                        height={60}
                        className="object-contain"
                        priority
                    />

                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl text-red-700 leading-tight">
                            SREE FIRE SERVICES
                        </h1>

                        <span className="text-sm text-black font-medium tracking-wide">
                            Fire Safety Consultants
                        </span>
                    </div>
                </div>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <a
                        href="#about"
                        className="hover:text-red-700 transition-colors"
                    >
                        About
                    </a>

                    <a
                        href="#services"
                        className="hover:text-red-700 transition-colors"
                    >
                        Services
                    </a>

                    <a
                        href="#process"
                        className="hover:text-red-700 transition-colors"
                    >
                        Process
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-red-700 transition-colors"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-red-700 transition-colors"
                    >
                        Contact
                    </a>
                </div>

            </div>
        </nav>
    );
}