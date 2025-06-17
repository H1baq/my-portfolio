import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [success, setSuccess] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p><strong>Phone Number:</strong> +254 703681211</p>
          <p><strong>Location:</strong> Nairobi, Kenya</p>
         <ul className="contact-icons">
  <li>
    <a href="tel:+254703681211" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faPhoneAlt} /> +254 703681211
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
    </a>
  </li>
  <li>
    <a href="https://github.com/H1baq" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} /> GitHub
    </a>
  </li>
</ul>

        </div>

        <form 
          className="contact-form" 
          action="https://api.web3forms.com/submit" 
          method="POST"
          onSubmit={() => setSuccess(true)}
        >
          {/* REQUIRED hidden input */}
          <input type="hidden" name="access_key" value="2fe9344d-f829-4f58-b81b-028611a5ffeb" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>

          {success && <p className="success-msg">Thanks! I’ll get back to you soon 💌</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
