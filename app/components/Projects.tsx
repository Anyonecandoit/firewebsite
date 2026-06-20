export default function Projects() {
    const data = [
        ["Schools",245],
        ["Colleges",82],
        ["Hospitals",67],
        ["Apartments",32],
        ["Commercial",28],
        ["Engineering Colleges",28]
    ];

    return (
        <section
            id="projects"
            className="bg-gray-100 py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Projects Completed
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {data.map(([title,count]) => (
                        <div
                            key={title}
                            className="bg-white p-8 rounded-xl text-center shadow"
                        >
                            <h3 className="text-5xl font-bold text-red-700">
                                {count}
                            </h3>

                            <p className="mt-4 text-xl">
                                {title}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
