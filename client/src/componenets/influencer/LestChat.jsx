import React from "react";
import { Link } from "react-router-dom";
import LetStyle from "./LetsChat.module.css";

const LestChat = () => {
  return (
    <section className={LetStyle.lets_chat}>
      <div className="container">
        <div className={LetStyle.chat_title}>
          <h2>Let's Have a Chat</h2>
        </div>
        <form className={LetStyle.contact_form}>
          <div className={LetStyle.chat_form_wrap}>
            <div className={LetStyle.form_group}>
              <label for="name1">Your Name :</label>
              <span className={LetStyle.input_block}>
                <input
                  className={LetStyle.inputbox}
                  type="text"
                  name="name1"
                  size="40"
                  placeholder="First Name Last Name"
                />
              </span>
            </div>
            <div className={LetStyle.form_group}>
              <label for="companyname">Company Name :</label>
              <span className={LetStyle.input_block}>
                <input
                  className={LetStyle.inputbox}
                  type="text"
                  name="name1"
                  size="40"
                  placeholder="Company Name"
                />
              </span>
            </div>
            <div className={LetStyle.form_group}>
              <label for="email1">Email Address</label>
              <span className={LetStyle.input_block}>
                <input
                  className={LetStyle.inputbox}
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
              </span>
            </div>
            <div className={LetStyle.form_group}>
              <label for="contactdetails">Contact Details</label>
              <span className={LetStyle.input_bloc}>
                <input
                  className={LetStyle.inputbox}
                  type="tel"
                  name="contactdetails"
                  size="40"
                  placeholder="+91 -"
                />
              </span>
            </div>
            <div className={LetStyle.form_group}>
              <label for="message">Message :</label>
              <span className={LetStyle.input_block}>
                <textarea
                  name="message"
                  cols="25"
                  rows="2"
                  className={LetStyle.inputbox}
                  placeholder="Type your text here..."
                ></textarea>
              </span>
            </div>
          </div>
          <div className={LetStyle.form_group_btn}>
            <button className="btn">SUBMIT</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LestChat;
