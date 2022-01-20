import React from "react";
import styled from "styled-components";
import bgChairs from "../../img/bgChairs.png";

const RestContainer = styled.div`
  height: 200px;
  width: 100vw;
  background-repeat: no-repeat;
  background: linear-gradient(90deg, #30333b 60%, transparent), url(${bgChairs});
  background-size: cover;
  @media screen and (max-width: 1100px) {
    height: 235px;
    background: linear-gradient(90deg, #30333b 50%, transparent),
      url(${bgChairs});
  }
  @media screen and (max-width: 750px) {
    height: 370px;
    background: linear-gradient(180deg, #30333b 20%, transparent),
      url(${bgChairs});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
`;
const RestSection = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-content: center;
  margin: auto;
  justify-content: baseline;
  height: 100%;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
  }
`;
const RestText = styled.div`
  margin: 50px 250px;
  flex: 3;
  .rest_title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .rest_text {
    font-size: 16px;
    font-family: var(--text_font);
    font-weight: 200;
  }
  @media screen and (max-width: 1100px) {
    margin: 0 20px;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    .rest_title {
      font-size: 26px;
      width: 80%;
    }
  }
  @media screen and (max-width: 750px) {
    margin: 20px;
    .rest_title {
      width: 100%;
    }
  }
`;
const RestButton = styled.div`
  align-self: center;
  flex: 2;
  button {
    font-size: 14px;
    padding: 18px 30px;
    background-color: var(--main);
    transform: translateX(-90px);
    border: none;
    outline: none;
    color: white;
    &:hover {
      background-color: var(--purple_button_hover);
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1100px) {
    button {
      font-size: 16px;
      transform: translateX(0);
      justify-self: center;
      align-self: center;
      padding: 20px 35px;
    }
  }
  @media screen and (max-width: 750px) {
    align-self: flex-start;
    margin-left: 20px;
  }
`;
const Rest = () => {
  return (
    <RestContainer>
      <RestSection>
        <RestText>
          <h3 className="rest_title">
            Наш клуб входит в состав ресторана Panorama ASP
          </h3>
          <p className="rest_text">
            Поэтому гости могут не только насладиться дымным, но и попробовать
            самые разнообразные коктейли, а также вкусно поесть
          </p>
        </RestText>
        <RestButton>
          <button>
            Подробнее о ресторане <i class="las la-arrow-right"></i>
          </button>
        </RestButton>
      </RestSection>
    </RestContainer>
  );
};

export default Rest;
