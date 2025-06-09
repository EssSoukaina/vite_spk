import Home from "./Home";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";
import Pricing from "./Pricing";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <section id="home" className="page-section">
        <Home />
      </section>
      <section id="about" className="page-section">
        <About />
      </section>
      <section id="features" className="page-section">
        <Features />
      </section>
      <section id="pricing" className="page-section">
        <Pricing />
      </section>
      <section id="contact" className="page-section">
        <Contact />
      </section>
    </>
  );
}
