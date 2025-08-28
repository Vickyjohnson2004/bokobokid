import React from "react";
import img5 from "./../../assets/bookBack.jpg";
import videoSrc from "./../../assets/video2.mp4";

const SectionTwo: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center mb-8 mt-14">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-[60%] h-[600px] rounded-md shadow-lg shadow-black"
        ></video>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-20 mt-8 px-4 py-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={img5}
            alt="The Winds of Napata"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">
            “The Winds of Napata” and Its Modern Relevance
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. Kheftusa Akhiba Ankh’s <em>The Winds of Napata</em> is a
            poignant tale that weaves African history, culture, and identity
            into an immersive narrative designed to inspire and empower. Through
            the lens of a young boy, Mark, and his journey of self-discovery
            between modern-day Manchester and his ancestral African roots, the
            book merges dreams, folklore, and historical insights to illuminate
            the legacy of ancient African civilizations. Set against the
            backdrop of historical kingdoms like Napata and Mali, the story
            rekindles pride in African heritage while addressing the dislocation
            caused by colonialism and modern societal challenges.
            <br />
            <br />
            This book is a compelling tool for young boys and men, particularly
            those grappling with identity and purpose in a world that often
            overlooks their potential. Its themes of self-awareness, rites of
            passage, and cultural resilience resonate deeply in today’s context,
            where over 7 million men in the U.S. face unemployment and societal
            marginalization. By rekindling a connection to history,{" "}
            <em>The Winds of Napata</em> offers a pathway for personal growth, a
            reminder of inherent worth, and a call to rediscover one’s roots as
            a source of strength.
          </p>
          <button className="flex justify-center bg-yellow-500 text-white px-8 py-4 rounded hover:bg-blue-700 transition">
            Buy Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
