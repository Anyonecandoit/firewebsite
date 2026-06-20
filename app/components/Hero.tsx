export default function Hero() {
    return (
        <section className="h-screen bg-gradient-to-r from-red-700 to-orange-500 flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-6xl font-bold mb-6">
                    Fire Safety Consultants
                </h1>

                <p className="text-xl max-w-3xl">
                    Complete Fire Safety Solutions, NOC Processing,
                    Fire Alarm Systems, Fire Pumps, Fire Audits
                    and Emergency Safety Compliance.
                </p>

                <div className="mt-8 flex gap-4">
                    <a
                        href="#contact"
                        className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold"
                    >
                        Contact Us
                    </a>

                    <a
                        href="tel:+919963999977"
                        className="border border-white px-6 py-3 rounded-lg"
                    >
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
}