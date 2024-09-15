import React from "react";
import "./Footer.scss";
import logos from "../../img/logos.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__social">
            <h1 className="footer__title">BrandLogo</h1>
            <div className="social">
              <h4 className="social__title">Biz ijtimoiy tarmoqlarda</h4>
              <img src={logos} alt="" className="social__logos" />
            </div>
          </div>
          <div className="footer__contact">
            <h3 className="footer__title">Aloqa</h3>
            <p className="footer__text">Manzil: Toshkent sh</p>
            <p className="footer__text">qwertyui@gmail.com</p>
            <p className="footer__text">+998917777777</p>
          </div>
          <div className="footer__about">
            <h3 className="footer__title">Haqimizda</h3>
            <p className="footer__text">
              Maxfiylik Siyosati va Shaxsiy Ma'lumotlarni Himoya Qilish
            </p>
            <p className="footer__text">
              Mahsulotlarni va to’lovlarni qaytarish siyosati
            </p>
          </div>
          <div className="footer__about">
            <h3 className="footer__title">Savol berish</h3>
            <form className="footer__form">
              <input
                className="footer__name"
                type="text"
                placeholder="Ismingiz"
              />
              <input
                className="footer__number"
                type="number"
                placeholder="Telefon raqam"
              />
              <textarea className="footer__que" placeholder="Savol berish..." />
              <button className="footer__btn" type="submit">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </footer>
      <hr className="footer__hr" />
      <div className="footer__copyright">
        <p className="copy__text">
          "2024 © "notebook.uz" MCHJ. Tin 309376127. Barcha huquqlar
          himoyalangan"
        </p>
        <p className="copy__text">Hamkor: Normuxamedov</p>
      </div>
    </>
  );
};

export default Footer;
