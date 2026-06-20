export default function Projects() {
    const totalProjects = 751;

    const today = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const data = [
        ["Schools", 319],
        ["Colleges", 101],
        ["Hospitals", 84],
        ["Residential Building", 41],
        ["Commercial Buildings", 51],
        ["Engineering Colleges", 34],
        ["Conventional Hall", 37],
        ["Industry & Factory", 32],
        ["Cinema Halls", 5],
        ["Others", 47],
    ];

    return (
        <section id="projects" className="bg-gray-100 py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Projects Completed
                    </h2>

                    <div className="mt-4 inline-block bg-red-700 text-white px-8 py-3 rounded-full text-3xl font-bold shadow-lg">
                        {totalProjects}+
                    </div>

                    <p className="mt-4 text-gray-600 text-lg">
                        Updated as of {today}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map(([title, count]) => (
                        <div
                            key={String(title)}
                            className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-5xl font-bold text-red-700">
                                {count}
                            </h3>

                            <p className="mt-4 text-xl font-semibold text-gray-900">
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}