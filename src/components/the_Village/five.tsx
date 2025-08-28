import React from "react";
import { motion } from "framer-motion";
import img1 from "./../../assets/boki1.jpg";
import img2 from "./../../assets/boki7.jpg";
import img3 from "./../../assets/boki.jpg";

interface CardItem {
  title: string;
  description: string;
  image: string;
}

const Guild: React.FC = () => {
  const cardData: CardItem[] = [
    {
      title: "Children",
      description:
        "Develop emotional intelligence and social skills through engaging stories that resonate with their experiences.",
      image: img1,
    },
    {
      title: "Educators",
      description:
        "Incorporate meaningful social-emotional learning into your curriculum with personalized story experiences.",
      image: img2,
    },
    {
      title: "Parents",
      description:
        "Support your child’s emotional development at home with stories that address their specific feelings and concerns.",
      image: img3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f9ff] py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mt-8 mb-14 text-[#E09900]">
        How It Works
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cardData.map((item, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg shadow-2xl py-12 px-10 overflow-hidden h-full flex flex-col text-white"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 p-8 flex flex-col justify-center h-full">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-sm text-white">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Guild;
