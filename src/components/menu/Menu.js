import React, { useState, useEffect } from "react";
import {
  MenuContainer,
  MenuSection,
  MenuNav,
  MenuItems,
  Classic,
} from "./MenuElements";
import Ashtray from "../../img/ashtray.png";
const Menu = () => {
  const [hookah, setHookah] = useState(true);
  const [cigar, setCigar] = useState(false);
  const [classic, setClassic] = useState(false);
  const [index, setIndex] = useState(0);
  const Hookahs = [
    {
      id: 1,
      title: "«Баунти»",
      price: 3000,
      added: "шоколад, молоко, кокосовый сироп",
      bowl: "Чаша: ананас",
      strength: "средняя",
    },
    {
      id: 2,
      title: "«Мохито»",
      price: 3000,
      added: "мята, лайм, белый ром и много-много льда",
      bowl: "Чаша на выбор: яблоко, апельсин, грейпфрут",
      strength: "крепкий",
    },
    {
      id: 3,
      title: "«Пина колада»",
      price: 3000,
      added: "молоко, ананасовый сок, кокосовый сироп, лед",
      bowl: "Чаша: ананас",
      strength: "средняя",
    },
  ];
  const Cigars = [
    {
      id: 4,
      title: "Куба",
      types: [
        "Cohiba Panatelas",
        "Cohiba Siglo II",
        "Cohiba Siglo IV",
        "Cohiba Siglo V",
        "Cohiba Robustos",
        "H. Upmann Magnum",
        "Hoyo De Mont. Epicure №",
        "Montecristo №4",
        "Partagas Serie №4",
        "Romeo & Julieta Churchliss.",
        "Romeo & Julieta №2",
      ],
    },
    {
      id: 5,
      title: "Доминикана",
      types: [
        "CT Reserva Decadencia Churchill",
        "Arturo Fuente Anejo №77 Shark",
        "Davidoff Escurio Gran Perfecto",
        "Davidoff WSC Churchill",
        "Zino Platinum XS",
        "Zino Platinum Barrel",
        "Macanudo Cafe Ascots",
        "Macanudo Maduro Ascots",
      ],
    },
    { id: 6, title: "Никарагуа", types: ["Nub Sun Grown 460 Tubos"] },
  ];
  //   const Classics = [
  //     {
  //       id: 6,
  //       title: "Кальяны на глиняной чаше",
  //       types: [
  //         { type: "Standart", price: "1200", strenth: "легкий" },
  //         { type: "Premium", price: "1500", strenth: "крепкий" },
  //       ],
  //       more: [
  //         {
  //           title: "Замена чаши",
  //           types: [
  //             { type: "Standart", price: "900" },
  //             { type: "Premium", price: "1200" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 7,
  //       title: "Кальяны на фруктовой чаше",
  //       more: [
  //         {
  //           title: "Апельсин",
  //           types: [
  //             { type: "Standart", price: "1600" },
  //             { type: "Premium", price: "1900" },
  //           ],
  //         },
  //         {
  //           title: "Яблоко",
  //           types: [
  //             { type: "Standart", price: "1600" },
  //             { type: "Premium", price: "1900" },
  //           ],
  //         },
  //         {
  //           title: "Грейпфрут",
  //           types: [
  //             { type: "Standart", price: "1900" },
  //             { type: "Premium", price: "2300" },
  //           ],
  //         },
  //         {
  //           title: "Ананас",
  //           types: [
  //             { type: "Standart", price: "2200" },
  //             { type: "Premium", price: "2700" },
  //           ],
  //         },
  //       ],
  //     },
  //   ];

  const changeCat = (type) => {
    if (type === "hookah") {
      setHookah(true);
      setCigar(false);
      setClassic(false);
    } else if (type === "cigar") {
      setHookah(false);
      setCigar(true);
      setClassic(false);
    } else if (type === "classic") {
      setHookah(false);
      setCigar(false);
      setClassic(true);
    }
  };

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 2 : 1);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <MenuContainer id="menu">
      <MenuSection>
        <h2>Меню</h2>
        <div className="top">
          <MenuNav>
            <div
              className={hookah ? "switch switch1 active" : "switch switch1"}
              onClick={() => changeCat("hookah")}
            >
              <p className="bold ">Фирменные кальяны</p>
            </div>
            <div
              className={cigar ? "switch switch2 active" : "switch switch1"}
              onClick={() => changeCat("cigar")}
            >
              <p className="bold">Сигары и сигарилы</p>
            </div>
            <div
              className={classic ? "switch switch3 active" : "switch switch3"}
              onClick={() => changeCat("classic")}
            >
              <p className="bold">Классические кальяны</p>
            </div>
          </MenuNav>
          <img src={Ashtray} alt="ashtray" />
          <div className="button_m">
            <button type="button" onClick={() => handleArrow("l")}>
              <i class="las la-angle-left"></i>
            </button>
            <button type="button" onClick={() => handleArrow("r")}>
              <i class="las la-angle-right"></i>
            </button>
          </div>
        </div>
        <MenuItems style={{ transform: `translateX(${-130 * index}px)` }}>
          {hookah && (
            <>
              {Hookahs.map((h) => (
                <div className="item" key={`hookah` + h.id}>
                  <div className="item_top">
                    <p className="menu_item_title">{h.title}</p>
                    <p className="menu_item_price">{h.price}₽</p>
                  </div>
                  <div className="item_desc">
                    <p className="desc">
                      Добавки:
                      {h.added}
                    </p>
                    <p className="desc">{h.bowl}</p>
                    <p className="desc">Крепость:{h.strength}</p>
                  </div>
                </div>
              ))}
            </>
          )}
          {cigar && (
            <>
              {Cigars.map((c) => (
                <div className="item item_cigar" key={`cigar` + c.id}>
                  <div className="item_top">
                    <p className="menu_item_title">{c.title}</p>
                  </div>
                  <div className="item_desc">
                    {c.types.map((t) => (
                      <div key={t}>{t}</div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
          {classic && (
            <>
              <Classic className="item item_cigar">
                <div className="item_top">
                  <p className="menu_item_title">Кальяны на глиняной чаше</p>
                </div>
                <div className="item_bottom">
                  <div>
                    <div className="hookah_type">
                      <p className="type">Standart:</p>
                      <p className="menu_item_price">1200 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Крепость:</p>
                      <p style={{ fontWeight: "400" }}>легкий</p>
                    </div>
                  </div>
                  <div>
                    <div className="hookah_type">
                      <p className="type">Premium:</p>
                      <p className="menu_item_price">1500 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Крепость:</p>
                      <p style={{ fontWeight: "400" }}>крепкий</p>
                    </div>
                  </div>
                </div>
              </Classic>
              <Classic className="item item_cigar">
                <div className="item_top">
                  <p className="menu_item_title">Кальяны на фруктовой чаше</p>
                </div>
                <div className="item_bottom">
                  <p classname="taste">Апельсин</p>
                  <div>
                    <div className="hookah_type">
                      <p className="type">Standart:</p>
                      <p className="menu_item_price">1600 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Premium:</p>
                      <p className="menu_item_price">1900 ₽</p>
                    </div>
                  </div>
                  <p classname="title">Яблоко</p>
                  <div>
                    <div className="hookah_type">
                      <p className="type">Standart:</p>
                      <p className="menu_item_price">1600 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Premium:</p>
                      <p className="menu_item_price">1900 ₽</p>
                    </div>
                  </div>
                  <div>
                    <p classname="title">Грейпфрут</p>
                    <div className="hookah_type">
                      <p className="type">Standart:</p>
                      <p className="menu_item_price">1900 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Premium:</p>
                      <p className="menu_item_price">2300 ₽</p>
                    </div>
                  </div>
                  <div>
                    <p classname="title">Ананас</p>
                    <div className="hookah_type">
                      <p className="type">Standart:</p>
                      <p className="menu_item_price">2200 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Premium:</p>
                      <p className="menu_item_price">2700 ₽</p>
                    </div>
                  </div>
                </div>
              </Classic>
              <Classic className="item item_cigar">
                <div className="item_top">
                  <p className="menu_item_title">Добавки в колбу</p>
                </div>
                <div className="item_bottom">
                  <div>
                    <div className="hookah_type">
                      <p className="type">Вино:</p>
                      <p className="menu_item_price">600 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Мята:</p>
                      <p className="menu_item_price">100 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Молоко:</p>
                      <p className="menu_item_price">200 ₽</p>
                    </div>
                    <div className="hookah_type">
                      <p className="type">Сок в ассортименте:</p>
                      <p className="menu_item_price">300 ₽</p>
                    </div>
                    <p style={{ fontWeight: "400", fontSize: "14px" }}>
                      Вы можете добавить в кальян любой алкоголь из барной карты
                      ресторана Panorama A.S.P.
                    </p>
                  </div>
                </div>
              </Classic>
            </>
            // <>
            //   {Classics.map((k) => (
            //     <div className="item item_cigar" key={`classic` + k.id}>
            //       <div className="item_top">
            //         <p className="menu_item_title">{k.title}</p>
            //         {k.types?.map((t) => (
            //           <span>
            //             <p className="type">{t.type}</p>
            //             <p className="type">{t.price}</p>
            //           </span>
            //         ))}
            //       </div>
            //       <div className="item_desc">
            //         {k.more.map((m) => (
            //           <p className="menu_item_title">{m.title}</p>

            //         ))}
            //       </div>
            //     </div>
            //   ))}
            // </>
          )}
        </MenuItems>
      </MenuSection>
    </MenuContainer>
  );
};

export default Menu;
