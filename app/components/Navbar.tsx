export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <h1 className="font-bold text-2xl text-red-700">
                    SREE FIRE SERVICES
                </h1>

                <div className="hidden md:flex gap-8">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#process">Process</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}