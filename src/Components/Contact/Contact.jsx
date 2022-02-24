import React, { useState } from "react";
import "./Contact.css";
import ContactImg from "../../assits/resumi/contact.png";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname},
        My Phone Number is ${data.phone}, 
        My email address is ${data.email}, 
        My Subject is ${data.subject}, 
        Here is my message I want to say : ${data.message}
        
        `
    );
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>Contact</h4>
            <h1>Contact With Me</h1>
          </div>
          <div className="content d_flex">
            <div className="left box_shadow">
              <div className="box box_shadow">
                <div className="img">
                  <img src={ContactImg} alt="" />
                </div>
                <div className="details">
                  <h1>Nevine Acotanze</h1>
                  <p>
                    I am aviable for freelance work. Connect with me via and
                    call in to my account.
                  </p>
                  <p>Phone: +998915111366</p>
                  <p>Email: faxriddin3475@gmail.com</p>
                  <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f fa-2xl fac-color"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-instagram fa-2xl ins-color"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-telegram fa-2xl tel-color"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right box_shadow">
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>YOUR NUMBER</span>
                    <input
                      type="phone"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL</span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT</span>
                  <input
                    type="subject"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE
                  <i className="fa fa-long-arrow-down"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
