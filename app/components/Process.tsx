export default function Process() {
    const stages = [
        {
            title: "Stage 1",
            text: "Fire Drawings Preparation & Provisional Fire NOC"
        },
        {
            title: "Stage 2",
            text: "Fire Safety Compliance Estimation & Execution"
        },
        {
            title: "Stage 3",
            text: "Fabrication, Installation & Commissioning"
        },
        {
            title: "Stage 4",
            text: "Final Fire Drawings & Occupancy NOC"
        }
    ];

    return (
        <section id="process" className="py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    How We Work
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {stages.map((stage) => (
                        <div
                            key={stage.title}
                            className="bg-red-600 text-white p-6 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold">
                                {stage.title}
                            </h3>

                            <p className="mt-4">
                                {stage.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
