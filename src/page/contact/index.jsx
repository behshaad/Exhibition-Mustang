// import { useTranslation } from "react-i18next";

// const Contact = () => {
//   const { t, i18n } = useTranslation();
//   return (
//     <div className="bg-slate-300 container mx-auto mt-20 flex flex-col items-center  gap-2" >
//       <h1>{t("Contact")}</h1>
//     </div>
//   );
// };

// export default Contact;
// ????????????????????????????
import React, { useCallback } from "react";


import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";


import a from "../../static/40718.jpg"
import b from "../../static/mostangjpg.jpeg"
import Slide from "../../components/navbar/ SlideableMenuSwiper";
/** With Customised `handle`. */
const Contact = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <div>
      <ReactCompareSlider
        className=""
        {...props}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              border: 0,
              color: "#333",
            }}
          />
        }
        itemOne={
          <ReactCompareSliderImage
            src={a}
            style={{ filter: "grayscale(1)" }}
            alt="one"
          />
        }
        itemTwo={<ReactCompareSliderImage src={a} alt="two" />}
        onPositionChange={handlePositionChange}
        style={{
          display: "flex",
          width: "100%",
          height: "50vh",
          ...style,
        }}
      />
      <h1>slide</h1>
      <Slide/>
    </div>
  );
};

export default Contact;