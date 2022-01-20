import styled from "styled-components";
import Img3 from "../../img/img3.png";

export const AdvContainer = styled.div`
  background: var(--background_light);
  min-height: 700px;
  color: white;
`;
export const AdvSection = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AdvSectionLeft = styled.div`
  margin-top: 50px;
  background-image: url(${Img3});
  flex: 3;
  background-repeat: no-repeat;
  height: 555px;
  background-size: contain;
  @media screen and (max-width: 1100px) {
    flex: 100%;
    width: 100vw;
    height: 530px;
    margin-top: 195px;
    background-size: cover;
  }
  @media screen and (max-width: 750px) {
    height: 500px;
    background-size: cover;
  }
`;
export const AdvSectionRight = styled.div`
  margin-top: 50px;
  align-self: flex-end;
  flex: 2;
  background: var(--background);
  min-height: 400px;
  transform: translateX(-200px);
  align-self: center;
  .top {
    margin: 50px 0px 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      transform: scale(0.9) translate(-35px, -10px);
    }
    h3 {
      font-size: 31px;
      font-weight: 800;
      font-family: var(--title_font);
    }
  }
  .bottom {
    font-family: var(--text_font);
    font-size: 13px;
    margin-left: 50px;
    /* width: 480px; */
    line-height: 1.1rem;
    .list {
      margin: 35px;
    }
  }
  @media screen and (max-width: 1100px) {
    position: absolute;
    margin-top: 50px;
    width: 87%;
    min-height: 450px;
    height: max-content;
    transform: translate(50px, -150px);
    .top {
      margin: 60px;
      margin-bottom: 40px;
      img {
        transform: scale(0.9) translate(15px, -10px);
      }
    }
    .bottom {
      line-height: 1.5rem;
      width: 90%;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 380px) {
    width: 100%;
    height: 560px;
    transform: translate(0, -150px);
    .top {
      margin: 60px 0 30px 20px;
      width: 350px;
      img {
        transform: scale(0.7) translate(0px, -10px);
      }
      h3 {
        font-size: 26px;
      }
    }
    .bottom {
      margin: 0;
      margin-left: 20px;
      width: 95%;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 350px) {
    .top {
      width: 90%;
      img {
        display: none;
      }
    }
  }
`;
