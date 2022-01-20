import styled from "styled-components";

export const NewsContainer = styled.div`
  height: 540px;
  overflow: hidden;
  background-size: contain;
  background: var(--background_light);
  @media screen and (max-width: 1100px) {
    height: 575px;
  }
  @media screen and (max-width: 750px) {
    height: 550px;
  }
`;
export const NewsSection = styled.div`
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
      font-weight: 900;
      font-size: 30px;
      color: var(--text_main);
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
    margin: 20px;
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
  display: flex;
  font-family: var(--text_font);
  .news_item {
    height: 348px;
    width: 320px;
    margin-right: 20px;
    img {
      width: 320px;
    }
    .info {
      font-size: 15px;
      .date {
        margin: 10px 0 15px 0;
        font-weight: 200;
        font-size: 10px;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    overflow: hidden;
    .news_item {
      margin-right: 30px;
      width: 350px;
      img {
        width: 350px;
      }
      .info {
        font-size: 16px;
        .date {
          margin: 10px 0 20px 0;
          font-weight: 200;
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    width: 400vw;
    .news_item {
      height: 340px;
      width: 290px;
      margin-right: 20px;
      img {
        width: 290px;
      }
    }
  }
`;
