import React from "react";

const testimonials = [
  {
    username: "Sharma98",
    title: "Talking with Simba is just like talking to your close friend",
    content:
      "I had no idea I need such an app! Love the integration with Apple Watch - I get notifications and I see that it tracks more health data when I use the app (those breathing exercises are AWESOME!!!).",
  },
  {
    username: "Rahul12",
    title: "Very effective that puts privacy first",
    content:
      "This is one of those rare therapies that actually puts your privacy first. I did not have to create a login or account of any kind. Stress and anxiety are such personal and private conditions that have historically prevented me from using other apps. Earkick has handled it really well. Overall I am impressed with the app so far. It reminds me to log things without being too intrusive and the exercises are quick enough to feel just right to calm me down. It has got me doing things in a regular basis which is the key to managing stress.",
  },
  {
    username: "Gaurav73",
    title: "Great Therapy for anxiety",
    content:
      "As a therapist that works with anxiety daily I cannot recommend this app enough. Plus, they have wonderful customer service and are constantly improving this app.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-[#FFFDF6] px-6 py-16 lg:px-20">
      <h2 className="text-5xl font-bold text-center mb-12">
        What our <span className="bg-green-200 text-green-700 px-6 py-3 rounded-full">Users</span> are saying
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#F5F3ED] p-6 rounded-2xl shadow-sm flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="size-20 bg-yellow-200 rounded-full flex items-center justify-center">
                <img src="/Men.svg" alt="" srcset="" className="size-12" />
              </div>
              <p className="font-medium text-xl text-[#1D1D1F]">{testimonial.username}</p>
              <div className="ml-auto text-3xl text-yellow-400 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-xl text-[#1D1D1F]">
              {testimonial.title}
            </h3>
            <p className="text-gray-700 text-md leading-relaxed">
              {testimonial.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
