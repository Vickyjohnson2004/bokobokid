import React from "react";

const Six: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <h1 className="text-[#E09900] text-center text-3xl font-bold mt-6 mb-4">
        Start Your Child’s Emotional Learning Journey Today
      </h1>
      <p className="text-white text-[16px] text-center mb-4">
        Join thousands of children, parents, and educators who are using
        BokoboBot StoryQuest to foster emotional intelligence through the magic
        of personalized storytelling.
      </p>
      <a
        href="#"
        className="border-2 bg-amber-500 border-white mb-8 text-text py-4 px-6 rounded"
      >
        <button className="text-white font-bold text-lg flex items-center">
          <span>&gt;&gt;</span> Create Your Own Story
        </button>
      </a>
    </div>
  );
};

export default Six;
