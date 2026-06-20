const services = [
    "Designing Fire Safety Systems",
    "Fire Alarm Systems",
    "Installation of Fire Pumps",
    "Fire Escape Stair Design",
    "Fire Rated Emergency Doors",
    "Fire NOC Processing",
    "Fire Audit & Risk Assessment",
];

export default function Services() {
    return (
        <section
            id="services"
            className="bg-gray-100 py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Services We Offer
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service}
                            className="bg-white p-6 rounded-xl shadow"
                        >
                            <h3 className="font-semibold text-xl">
                                {service}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}