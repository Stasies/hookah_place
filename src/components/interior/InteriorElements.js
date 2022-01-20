import styled from "styled-components";
import Ibg from "../../img/Ibg.png";

export const InteriorContainer = styled.div`
  background: url(${Ibg});
  height: 540px;
  overflow: hidden;
  background-size: contain;
  @media screen and (max-width: 1100px) {
    height: 570px;
  }
  @media screen and (max-width: 750px) {
    height: 480px;
    background-size: cover;
  }
`;
export const InteriorSection = styled.div`
  margin-left: 255px;
  .top {
    margin-right: 255px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    i {
      color: #6e7483;
      &:active {
        color: white;
      }
    }
    h2 {
      margin: 50px 0;
      font-family: var(--title_font);
      font-weight: bold;
      font-size: 30px;
      color: white;
    }
    button {
      margin: 57px 0 45px 0;
      border: solid 1px #6e7483;
      background: transparent;
      height: 35px;
      &:last-child {
        margin-left: 10px;
      }
      &:active {
        color: white;
        border: solid 1px white;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    margin: 10px 20px;
    margin-top: 10px;
    .top {
      width: 100%;
      margin-right: 20px;
      button {
        height: 40px;
        width: 35px;
      }
    }
  }
`;
export const Carousel = styled.div`
  overflow: hidden;
  position: relative;
  width: 200vw;
  img {
    width: 305px;
    margin-right: 20px;
    height: 348px;
  }
  @media screen and (max-width: 1100px) {
    img {
      margin-right: 30px;
    }
  }
  @media screen and (max-width: 750px) {
    width: 400vw;
    img {
      height: 250px;
      width: 220px;
    }
  }
`;
