import React from "react";
import "./Footer.css";
import logo from "../assets/sparkchats-logo.png";
import emailIcon from "../assets/mail.png";
import phoneIcon from "../assets/phone.png";
import locationIcon from "../assets/loc.png";
import fbLogo from "../assets/fb.png";
import igLogo from "../assets/ig.png";
import lkLogo from "../assets/lk.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo on the left */}
          <div className="footer-logo">
            <img src={logo} alt="SparkChats" className="logo-image" />
          </div>

          {/* Content on the right */}
          <div className="footer-content">
            <div className="footer-columns">
              {/* Quick Links */}
              <div className="footer-column">
                <h3 className="footer-heading">Quick links</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Legals */}
              <div className="footer-column">
                <h3 className="footer-heading">Legals</h3>
                <ul className="footer-links">
                  <li>Privacy policy</li>
                  <li>Terms of service</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-column contact-info">
                <h3 className="footer-heading">Our contact</h3>
                <ul className="footer-links">
                  <li className="contact-item flex items-center gap-2">
                    <img
                      src={emailIcon}
                      alt="Email"
                      style={{ width: "32px", height: "32px" }}
                    />
                    contact@hellospark.tech
                  </li>
                  <li className="contact-item flex items-center gap-2">
                    <img
                      src={phoneIcon}
                      alt="Phone"
                      style={{ width: "32px", height: "32px" }}
                    />
                    +212 655250854
                  </li>
                  <li className="contact-item flex items-center gap-2">
                    <img
                      src={locationIcon}
                      alt="Location"
                      style={{ width: "32px", height: "32px" }}
                    />
                    597 ALMASSAR Qi, Marrakech 40150
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <div className="copyright">Copyright 2025. All rights reserved.</div>
          <div className="social-links">
            <img
              src={fbLogo}
              alt="facebook"
              style={{ width: "24px", height: "24px" }}
            />
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <img
              src={igLogo}
              alt="insta"
              style={{ width: "24px", height: "24px" }}
            />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <img
              src={lkLogo}
              alt="linkdim"
              style={{ width: "24px", height: "24px" }}
            />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
