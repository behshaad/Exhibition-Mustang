
import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

import Content from "../Content";
import imageUrl from "../../../static/mostangjpg.jpeg";

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

const forwardStyleImage = { transform: "translateY(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateY(100%)", opacity: 0 };

const forwardStyleContent = { transform: "translateX(100%)", opacity: 0 };
const backwardStyleContent = { transform: "translateX(-100%)", opacity: 0 };

const WithImage = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >
      <Image />
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Content title={"This is summer"} />
    </ActiveItem>
  </Wrapper>
);

export default WithImage;
