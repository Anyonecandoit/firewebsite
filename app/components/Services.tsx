const services = [
    "🧯 Fire Safety Consultancy",
    "📋 Fire Drawings & Fire NOC Processing",
    "🔧 Installation, Testing & Commissioning of Fire Safety Equipment",
    "🚒 Fire Hydrant Systems & Pump Room Systems",
    "🚨 Fire Alarm Systems & Public Address (PA) Systems",
    "📑 Fire Audit & Fire AMC",
    "🏆 Fire NOC Approval from Fire Department",
];
export default function Services() {
    return (
        <section
            id="services"
            className="bg-gray-100 py-24"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                    Services We Offer
                </h2>

                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Comprehensive Fire Safety Consultancy, Fire NOC Processing,
                    Installation, Testing, Commissioning and Maintenance Services.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-red-600"
                        >
                            <div className="flex items-start gap-3">


                                <h3 className="text-lg font-semibold text-gray-900 leading-7">
                                    {service}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}