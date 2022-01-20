import React from "react";
import {
  ContactContainer,
  ContactLeft,
  ContactRight,
  ContactButtons,
} from "./ContactElements";
import Lighter from "../../img/Lighter.png";
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactLeft></ContactLeft>
      <ContactRight>
        <div className="contact_info">
          <h3 className="heading">Контакты</h3>
          <img src={Lighter} alt="lighter" className="lighter" />
          <div className="sections">
            <div className="contact_section">
              <i class="las la-phone"></i>
              <p className="info_p info1">
                <b>+7 (343) 298-98-88</b>
              </p>
            </div>
            <div className="contact_section">
              <i class="las la-map-marker"></i>
              <p className="info_p info2">
                Екатеринбург, ул. Малышева 51,
                <br></br> БЦ Высоцкий, 50 этаж
              </p>
            </div>
            <div className="contact_section">
              <i class="las la-clock"></i>
              <p className="info_p info3">
                вс-чт с 16:00 до 00:00 <br></br> пт-сб с 16:00 до 04:00
              </p>
            </div>
          </div>
        </div>
        <ContactButtons>
          <button className="contact_button">
            <i class="lab la-facebook-f"></i> Facebook
          </button>
          <button className="contact_button">
            {" "}
            <i class="lab la-instagram"></i> Instagram
          </button>
        </ContactButtons>
      </ContactRight>
    </ContactContainer>
  );
};

export default Contact;
