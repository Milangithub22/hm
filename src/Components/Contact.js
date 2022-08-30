import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ data }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_9unqvsk";
      const templateId = "template_oxka74s";
      const userId = "-ungpDr_ijKgDlmUn";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>{data ? "Get In Touch." : "Ponerse en contacto"}</span>
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <div>
            <label htmlFor="contactName">
              {data ? "Name" : "Nobre"} <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder={data ? "Your Name" : "Su Nombre"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contactEmail">
              {data ? "Email" : "Correo electrónico"}{" "}
              <span className="required">*</span>
            </label>
            <input
              type="email"
              placeholder={
                data ? "Your email address" : "Su correo electrónico"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="contactMessage">
              {data ? "Message" : "Mensaje"}
              <span className="required">*</span>
            </label>
            <textarea
              placeholder={data ? "Your message" : "Su mensaje"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div>
            <button className="submit" onClick={submit}>
              {data ? "Submit" : "Entregar"}
            </button>
            <span>
              {emailSent && data
                ? "Thank you for your message."
                : emailSent && data === false
                ? "Gracias por su mensaje"
                : null}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
