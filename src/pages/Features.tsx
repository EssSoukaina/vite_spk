import React from "react";
import "./Features.css";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

const Features = () => {
  return (
    <div className="features-page">
      <div className="features-header">
        <h1>Features</h1>
        <p>Discover the Power of Automation for Your Business Communication</p>
      </div>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-item">
          <div className="feature-image-container">
            <img src={feature1} alt="Automation" className="feature-image" />
          </div>
          <div className="feature-text">
            <h3>Automation</h3>
            <p>Chatbots, quick replies, and workflows</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature-item">
          <div className="feature-image-container">
            <img src={feature2} alt="Smart Inbox" className="feature-image" />
          </div>
          <div className="feature-text">
            <h3>Smart Inbox</h3>
            <p>Unified team collaboration</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature-item">
          <div className="feature-image-container">
            <img src={feature3} alt="Broadcasting" className="feature-image" />
          </div>
          <div className="feature-text">
            <h3>Broadcasting</h3>
            <p>Send bulk messages with one click</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="feature-item">
          <div className="feature-image-container">
            <img src={feature4} alt="Analytics" className="feature-image" />
          </div>
          <div className="feature-text">
            <h3>Analytics</h3>
            <p>Track opens, replies, and conversions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
