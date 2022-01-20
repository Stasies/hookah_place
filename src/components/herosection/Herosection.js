import React from "react";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroWrap,
  HeroLeft,
  HeroRight,
} from "./HerosectionElements";
import Smoke from "../../img/smoke.png";

const Herosection = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroWrap>
          <div className="main_title_box">
            <h1 className="main_title">
              Самый шикарный<br></br> курительный клуб Урала
            </h1>
          </div>
          <div className="contact_info">
            <div className="contact_section">
              <p className="info_p">
                <i class="las la-phone"></i> +7 (343) 298-98-88
              </p>
            </div>
            <div className="contact_section">
              <i class="las la-clock"></i>
              <p className="info_p">
                вс-чт с 16:00 до 00:00 <br></br> пт-сб с 16:00 до 04:00
              </p>
            </div>
            <div className="contact_section">
              <p className="info_p">
                <i class="las la-map-marker"></i> Екатеринбург,
                <br></br> БЦ Высоцкий, 50 этаж
              </p>
            </div>
          </div>
        </HeroWrap>
        <HeroLeft>
          {/* <Logo>
            <img src={LogImg} alt="дым" className="logo" />
          </Logo> */}

          <img src={Smoke} alt="дым" className="smoke" />
        </HeroLeft>
        <HeroRight>
          <div className="box"></div>
        </HeroRight>
      </HeroContainer>
    </>
  );
};

export default Herosection;
