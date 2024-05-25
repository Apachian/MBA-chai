import React from "react";
import {motion} from "framer-motion";

function Section({
  h3,
  text,
  hasBtn = true,
  imgSrc,
  btnTxt,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) {

   
  return (
    <section className="section" style={{backgroundColor:backgroundColor}}>
      <div>
        <h3
          style={{
            color: headingColor,
          }}
          data-cursorpointer={true}
          initial={{
            y:"100%"
          }}
        >
          {h3}
        </h3>
        <p
          style={{
            color: textColor,
          }}
          data-cursorpointer={true}
        >
          {text}
        </p>

        {hasBtn && (
          <button
          
            style={{
              color: btnColor,
              backgroundColor:btnBgColor
            }}
            data-cursorpointer={true}
          >
            {btnTxt}
          </button>
        )}

        <div>
          <img src={imgSrc} alt="imgSrc" style={{
            width:imgSize,
          }} />
        </div>
      </div>
    </section>
  );
}

export default Section;
