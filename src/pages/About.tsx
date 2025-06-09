import React from "react";
import "./About.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>How Sparkchats Works</h1>
        <p className="subtitle">
          From signup to your first automated message – faster than your morning
          coffee
        </p>
      </div>

      <div className="steps-row">
        {/* Step 1 */}
        <div className="step-item">
          <div className="step-header">
            <div className="step-indicator">
              <div className="step-square">1</div>
              <span className="step-number">Step 1</span>
            </div>
            <h3 className="step-title">Sign Up in Seconds</h3>
          </div>
          <div className="step-image-container image-1">
            <img src={about1} alt="Sign up process" className="step-image" />
          </div>
          <p className="step-description">
            Create your account with email or Google—no credit card needed
          </p>
        </div>

        {/* Step 2 */}
        <div className="step-item">
          <div className="step-header">
            <div className="step-indicator">
              <div className="step-square">2</div>
              <span className="step-number">Step 2</span>
            </div>
            <h3 className="step-title">Connect WhatsApp</h3>
          </div>
          <div className="step-image-container image-2">
            <img
              src={about2}
              alt="WhatsApp connection"
              className="step-image"
            />
          </div>
          <p className="step-description">
            Get API-approved in 24 hours with our step-by-step guide
          </p>
        </div>

        {/* Step 3 */}
        <div className="step-item">
          <div className="step-header">
            <div className="step-indicator">
              <div className="step-square">3</div>
              <span className="step-number">Step 3</span>
            </div>
            <h3 className="step-title">Start Messaging</h3>
          </div>
          <div className="step-image-container image-3">
            <img
              src={about3}
              alt="Messaging dashboard"
              className="step-image"
            />
          </div>
          <p className="step-description">
            Automate, broadcast, or chat—all from one dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
