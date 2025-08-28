import React from "react";
import img1 from "./../../assets/section3_2.png";
import img2 from "./../../assets/section3.png";
import videoSrc from "./../../assets/video1.mp4";

const ThirdSection: React.FC = () => {
  return (
    <div className="py-16">
      {/* Top Divider */}
      <div className="flex justify-center">
        <div className="border-t-2 w-[90%] md:w-[70%] border-gray-500"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 gap-8">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <img
            src={img1}
            alt="image one"
            className="w-full max-w-xs md:max-w-sm rounded shadow-md object-cover h-auto md:h-[400px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-xl flex flex-col justify-center text-center md:text-left px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            See our growing catalog of books such as…
          </h1>
          <p className="mb-4 text-base md:text-lg">
            <strong>“The Lady of the Sea”</strong> is an inspiring, epic
            adventure. Your child will dive into a world of magic and mystery.
          </p>
          <p className="text-base md:text-lg">
            <strong>“The Legend of the First Rainbow.”</strong> Where folklore
            meets science! Ignite your child’s curiosity with this captivating
            tale — a timeless legend passed down through generations.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <img
            src={img2}
            alt="image two"
            className="w-full max-w-xs md:max-w-sm rounded shadow-md object-cover h-auto md:h-[400px]"
          />
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="flex py-10 justify-center">
        <div className="border-t-2 w-[90%] md:w-[70%] border-gray-500"></div>
      </div>
      <div className="flex justify-center  shadow-black rounded-md mb-8 mt-14">
        <div className="w-[60%] h-[600px]">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="-rounded-md shadow-lg  shadow-black w-full h-full"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
