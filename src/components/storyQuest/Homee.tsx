import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "./../../assets/new6.jpg";
import img2 from "./../../assets/floating-mask.png";
import img3 from "./../../assets/hero-slide-1.jpg";
import img4 from "./../../assets/new4.jpg";

const images: string[] = [img1, img2, img3, img4];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Image Carousel Section */}
      <div
        className="flex-1 bg-gray-500 relative flex items-center justify-center overflow-hidden"
        style={{ height: "50%" }}
      >
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition"
          aria-label="Previous Image"
        >
          &#8592;
        </button>

        {/* AnimatePresence to handle exit/enter transitions */}
        <div className="w-full h-full max-h-[350px] sm:max-h-[350px] md:max-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition"
          aria-label="Next Image"
        >
          &#8594;
        </button>
      </div>

      {/* Content Section */}
      <div
        className="flex-1 bg-pink-100 flex flex-col items-center justify-center px-2 sm:px-6 py-8"
        style={{ height: "50%" }}
      >
        <motion.div
          className="w-full max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empower Children Through Personalized Stories
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl font-semibold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            BokoboBot StoryQuest transforms children’s thoughts and feelings
            into meaningful tales with valuable life lessons, helping them
            navigate emotions and develop social skills.
          </motion.p>

          <motion.button
            className="bg-[#e09900] text-base sm:text-lg px-4 sm:px-8 sm:py-2 rounded-full border-2 border-white hover:border-[#e09900] transition font-semibold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <button className=" text-white text-base sm:text-lg sm:px-10 sm:py-4">
              <span>&gt;&gt;</span> Try It Now
            </button>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
