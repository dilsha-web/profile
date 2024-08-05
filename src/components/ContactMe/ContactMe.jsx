import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container ">
      <h5>Contact Me</h5>

      <div className="contact-content full-height-section">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconurl="./images/contact/email.png"
            text="rameshi.wijesinghe@gmail.com"
          />
          <ContactInfoCard
            iconurl="./images/contact/linkedin.png"
            text="https://www.linkedin.com/in/dilsha-wijesinghe-3a5088193/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;