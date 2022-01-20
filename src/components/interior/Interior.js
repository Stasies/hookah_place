import React, { useState } from "react";
import {
  InteriorContainer,
  InteriorSection,
  Carousel,
} from "./InteriorElements";
import Img1 from "../../img/1.png";
import Img2 from "../../img/2.png";
import Img3 from "../../img/3.png";
import Img4 from "../../img/4.png";

const Interior = () => {
  const [index, setIndex] = useState(0);
  const Images = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
    { id: 4, img: Img4 },
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 3 : 1);
    }
    if (direction === "r") {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };

  return (
    <InteriorContainer id="interior">
      <InteriorSection>
        <div className="top">
          <h2>Интерьер</h2>
          <div className="buttons">
            <button type="bytton" onClick={() => handleArrow("l")}>
              <i class="las la-angle-left"></i>
            </button>
            <button type="bytton" onClick={() => handleArrow("r")}>
              <i class="las la-angle-right"></i>
            </button>
          </div>
        </div>

        <Carousel style={{ transform: `translateX(${-230 * index}px)` }}>
          {Images.map((i) => (
            <img key={i.id} src={i.img} alt={i.img} />
          ))}
        </Carousel>
      </InteriorSection>
    </InteriorContainer>
  );
};

export default Interior;
