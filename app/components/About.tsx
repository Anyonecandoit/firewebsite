export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    About Us
                </h2>

                <p className="text-lg text-center max-w-4xl mx-auto">
                    Sree Fire Services provides professional fire
                    safety consultancy, design, installation,
                    commissioning and NOC processing services
                    for residential, commercial, educational,
                    healthcare and industrial projects.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <div className="bg-blue-600 text-white p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">
                            Our Mission
                        </h3>

                        <p>
                            To provide best fire and safety equipment
                            and excellent customer service.
                        </p>
                    </div>

                    <div className="bg-red-600 text-white p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">
                            Our Vision
                        </h3>

                        <p>
                            To make this world a safer place.
                        </p>
                    </div>

                    <div className="bg-orange-500 text-white p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4">
                            Our Values
                        </h3>

                        <ul>
                            <li>Commitment</li>
                            <li>Customer Satisfaction</li>
                            <li>Knowledge</li>
                            <li>Operational Efficiency</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}