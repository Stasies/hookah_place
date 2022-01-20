import styled from "styled-components";
import Map from "../../img/map.png";

export const ContactContainer = styled.div`
  height: 510px;
  display: flex;
  background-color: var(--background_light);
  flex-direction: row;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    min-height: 820px;
  }
  @media screen and (max-width: 750px) {
    height: 900px;
  }
`;
export const ContactLeft = styled.div`
  height: 100%;
  width: 845px;
  background-image: url(${Map});
  background-size: contain;
  @media screen and (max-width: 1100px) {
    width: 100vw;
  }

  @media screen and (max-width: 1100px) {
    width: 100vw;
    flex: 100%;
    order: 2;
  }
  @media screen and (max-width: 750px) {
    height: 500px;
    background-size: cover;
  }
`;
export const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 60px;
  .lighter {
    position: absolute;
    transform: scale(0.9) translate(270px, -75px);
  }
  .heading {
    font-size: 30px;
    font-family: var(--title_font);
    font-weight: 800;
  }
  .sections {
    margin-top: 40px;
    margin-bottom: 45px;
  }
  .info_p {
    width: 250px;
    font-family: var(--text_font);
    font-size: 13px;
  }
  .contact_section {
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 770px) {
    width: 95%;
    margin: 50px 20px;
    .info1 {
      width: 180px;
    }
    .info2 {
      width: 300px;
    }
    .info3 {
      width: 200px;
    }
    .sections {
      display: flex;
      flex-direction: row;
      .info_p {
        font-weight: 600;
        font-size: 16px;
      }
    }
    .lighter {
      transform: scale(1) translate(625px, 115px);
    }
  }
  @media screen and (max-width: 750px) {
    margin-top: 70px;
    .heading {
      font-size: 28px;
    }
    .sections {
      flex-direction: column;
    }
    .lighter {
      transform: translate(250px, -75px);
    }
  }
`;
export const ContactButtons = styled.div`
  i {
    transform: scale(2);
    margin-right: 10px;
  }
  .contact_button {
    font-family: var(--text_font);
    color: white;
    border: none;
    padding: 18px 28px;
    margin-right: 15px;
    background-color: var(--button);
    &:hover {
      background-color: var(--button_hover);
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1100px) {
    .contact_button {
      font-size: 16px;
      padding: 20px 35px;
    }
  }
  @media screen and (max-width: 750px) {
    .contact_button {
      font-size: 14px;
      padding: 20px 25px;
    }
  }
`;
