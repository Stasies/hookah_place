import React, { useEffect } from "react";
import { AboutContainer, AboutSection } from "./AboutElements";
import CigarImg from "../../img/cigars.png";

const About = () => {
  useEffect(() => {
    console.log(window.screen.width);
  }, []);
  return (
    <>
      <AboutContainer id="about">
        <AboutSection>
          <div className=" section1">
            <h3 className="main_title title">Возраждаем традицию</h3>
            <p className="desc">
              Сигара в достойной компании, оттененная бокалом бренди, всегда
              была не только обязательным атрибутом джентльмена, но и данью
              традициям. Поклонники сигар встречались в курительных клубах,
              обсуждали последние новости и вершили судьбы мира. Прошло время, и
              теперь традицию курительных клубов возрождает «Дым кудрявый» в
              Екатеринбурге.
            </p>
          </div>
          <div className=" section2">
            <img src={CigarImg} alt="cigar" />
          </div>
          <div className="section section3">
            <h4 className="title">Услуги</h4>
            <p className="desc">
              Серьезная сигарная карта и достойный выбор кальянов – standart,
              premium или de luxe. Всегда в наличии элитный алкоголь, который
              составляет отличную партию сигарам. Всем, кто за рулем бармен
              предложит авторский чай.
            </p>
          </div>
          <div className="section section4">
            <h4 className="title">Развлечения</h4>
            <p className="desc">
              В клубе «Дым кудрявый» установлены плазменные панели, на которых
              можно посмотреть спортивный матч. Также в гостевом зале вы найдете
              шахматы и шашки, в том числе интересные авторские коллекции.
            </p>
          </div>
          <div className="section section5">
            <h4 className="title">Для кого</h4>
            <p className="desc">
              Курительный клуб №1 «Дым кудрявый» создан для деловых и
              неформальных встреч. В отличии от традиционных английских
              курительных клубов, заведение в Екатеринбурге ждет и джентльменов,
              и леди.
            </p>
          </div>
        </AboutSection>
      </AboutContainer>
    </>
  );
};

export default About;
