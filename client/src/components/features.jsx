export default function Features() {
    const features = [
      {
        title: "AI powered",
        description: [
          "Check Your Mental State",
          "Get Immediate Guidance",
          "Talk to Simba",
        ],
        bgColor: "bg-yellow-200",
        photosrc: "/src/assets/Wink.png"
      },
      {
        title: "Effortless",
        description: [
          "Fast Check-in",
          "Fluent Voice Chat",
          "Intuitive UX",
        ],
        bgColor: "bg-green-200",
        photosrc: "/src/assets/Smile.png"
      },
      {
        title: "Radically private",
        description: [
          "Quick Registration",
          "No Personal Data",
          "No Ads, Only AI Therapy",
        ],
        bgColor: "bg-blue-200",
        photosrc: "/src/assets/Hey.png"
      },
    ];
  
    return (
      <div className="p-10 my-40">
        <h2 className="text-5xl font-semibold text-black flex justify-center mb-20"><span className="mt-2">Our</span> <span className="inline-block bg-pink-200 text-pink-700 px-5 py-3 rounded-full text-5xl ml-2">Features</span></h2>
        <div className="flex justify-center gap-50">
          {features.map((feature, index) => (
            <div key={index} className="text-center max-w-xs">
              <div
                className={`size-50 mx-auto flex items-center justify-center rounded-full ${feature.bgColor}`}
              >
                <span className="text-4xl"></span>
                <img src={feature.photosrc} alt="" className="w-55 mb-1"/>
              </div>
              <h3 className="text-3xl font-medium mt-4">{feature.title}</h3>
              <ul className="mt-2 text-xl text-dark">
                {feature.description.map((line, i) => (
                  <li key={i} className={i === 1 ? "" : ""}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
