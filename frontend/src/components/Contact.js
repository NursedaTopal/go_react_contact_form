import React, { useState } from "react";
import "../app.css";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader] = useState(false);

  return (
    <form className="form">
      <h1>Bizimle iletişime geç! 🤳</h1>

      <label>İsim</label>
      <input
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Mail Adresi</label>
      <input
        placeholder="Mail Adresi"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Mesaj</label>
      <textarea
        placeholder="Gönder"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Gönder
      </button>
    </form>
  );
};

export default Contact;
