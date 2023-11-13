import React from "react";
import "./style.css";

const page = () => {
  return (
    <section className="contacts">
   <div className="container">
   <p>Contacts</p>
      <form className="form" action="">
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          placeholder="Имя"
        />
        <input
          type="text"
          id="email"
          name="email"
          className="input"
          required
          placeholder="Email"
        />
        <input
          type="text"
          id="message"
          name="message"
          className="input"
          placeholder="Сообщение"
        />
        <button type="button"></button>
      </form>
   </div>
    </section>
  );
};

export default page;
