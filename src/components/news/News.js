import React, { useState } from "react";
import { NewsContainer, NewsSection, Carousel } from "./NewsElements";
import News1 from "../../img/news1.png";
import News2 from "../../img/news2.png";
import News3 from "../../img/news3.png";

const News = () => {
  const [index, setIndex] = useState(0);
  const Images = [
    {
      id: 1,
      img: News1,
      date: "8 апреля",
      title: "Наш курительный клуб ежедневно работает с 16:00",
    },
    {
      id: 2,
      img: News2,
      date: "24 марта",
      title:
        "Дорогие гости, по выходным наш курительный клуб работает до 4 утра",
    },
    {
      id: 3,
      img: News3,
      date: "12 марта",
      title: "Готовимся к вечеру с сигарами Davidoff",
    },
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 2 : 1);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <NewsContainer id="news">
      <NewsSection>
        <div className="top">
          <h2>Новости</h2>
          <div className="buttons">
            <button type="bytton" onClick={() => handleArrow("l")}>
              <i class="las la-angle-left"></i>
            </button>
            <button type="bytton" onClick={() => handleArrow("r")}>
              <i class="las la-angle-right"></i>
            </button>
          </div>
        </div>

        <Carousel style={{ transform: `translateX(${-300 * index}px)` }}>
          {Images.map((i) => (
            <div className="news_item" key={i.id}>
              <img src={i.img} alt={i.img} />
              <div className="info">
                <p className="date">{i.date}</p>
                <h4 className="title">{i.title}</h4>
              </div>
            </div>
          ))}
        </Carousel>
      </NewsSection>
    </NewsContainer>
  );
};

export default News;
