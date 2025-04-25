import React from "react";

export function MainFeatures(){
  const features = [
    {
      icon: "⏱️",
      bg: "bg-yellow-100",
      text: "Track your mood in just seconds",
    },
    {
      icon: "🎤",
      bg: "bg-red-100",
      text: "Add voice memos on the go",
    },
    {
      icon: "🏆",
      bg: "bg-cyan-100",
      text: "Set achievable routines easily",
    },
    {
      icon: "🎬",
      bg: "bg-green-100",
      text: "Add video memos on the go",
    },
    {
      icon: "🧘‍♂️",
      bg: "bg-green-100",
      text: "Learn breathing techniques to combat stress",
    },
    {
      icon: "🙌",
      bg: "bg-purple-100",
      text: "Get support based on your data",
    },
  ];

  return (
    <section className="bg-cream-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900">
          Main{" "}
          <span className="inline-block bg-green-200 text-green-700 px-6 py-3 rounded-full text-5xl">
            Features
          </span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-2xl p-5 space-x-4 shadow-sm"
          >
            <div
              className={`size-24 flex items-center justify-center text-4xl rounded-full ${item.bg}`}
            >
              {item.icon}
            </div>
            <p className="text-gray-800 text-xl font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainFeatures;
