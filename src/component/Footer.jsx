import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-address">
        <div className="about-us-footer">
          <h3>ABOUT US</h3>
          <p>
            <a href="#about-us">who we are</a>
          </p>
          <p>
            <a href="#about-us">mission & vision & Values</a>
          </p>
          <p>
            <a href="#about-us">Read Blogs</a>
          </p>
          <p>
            <a href="#about-us">Former & Offices</a>
          </p>
          <p>
            <a href="#about-us">Police & guidelines</a>
          </p>
          <p>
            <a href="#about-us">FAQ</a>
          </p>
        </div>
        <div className="participate-footer">
          <h3>PARTICIPATE</h3>
          <p>
            <a href="#about-us">Participate In Our Project</a>
          </p>
          <p>
            <a href="#about-us">Our Partners</a>
          </p>
          <p>
            <a href="#about-us">Our Members</a>
          </p>
          <p>
            Register and Get informed about our project
          </p>
          <input type="text" name="email" placeholder="enter your email" />
          <button>Register Now</button>
        </div>
        <div className="contact-footer">
          <h3>GET IN TOUCH</h3>
          <div className="contact-footer-text">
            <p><a href="#">KG 06 street Gasanze, kigali</a></p>
            <p><a href="mailto:info@kca.org.rw">info@kca.org.rw</a></p>
            <p><a href="#">+(250) 781 963 232</a></p>
            <p><a href="#">PO BOX 4285 Kigali-Rwanda</a></p>
            <p>Connect with KCA on socials:</p>
          </div>
          <div className="contact-footer-icons">
            <div className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-developer">
        <h5>
          Copyright © Kigali Center for Autism Initiatives - KCA. All Right
          Reserved
        </h5>
        <p>
          developed by Umucyo<span>Hub</span>.Net
        </p>
      </div>
    </div>
  );
};

export default Footer;
