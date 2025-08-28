import React from "react";
import Img from "./../../assets/boki1.jpg";
import Img2 from "./../../assets/boki1.jpg";
import logo from "./../../assets/logo.png";
import { motion } from "framer-motion";

const Fourth: React.FC = () => {
  return (
    <div className="relative">
      <img src={logo} alt="story logo" />

      <div className="absolute top-[-75px] inset-0 flex items-center justify-center">
        <motion.img
          src={Img}
          alt="Boki"
          className="absolute right-4 top-1/2 transform -translate-y-1/2
            w-20 h-20
            sm:w-24 sm:h-24
            md:w-32 md:h-32
            lg:w-40 lg:h-40
            rounded-full object-cover shadow-black/50 shadow-lg"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />

        <motion.img
          src={Img2}
          alt="Boki"
          className="absolute right-24 top-1/2 transform -translate-y-1/2
            w-24 h-24
            sm:w-28 sm:h-28
            md:w-36 md:h-36
            lg:w-44 lg:h-44
            rounded-full object-cover shadow-black/50 shadow-lg"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />

        <button className="absolute bottom-2 px-8 right-[5px] bg-black text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.7)] py-2">
          Kids Zone
        </button>
      </div>
    </div>
  );
};

export default Fourth;
