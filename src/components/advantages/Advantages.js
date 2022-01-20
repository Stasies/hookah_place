import React from "react";
import {
  AdvContainer,
  AdvSection,
  AdvSectionLeft,
  AdvSectionRight,
} from "./AdvantagesElements";
import Leaf from "../../img/leaf.png";

const Advantages = () => {
  return (
    <AdvContainer id="advantages">
      <AdvSection>
        <AdvSectionLeft></AdvSectionLeft>
        <AdvSectionRight>
          <div className="top">
            <h3>У нас уютно</h3>
            <img src={Leaf} alt="" />
          </div>
          <div className="bottom">
            <p className="list">
              <i
                style={{
                  fontSize: "20px",
                  fontWeight: "100",
                  marginRight: "10px",
                }}
              >
                //
              </i>{" "}
              Шикарный вид на город с 50-го этажа БЦ «Высоцкий»
            </p>
            <p className="list">
              <i
                style={{
                  fontSize: "20px",
                  fontWeight: "100",
                  marginRight: "10px",
                }}
              >
                //
              </i>{" "}
              Авторские миксы, которые меняются каждый месяц и способны
              удовлетворить каждого требовательного гостя
            </p>
            <p className="list">
              <i
                style={{
                  fontSize: "20px",
                  fontWeight: "100",
                  marginRight: "10px",
                }}
              >
                //
              </i>{" "}
              Уникальная атмосфера уединения и комфорта
            </p>
            <p className="list">
              <i
                style={{
                  fontSize: "20px",
                  fontWeight: "100",
                  marginRight: "10px",
                }}
              >
                //
              </i>{" "}
              Персонал — подготовленные мастера своего дела
            </p>
          </div>
        </AdvSectionRight>
      </AdvSection>
    </AdvContainer>
  );
};

export default Advantages;
