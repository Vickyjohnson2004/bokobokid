import React from "react";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import StoryNav from "./StoryNav";
const Render = () => {
  return (
    <div>
      <Navigation />
      <StoryNav />
      <Footer />
    </div>
  );
};

export default Render;
