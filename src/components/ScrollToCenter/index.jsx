
import React from "react";

import { Carousel } from "react-scroll-slider";

import Winter from "./Winter";
import Autumn from "./Autumn";
import Summer from "./Summer";
import Spring from "./Spring";

const Slider = () => (
  <div className="bg-red-900 h-screen overflow-hidden">
    <Carousel>
      <Winter />
      <Autumn />
      <Summer />
      <Spring />
    </Carousel>
  </div>
);

export default Slider;
