import React from "react";

import img2 from "./../../assets/new4.jpg";
import img3 from "./../../assets/new2.jpeg";
import img4 from "./../../assets/new3.jpg";

type CardItem = {
  image: string;
  title: string;
  description: string;
};

const cardData: CardItem[] = [
  {
    image: img4,
    title: "Share Thoughts",
    description:
      "Children express what they’re feeling or thinking in just 1-2 sentences.",
  },
  {
    image: img2,
    title: "Generate Story",
    description:
      "BokoboBot creates a personalized African story addressing their specific emotions.",
  },
  {
    image: img3,
    title: "Learn & Reflect",
    description:
      "Each story contains valuable lessons that help children process their feelings constructively.",
  },
];

function Second(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#f0f9ff] py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mt-8 mb-14 text-[#E09900]">
        How It Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col"
          >
            <div className="flex-shrink-0 h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow p-4 flex flex-col justify-between">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Second;
