export default function Contact() {
    const mapUrl =
        "https://maps.google.com/?q=17.42041891723927,78.60490037442555";

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Contact Us
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Get in touch with Sree Fire Services for Fire NOC,
                        Fire Safety Audits, Fire Alarm Systems and Fire
                        Protection Solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Details */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-red-600 mb-6">
                            Sree Fire Services
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Mobile</p>
                                <a
                                    href="tel:+919963999977"
                                    className="text-blue-600 hover:underline"
                                >
                                    +91 99639 99977
                                </a>
                            </div>

                            <div>
                                <p className="font-semibold">Alternate Mobile</p>
                                <a
                                    href="tel:+919966885581"
                                    className="text-blue-600 hover:underline"
                                >
                                    +91 99668 85581
                                </a>
                            </div>

                            <div>
                                <p className="font-semibold">Email</p>
                                <a
                                    href="mailto:sreefireservice@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    sreefireservice@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="font-semibold">Address</p>
                                <p className="text-gray-700">
                                    RTC Colony,
                                    <br />
                                    Chengicherla,
                                    <br />
                                    Secunderabad,
                                    <br />
                                    Hyderabad,
                                    <br />
                                    Telangana - 500092,
                                    <br />
                                    India
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                                >
                                    Open Map
                                </a>

                                <a
                                    href="https://wa.me/919963999977"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Clickable Map */}
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative group h-[500px]"
                            aria-label="Open Sree Fire Services location in Google Maps"
                        >
                            <iframe
                                src="https://maps.google.com/maps?q=17.42041891723927,78.60490037442555&z=17&output=embed"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                title="Sree Fire Services Location"
                                className="border-0 w-full h-full pointer-events-none"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
                                <div className="bg-white/95 px-6 py-3 rounded-lg shadow-lg font-semibold text-gray-800">
                                    📍 Click to Open in Google Maps
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}