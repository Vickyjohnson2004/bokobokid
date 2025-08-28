import React from "react";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import FirstSection from "./FirstSection";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";
import Five from "./five";
import Six from "./six";

const MainSection = () => {
  return (
    <div>
      <Navigation />
      <FirstSection />
      <Second />
      <Third />
      <Fourth />
      <Five />
      <Six />
      <Footer />
    </div>
  );
};

export default MainSection;
