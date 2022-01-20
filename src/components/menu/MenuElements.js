import styled from "styled-components";

export const MenuContainer = styled.div`
  background: var(--background_light);
  min-height: 550px;
  /* margin-right: 255px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: hidden;
  @media screen and (max-width: 750px) {
    margin-bottom: 60px;
  }
`;
export const MenuSection = styled.div`
  margin-left: 252px;
  margin-top: 45px;
  .button_m {
    display: none;
  }
  h2 {
    margin: 45px 0;
    font-family: var(--title_font);
    font-weight: bold;
    font-size: 30px;
    color: var(--text_main);
  }
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      position: absolute;
      align-self: flex-end;
      right: 0;
      transform: scale(0.8) translateX(-305px);
      @media screen and (max-width: 1100px) {
        transform: scale(0.7) translate(0, -70px);
      }
      @media screen and (max-width: 380px) {
        transform: scale(0.7) translate(40px, -230px);
      }
    }
  }
  @media screen and (max-width: 1100px) {
    margin: 25px 20px;
  }
  @media screen and (max-width: 750px) {
    .top {
      display: flex;
      flex-direction: row;
      width: 340px;
      margin-right: 0;
      i {
        color: #6e7483;
        &:active {
          color: white;
        }
      }
    }
  }
  @media screen and (max-width: 380px) {
    width: 95%;
    margin-right: 0;
    .button_m {
      display: flex;
      align-content: flex-end;
      justify-content: flex-end;
      align-items: flex-end;
      button {
        border: solid 1px #6e7483;
        background: transparent;
        height: 40px;
        &:last-child {
          margin-left: 10px;
        }
        &:active {
          color: white;
          border: solid 1px white;
        }
      }
    }
  }
`;
export const MenuNav = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--text_main);
  border-bottom: 1px grey solid;
  width: 1000px;
  &:hover {
    cursor: pointer;
  }
  .switch:not(:last-child) {
    width: 210px;
  }
  .switch {
    width: 210px;
    &:last-child {
      width: 240px;
    }
    &.active {
      background: var(--main);
      color: white;
    }
    .bold {
      font-weight: bold;
      font-size: 15px;
      margin: 15px;
      font-family: var(--text_font);
    }
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    margin: 10px 20px 0 0;
    .switch {
      height: 60px;
      &:not(:last-child) {
        min-width: 225px;
      }
      &:last-child {
        width: 240px;
      }
    }
  }
  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
    .switch:not(:last-child) {
      width: 220px;
    }
  }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 45px;
  margin-bottom: 45px;
  .item {
    border: 4px solid #cfd2d9;
    width: 310px;
    height: 220px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    .item_top {
      font-family: var(--text_font);
      .menu_item_title {
        font-weight: bold;
      }
      .menu_item_price {
        color: var(--main);
        font-weight: bold;
      }
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 30px 20px auto 20px;
    }
    .item_desc {
      margin-left: 20px;
      line-height: 1.3rem;
      .desc {
        margin-bottom: 10px;
        font-size: 12px;
        font-family: var(--text_font);
        &:last-child {
          margin-bottom: 30px;
        }
      }
    }
  }
  .item_cigar {
    height: fit-content;
    .item_top {
      margin-bottom: 0;
    }
    .item_desc {
      margin: 20px 40px;
      line-height: 1.3rem;
      font-size: 12px;
      text-transform: uppercase;
      font-family: var(--text_font);
    }
  }

  @media screen and (max-width: 1100px) {
    .item {
      width: 230px;
      margin-right: 10px;
      height: 250px;
      margin-left: 0;
      .item_top {
        height: 50px;
      }
    }
    .item_cigar {
      height: fit-content;
      .item_top {
        margin-bottom: 0;
      }
      .item_desc {
        margin: 20px 40px;
        line-height: 1.3rem;
        font-size: 12px;
        text-transform: uppercase;
        font-family: var(--text_font);
      }
    }
  }
  @media screen and (max-width: 750px) {
    margin: 10px 0;
  }
`;
export const Classic = styled.div`
  height: fit-content;
  .item_bottom {
    margin: 20px;
    p {
      font-weight: bold;
      font-family: var(--text_font);
      margin: 5px;
    }
    .hookah_type {
      display: flex;
      flex-direction: row;
      .type {
        font-weight: 500;
      }
      .menu_item_price {
        color: var(--main);
        font-weight: bold;
      }
    }
  }
`;
