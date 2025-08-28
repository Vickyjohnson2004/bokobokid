import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/story1.jpg";
import img2 from "../../assets/story2.jpg";
import img3 from "../../assets/story3.jpg";

interface CardItem {
  image: string;
  title: string;
  description: string;
  btnText: string;
}

const Third: React.FC = () => {
  const cardData: CardItem[] = [
    {
      image: img1,
      title: "Mandla's Ocean Lesson",
      description: `“Jambo!” greeted Mandla to an African Grey Parrot on the Zanzibar Coast. Mandla had come to the beach with just one goal. “I will learn about the ocean to get rich quickly!” he said. The parrot watched as Mandla ignored the beautiful water. He searched only for pearls and shells to sell. Day after day, Mandla found nothing valuable. One evening, an old fisherman shared his suya with Mandla. “What are you seeking?” he asked. “Riches from the sea,” Mandla replied. The fisherman smiled. “First learn to love the sea itself. Knowledge comes before reward.” Mandla began to study the tides and fish. Soon, he became the best fisherman on the coast. His nets were always full. Mandla learned that true wealth comes after understanding and patience, not from chasing money alone.

A young boy sitting with an old fisherman sharing a meal on the beach at sunset, with an African Grey Parrot perched nearby.`,
      btnText: "Read the Story",
    },
    {
      image: img2,
      title: "Makena's Art Gift",
      description: `Makena lived on the Serengeti Plains. Every morning, she woke up and said ‘Sannu’ to the rising sun. She loved to draw pictures in the dirt with sticks. One day, a large elephant watched Makena draw. ‘Your pictures are beautiful,’ said the elephant. ‘But they disappear when it rains.’ Makena felt sad. The next day, the elephant brought colored clay. ‘Try this instead,’ it said. Makena used the clay to make colorful drawings on tree bark. Soon, everyone in her village wanted her art. She even drew pictures on bowls they used for Jollof Rice. Makena’s talent brought joy to many people. ‘When you share what you love,’ said the elephant, ‘your gift grows bigger and stronger.’

A young girl named Makena drawing colorful pictures on tree bark while a friendly elephant watches over her on the golden Serengeti Plains.`,
      btnText: "Read the Story",
    },
    {
      image: img3,
      title: "Amara's Journey",
      description: `Amara lived in a small village on the Zanzibar Coast. Every morning, she walked along the white sandy beach. ‘Jambo!’ she greeted the fishermen as they returned with their catch. One day, Amara found a strange bottle under a tall Baobab tree. Inside was a map of the world! That night, while eating fufu with her family, Amara announced, ‘I will travel the world someday.’ Her grandmother smiled. ‘The world is big, little one.’ Amara looked at the map every day. She planted African Daisies in the shape of different countries. Years passed. Amara worked hard and saved money. Finally, she packed her bags and set off. She visited mountains, deserts, and cities. But when her journey ended, Amara returned to her beach. ‘Jambo, beautiful home,’ she whispered. She realized that seeing the world had made her love her home even more.

A young girl standing on a beautiful Zanzibar beach, holding a map and looking out at the ocean with African Daisies growing nearby.`,
      btnText: "Read the Story",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f9ff] py-10 px-4 sm:px-8">
      {/* Animated Heading */}
      <motion.h1
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-center mt-8 mb-14 text-[#E09900]"
      >
        Featured Stories
      </motion.h1>

      {/* Cards */}
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
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.description}
                </p>
                <button className="mt-4 bg-[#E09900] text-white py-2 px-4 rounded hover:bg-[#d18b00] transition duration-300">
                  {item.btnText}
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <a href="#" className="flex justify-center">
          <button className="bg-[#e09900] text-white text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-4 rounded-md border-2 border-white hover:border-[#e09900] transition">
            <span>&gt;&gt;</span> Try It Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Third;
