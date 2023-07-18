import React, { useState } from "react";
import axios from "axios";
import "./Mailer.scss";
/* import sendMail from "../../../../backend/sendEmail.js";
 */
function Mailer() {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendEmail = () => {
    const emailData = {
      from: "a.rohde.ferreira@gmail.com",
      to: recipient,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    };

    axios
      .post("/send-email", emailData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setRecipient("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <h1>Mailer</h1>
      <form>
        <label htmlFor="recipient">Destinataire:</label>
        <input
          type="email"
          id="recipient"
          value={recipient}
          onChange={handleRecipientChange}
        />

        <label htmlFor="subject">Objet:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} />

        <button type="button" onClick={handleSendEmail}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Mailer;
