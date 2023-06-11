// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/Components/Winter/index.js
import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

import Content from "../Content";
import imageUrl from "../../../static/40718.jpg";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 500px;
  height: 100%;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
`;

const forwardStyleImage = { transform: "translateX(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateX(100%)", opacity: 0 };

const forwardStyleContent = { transform: "scale(.5)", opacity: 0 };
const backwardStyleContent = { transform: "scale(2)", opacity: 0 };

const WithImage = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >
      <Image style />
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Content title={"This is winter"} />
    </ActiveItem>
  </Wrapper>
);

export default WithImage;
