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
                <h2 className="text-4xl font-bold text-center mb-2">
                    Projects Completed -{" "}
                    <span className="text-red-700">{totalProjects}</span>
                </h2>

                {/* Date */}
                <p className="text-center text-gray-600 mb-12">
                    Updated as of {today}
                </p>

                {/* Project Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {data.map(([title, count]) => (
                        <div
                            key={title}
                            className="bg-white p-8 rounded-xl text-center shadow hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-5xl font-bold text-red-700">
                                {count}
                            </h3>

                            <p className="mt-4 text-xl text-gray-800">
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}