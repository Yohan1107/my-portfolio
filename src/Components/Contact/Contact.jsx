// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: '' });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ sending: false, ok: true, msg: 'Message sent successfully ✅' });
      formRef.current.reset();
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: 'Something went wrong ❌ Please try again.' });
      console.error(err);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to work together or just say hi, feel free to send me a message!</p>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" disabled={status.sending}>
          {status.sending ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {status.ok === true && <p className="form-success">{status.msg}</p>}
      {status.ok === false && <p className="form-error">{status.msg}</p>}
    </section>
  );
};

export default Contact;
