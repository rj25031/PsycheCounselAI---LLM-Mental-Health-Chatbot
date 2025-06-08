import React from "react";

  const features = [
    {
      id: 1,
      title: "AI powered tracking",
      description:
        "Understand your emotional health in real time and receive suggestions to improve.",
      bg: "bg-pink-100",
      image: "/mock1.png", // Replace with actual image paths
    },
    {
      id: 2,
      title: "Real time conversations",
      description:
        "Interact with your AI therapist of choice for real time support based on your input",
      bg: "bg-yellow-100",
      image: "/mock2.png",
    },
    {
      id: 3,
      title: "Guided selfcare sessions",
      description:
        "Learn to focus on recovery, find calm and become your healthiest self",
      bg: "bg-indigo-100",
      image: "/MOCK3.png",
    },
  ];

  export function Working(){
    return (
            <section className="pt-10 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-900">
                    How does Simba{" "}
                    <span className="inline-block bg-blue-200 text-blue-700 px-5 py-3 rounded-full text-5xl ml-1">
                        Work?
                    </span>
                    </h2>
                </div>
            
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {features.map((feature, index) => (
                    <div
                        key={feature.id}
                        className={`rounded-3xl p-6 ${feature.bg} flex flex-col items-center text-center shadow-md`}
                    >
                        <div className="text-gray-400 text-3xl font-semibold mb-2">
                        0{index + 1}.
                        </div>
                        <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                        {feature.title}
                        </h3>
                        <div className="my-6">
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover"
                        />
                        </div>
                        <p className="text-gray-600 text-lg">{feature.description}</p>
                    </div>
                    ))}
                </div>
            </section>
        );}