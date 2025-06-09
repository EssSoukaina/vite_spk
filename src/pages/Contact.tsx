import React from "react";
import "./Contact.css";
import avatar from "../assets/avatar.png";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h1>Trusted by Businesses Worldwide</h1>
        <p className="testimonials-subheading">See what our customers say</p>

        <div className="testimonials-grid">
          {/* Row 1 */}
          <div className="testimonial-row">
            {/* Testimonial 1 */}
            <div className="testimonial-box">
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <p>
                    Sparkchat turned our chaotic WhatsApp into an organized
                    sales machine. 40% more orders, zero missed messages.
                  </p>
                  <div className="testimonial-author">
                    <strong>Sarah K.</strong>
                    <span>TechWave</span>
                  </div>
                  <img
                    src={avatar}
                    alt="Sarah"
                    className="testimonial-avatar"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-box">
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <p>
                    65% faster ticket resolution with the smart inbox. Our
                    customers actually compliment response times now!
                  </p>
                  <div className="testimonial-author">
                    <strong>Nadia K.</strong>
                    <span>Atlas Digital</span>
                  </div>
                  <img
                    src={avatar}
                    alt="Nadia"
                    className="testimonial-avatar"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-box">
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <p>
                    15 hours saved weekly per client on campaigns. The analytics
                    prove ROI better than any platform we've used.
                  </p>
                  <div className="testimonial-author">
                    <strong>Amir Z</strong>
                    <span>Dukkana</span>
                  </div>
                  <img
                    src={avatar}
                    alt="Nadia"
                    className="testimonial-avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h1>Frequently asked questions</h1>
        <p className="faq-subheading">
          Here are the most asked questions based on our users
        </p>

        <div className="faq-grid">
          {/* FAQ Row 1 */}
          <div className="faq-row">
            <div className="faq-box">
              <h3>Is my data safe?</h3>
              <p>
                Of course! Your data is protected as a safe. SparkChats is an
                official Meta partner, so everything is 100% legal and secure.
              </p>
            </div>

            <div className="faq-box">
              <h3>How do I connect my number?</h3>
              <p>
                Too simple! Create your account, click on "Connect with
                Facebook", follow the steps and voila, your WhatsApp Business
                account is ready for action!
              </p>
            </div>

            <div className="faq-box">
              <h3>Is my number at risk of being banned?</h3>
              <p>
                No, not at all! SparkChats is 100% approved by Meta! If you
                follow WhatsApp's rules, your number remains quiet and active.
              </p>
            </div>
          </div>

          {/* FAQ Row 2 */}
          <div className="faq-row">
            <div className="faq-box">
              <h3>Can I integrate Sparkchats with other tools or systems?</h3>
              <p>
                Yes! SparkChats integrates with a full suite of tools: CRM,
                sales pipelines, and your own internal systems.
              </p>
            </div>

            <div className="faq-box">
              <h3>Can I test Sparkchats before subscribing?</h3>
              <p>
                Yes of course! We offer you a free trial to discover SparkChats
                and test the magic for yourself.
              </p>
            </div>

            <div className="faq-box">
              <h3>Can I use Sparkchats on multiple devices?</h3>
              <p>
                Yes, of course! Whether it's your phone, your computer or your
                tablet, SparkChats follows you everywhere!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-heading">Still have other questions?</h2>
            <p className="contact-subheading">
              We understand. Let's get in touch directly with our team
            </p>
          </div>
          <button className="contact-button">
            <span className="button-label">Contact us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
