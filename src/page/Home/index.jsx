import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

import b from "../../static/mostangjpg.jpeg";
import Slider from "../../components/ScrollToCenter";
import "./style.css";
const Home = ({ style, ...props }) => {
  const { t, i18n } = useTranslation();
  const handlePositionChange = useCallback(
    (position) => console.log("[CustomHandle]", position),
    []
  );

  return (
    <div className="m-20">
      <ReactCompareSlider
        {...props}
        itemOne={
          <ReactCompareSliderImage
            src={b}
            style={{ filter: "grayscale(1)" }}
            alt="one"
          />
        }
        itemTwo={<ReactCompareSliderImage src={b} alt="two" />}
        onPositionChange={handlePositionChange}
        portrait
        style={{
          display: "flex",
          width: "100%",
          height: "50vh",
          ...style,
        }}
      />
      <div>
        <p>{t("para")}</p>
      </div>
      {/*  */}
      <button>
        <div>
          <span>
            <p>Hover Me</p>
            <p>:)</p>
          </span>
        </div>
        <div>
          <span>
            <p>Thanks</p>
            <p>:D</p>
          </span>
        </div>
      </button>
      {/*  */}

    </div>
  );
};

export default Home;
