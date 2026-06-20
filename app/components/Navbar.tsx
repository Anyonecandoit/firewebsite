import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
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

                    <div>
                        <h1 className="font-bold text-2xl text-red-700 leading-tight">
                            SREE FIRE SERVICES
                        </h1>

                        <p className="text-sm text-black font-medium tracking-wide">
                            Fire Safety Consultants
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8 text-black font-semibold">
                    <a
                        href="#about"
                        className="text-black hover:text-red-700 transition duration-300"
                    >
                        About
                    </a>

                    <a
                        href="#services"
                        className="text-black hover:text-red-700 transition duration-300"
                    >
                        Services
                    </a>

                    <a
                        href="#process"
                        className="text-black hover:text-red-700 transition duration-300"
                    >
                        Process
                    </a>

                    <a
                        href="#projects"
                        className="text-black hover:text-red-700 transition duration-300"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="text-black hover:text-red-700 transition duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}