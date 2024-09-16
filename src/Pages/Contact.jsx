import React, { useState } from "react";
import phone from "../img/icons-phone1.png";
import mail from "../img/icons-mail.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const handleName = (e) => {
    setUsername(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [username, number, text];

    const token = `7326511785:AAGQrqMF_DgNItofNe2kUItExRLR6Ykbnkg`;
    const chat_id = 6306759214;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chat_id,
        text: data,
      },
    })
      .then((data) => {
        toast("Success");
      })
      .catch((error) => {
        console.log(error);
      });
    setUsername("");
    setNumber("");
    setText("");
  };

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__left">
          <div className="contact__left__top">
            <div className="top">
              <img src={phone} alt="" />
              <p>Bizga Qo'ng'iroq Qiling</p>
            </div>
            <p>Biz 24/7 kun tartibida ishlaymiz</p>
            <p>
              Raqam: <a href="tel:+998917777777">+998917777777</a>
            </p>
          </div>
          <hr />
          <div className="contact__left__bottom">
            <div className="top">
              <img src={mail} alt="" />
              <p>Bizga yozing</p>
            </div>
            <p>
              Shaklni to'ldiring va biz 24 soat ichida siz bilan bog'lanamiz.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:customer@exclusive.com">customer@exclusive.com</a>
            </p>
          </div>
        </div>
        <div className="contact__right">
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="form__top">
              <input
                value={username}
                onChange={handleName}
                className="contact__name input"
                type="text"
                placeholder="Ismingiz"
              />
              <input
                value={number}
                onChange={handleNumber}
                className="conatct__number input"
                type="number"
                placeholder="Telefon raqamingiz"
              />
            </div>
            <textarea
              value={text}
              onChange={handleText}
              placeholder="Siznin habaringiz"
              cols="30"
              rows="10"
            ></textarea>
            <button className="contact__btn">Habar yuborish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
