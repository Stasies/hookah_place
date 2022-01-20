import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogImg from "../img/logo.png";

export const NavbarContainer = styled.div`
  height: 20px;
  position: absolute;
  height: 125px;
  z-index: 10;
  width: 100%;
`;
export const NavbarSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 250px;
  justify-content: space-between;
  align-items: flex-end;
  color: white;
  height: 100px;
  z-index: 30;
  .open {
    display: none;
    @media screen and (max-width: 770px) {
      display: block;
    }
  }
  @media screen and (max-width: 1100px) {
    margin: 20px;
    width: 80%;
  }
  @media screen and (max-width: 770px) {
    .open {
      /* z-index: 5000;
      right: 0;
      top: 0;
      color: white;
      position: absolute;
      transform: translate(-50px, 110px); */
      i {
        transform: scale(2);
      }
    }
    .cross {
      z-index: 5000;
      right: 0;
      top: 0;
      color: white;
      position: absolute;
      transform: translate(-50px, 120px);
      i {
        transform: scale(2);
      }
    }
  }
`;
export const Name = styled.div`
  font-family: var(--text_font);
  z-index: 400;
  margin-left: 75px;
  margin-right: 80px;
  @media screen and (max-width: 770px) {
    font-size: 20px;
    width: 30%;
    margin-right: 0;
  }
`;
export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  i {
    margin-right: 20px;
    transform: scale(1.2);
  }
  @media screen and (max-width: 770px) {
    margin-right: 100px;
  }
  @media screen and (max-width: 600px) {
    i {
      display: none;
    }
  }
`;
export const Nav = styled.div`
  li {
    display: inline;
    list-style: none;

    font-size: 12px;
    :not(:last-child) {
      margin-right: 30px;
    }
    a {
      font-family: var(--text_font);
      color: white;
      text-decoration: none;
      padding-bottom: 5px;
      &:hover {
        border-bottom: 3px solid var(--main);
      }
    }
  }
  /* i {
    display: none;
  } */
  @media screen and (max-width: 770px) {
    &.navigation {
      display: none;
    }

    &.navigation_menu {
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 5000;
      position: absolute;
      background-color: var(--background);
      margin: 0;
      ul {
        display: flex;
        flex-direction: column;
        height: 100vh;
        margin-top: 100px;
        padding: 0;
        li {
          text-align: center;
          font-size: 14px;
          font-weight: 200;
          margin-bottom: 30px;
          &.socials_mobile {
            display: flex;
            flex-direction: row;
            justify-content: center;
            transform: scale(1.5);
            i {
              color: white;
              z-index: 5000;
              :not(:first-child) {
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
`;
export const Logo = styled.div`
  background: var(--main);
  width: 95px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-left: 250px;
  position: absolute;
  .logo {
    transform: scale(0.7);
  }
  @media screen and (max-width: 1100px) {
    margin-left: 15px;
    height: 150px;
    width: 110px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(true);

  // useEffect(() => {
  //   if (window.innerWidth <= 900) {
  //     setScreen("medium");
  //   } else if (window.innerWidth > 900) {
  //     setScreen("big");
  //   }
  //   console.log(screen);
  // }, [screen]);
  return (
    <NavbarContainer>
      <Logo>
        <img src={LogImg} alt="дым" className="logo" />
      </Logo>
      <NavbarSection>
        <Name>
          <h4>Дым Кудрявый</h4>
        </Name>
        <Socials>
          <i class="lab la-vk"></i>
          <i class="lab la-instagram"></i>
          <i class="lab la-facebook-f"></i>
        </Socials>

        {open ? (
          <>
            <Nav className="navigation">
              <ul>
                <li>
                  <a href="#about">О клубе</a>
                </li>
                <li>
                  <a href="#interior">Интерьер</a>
                </li>
                <li>
                  <a href="#menu">Меню</a>
                </li>
                <li>
                  <a href="#advantages">Преимущества</a>
                </li>
                <li>
                  <a href="#news">Новости</a>
                </li>
                <li>
                  <a href="#contact">Контакты</a>
                </li>
              </ul>
            </Nav>
            <div className="open" onClick={() => setOpen(!open)}>
              <i class="las la-bars"></i>
            </div>
          </>
        ) : (
          <>
            <Nav className="navigation_menu">
              <ul>
                <li>
                  <a href="#">О клубе</a>
                </li>
                <li>
                  <a href="#">Интерьер</a>
                </li>
                <li>
                  <a href="#">Меню</a>
                </li>
                <li>
                  <a href="#">Преимущества</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li className="socials_mobile">
                  <i class="lab la-vk"></i>
                  <i class="lab la-instagram"></i>
                  <i class="lab la-facebook-f"></i>
                </li>
              </ul>
            </Nav>
            <div className="cross" onClick={() => setOpen(!open)}>
              <i class="las la-times" color="white"></i>
            </div>
          </>
        )}
      </NavbarSection>
    </NavbarContainer>
  );
};

export default Navbar;
