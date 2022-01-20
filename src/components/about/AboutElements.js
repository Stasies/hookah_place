import styled from "styled-components";

export const AboutContainer = styled.div`
  background: var(--background_light);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 626px;
  height: fit-content;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: fit-content;
    margin: 50px 0;
  }
  @media screen and (max-width: 380px) {
    min-height: 1230px;
    height: fit-content;
  }
`;
export const AboutSection = styled.div`
  width: 90%;
  font-family: var(--text_font);
  height: 82%;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 20%;
  h3 {
    font-size: 30px;
    margin: 3px auto 36px auto;
    @media screen and (max-width: 768px) {
      margin: 0;
      margin-bottom: 49px;
      font-size: 28px;
    }
    @media screen and (max-width: 380px) {
      font-size: 26px;
      margin: 0;
      margin-bottom: 49px;
      margin-top: 10px;
    }
  }

  .title {
    font-weight: bold;
    color: var(--text_main);
  }
  .main_title {
    font-family: var(--title_font);
  }
  h4 {
    font-family: var(--text_font);
    font-size: 16px;
    margin: 30px auto 25px auto;
    @media screen and (max-width: 768px) {
      margin: 18px auto 25px;
      font-size: 18px;
    }
  }
  .desc {
    color: var(--text_gray);
    font-size: 13px;
    line-height: 1.3rem;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 1.5rem;
      width: 97%;
    }
    @media screen and (max-width: 378px) {
      font-size: 14px;
      width: 100%;
      height: max-content;
    }
  }
  text-align: start;
  .section1 {
    flex: 50%;
    height: 270px;
  }
  .section2 {
    display: flex;
    justify-content: right;
    flex: 50%;
    height: 270px;
  }
  .section {
    border-top: 1px solid #bdc4cf;
    flex: 1;
    text-align: left;
    p {
      font-size: 12px;
      line-height: 1.3rem;
      color: var(--text_gray);
    }
  }
  .section:not(:last-child) {
    margin-right: 50px;
    @media screen and (max-width: 1100px) {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 1100px) {
    margin: 0;
    flex-wrap: wrap;
    .section {
      &:not(:nth-child(3)) {
        margin: 0;
        flex: 50%;
      }
      height: 200px;
      margin-bottom: 30px;
      margin-right: 20px;
      .desc {
        font-size: 14px;
        line-height: 1.5rem;
      }
    }
    .section1 {
      flex: 100%;
    }
    .section2 {
      order: 3;
      flex: 50%;
      height: 200px;
      img {
        width: 250px;
        height: 200px;
        transform: translate(-10px, -20px);
        position: absolute;
      }
    }
    .section3 {
      order: 2;
      flex: 50%;
      height: 200px;
    }
    .section4 {
      order: 4;
    }
    .section5 {
      order: 5;
    }
  }
  @media screen and (max-width: 480px) {
    .section1 {
      min-height: 300px;
      height: fit-content;
    }
    .section2 {
      display: none;
    }
    .section {
      height: auto;
      margin-top: 40px;
      &:not(:nth-child(3)) {
        margin: 0;
        flex: 100%;
      }
      .title {
        margin-top: 50px;
      }
    }
  }
`;
