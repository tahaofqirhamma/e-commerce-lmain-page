import React from "react";
import { useState } from "react";
import data from "../../data/data";
import "./LightBox.scss";
import mainimg1 from "../../assets/images/image-product-1.jpg";
import Close from "../../assets/images/icon-close.svg";
import Prev from "../../assets/images/icon-previous.svg";
import Next from "../../assets/images/icon-next.svg";
function LightBox({ closeBox }) {
  const [mainImg, setMainImg] = useState(data);
  const chooseImg = (id) => {
    const newImage = data.filter((img) => img.id === id);
    setMainImg(newImage[0]);
  };

  return (
    <section className="lightbox">
      <div className="prd-imgs">
        <img
          src={Close}
          alt="close"
          onClick={() => {
            closeBox();
          }}
        />
        <div className="main-img">
          <img src={Prev} id="next" alt="" />
          <img src={mainimg1} alt="mi" />
          <img src={Next} id="prev" alt="" />
        </div>

        <div className="sub-imgs">
          {data.map((img, index) => {
            const { id, titel, src1, src0 } = img;
            return (
              <img
                src={src1}
                alt={titel}
                key={id + index}
                onClick={() => {
                  chooseImg(id);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LightBox;
