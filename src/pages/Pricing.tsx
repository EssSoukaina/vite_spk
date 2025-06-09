import React from "react";
import "./Pricing.css";
import securityImage from "../assets/security.png";
import rocketIcon from "../assets/rocket.png";
import brainIcon from "../assets/brain.png";
import chartIcon from "../assets/chart.png";
import supportIcon from "../assets/support.png";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {/* Top Section */}
        <div className="top-section">
          <div className="text-content">
            <h1>Built for Your Success</h1>
            <p className="subtitle">
              Powerful tools designed around your business needs
            </p>

            <ul className="features-list">
              <li>
                <img src={rocketIcon} alt="Rocket" className="feature-icon" />
                <strong>Fastest Onboarding</strong>
              </li>
              <li>
                <img src={brainIcon} alt="Brain" className="feature-icon" />
                <strong>Smarter Automation</strong>
              </li>
              <li>
                <img src={chartIcon} alt="Chart" className="feature-icon" />
                <strong>Actionable Analytics</strong>
              </li>
              <li>
                <img src={supportIcon} alt="Support" className="feature-icon" />
                <strong>Real Human Support</strong>
              </li>
            </ul>
          </div>

          <div className="image-content">
            <img
              src={securityImage}
              alt="Security"
              className="security-image"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <h2>Grow with WhatsApp</h2>
          <p>Try Sparkchat free for 14 days</p>
          <button className="cta-button">Start free trial</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
