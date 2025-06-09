import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";
import logo from "../assets/sparkchats-logo.png";
import Footer from "./Footer";
import React from "react";

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    // Close menu on route change
    setMenuOpen(false);
  }, [location]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.location.hash = `#${id}`;
    }
  };

  return (
    <div className="layout">
      <header className="navbar-container">
        <nav className="navbar">
          {/* Hamburger (only visible on small screens) */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* Logo on the right in mobile */}
          <Link to="/" className="logo-link" onClick={() => scrollTo("home")}>
            <img src={logo} alt="SparkChats" className="navbar-logo" />
          </Link>

          {/* Desktop Nav */}
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button
              onClick={() => scrollTo("home")}
              className={`nav-link ${
                location.hash === "#home" || location.hash === ""
                  ? "active"
                  : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("about")}
              className={`nav-link ${
                location.hash === "#about" ? "active" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollTo("features")}
              className={`nav-link ${
                location.hash === "#features" ? "active" : ""
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className={`nav-link ${
                location.hash === "#pricing" ? "active" : ""
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={`nav-link ${
                location.hash === "#contact" ? "active" : ""
              }`}
            >
              Contact
            </button>
          </div>

          <div className="auth-links mobile-auth">
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
            <Link to="/login" className="login-link">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
