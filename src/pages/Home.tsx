import "./Home.css";
import homeImage from "../assets/homeimage.png";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>Automate, Engage, Grow—All on WhatsApp</h1>
            <p className="description">
              Automate chats, manage customers, and boost sales—without the
              hassle, all with SparkChats
            </p>
            <button className="cta-button">Start free trial</button>
          </div>
          <div className="image-container">
            <img
              src={homeImage}
              alt="SparkChats Dashboard"
              className="home-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
