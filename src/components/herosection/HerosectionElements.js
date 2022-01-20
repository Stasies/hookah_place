import styled from "styled-components";
import bg from "../../img/bg.png";

export const HeroContainer = styled.div`
  height: 735px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1100px) {
    height: 710px;
  }
`;
export const HeroWrap = styled.div`
  position: absolute;
  margin-top: 220px;
  margin-left: 250px;
  height: 450px;
  z-index: 2;
  width: 100vw;
  @media screen and (max-width: 1100px) {
    width: 90%;
    margin-top: 230px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    .main_title_box {
      width: fit-content;
      height: fit-content;
      h1 {
        height: fit-content;
        margin-bottom: 50px;
      }
    }
    .contact_info {
      /* position: absolute; */
      width: 100%;
    }
  }
  /* @media screen and (max-width: 770px) {
    margin: 230px 10px 0 10px;
    width: 100%;
    .main_title_box {
      width: 100%;
    }
  } */
  .main_title {
    font-family: var(--title_font);
    font-size: 50px;
    color: white;
    width: fit-content;
    line-height: 4.5rem;
    margin-top: 70px;
    margin-bottom: 155px;
    z-index: 10;
    @media screen and (max-width: 1100px) {
      width: 90%;
    }
    @media screen and (max-width: 768px) {
      width: 98%;
    }
    @media screen and (max-width: 750px) {
      font-size: 36px;
    }
    @media screen and (max-width: 380px) {
      z-index: -1;
    }
  }
  .contact_info {
    border-top: 1px solid grey;
    display: flex;
    flex-direction: row;
    width: 40%;
    font-family: var(--text_font);
    font-size: 12px;
    color: white;
    .contact_section {
      &:first-child {
        font-weight: 800;
        font-size: 14px;
      }
      display: flex;
      flex-direction: row;
      margin: 30px 50px 25px 5px;

      @media screen and (max-width: 860px) {
        margin: auto;
        margin-top: 30px;
        margin-left: 10px;
        font-size: 14px;
        &:first-child {
          font-weight: 800;
          font-size: 16px;
        }
      }
      @media screen and (max-width: 750px) {
        display: none;
      }
    }
    @media screen and (max-width: 860px) {
      width: auto;
    }
    @media screen and (max-width: 378px) {
      border: none;
    }
  }
`;
export const HeroLeft = styled.div`
  background-color: var(--background);
  flex: 5;
  .smoke {
    width: 480px;
    height: 580px;
    margin-top: 150px;
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const HeroRight = styled.div`
  flex: 6;
  height: 730px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 735px;
  @media screen and (max-width: 1100px) {
    height: 710px;
  }
  .box {
    border: 6px solid var(--main);
    height: 280px;
    width: 315px;
    position: absolute;
    transform: translate(-445px, 225px);
  }
  @media screen and (max-width: 770px) {
    .box {
      width: 375px;
      margin: 225px 250px;
      transform: translate(-235px, 15px);
    }
    @media screen and (max-width: 380px) {
      .box {
        width: 305px;
        margin: 225px 250px;
        transform: translate(-240px, 80px);
      }
    }
  }
`;
