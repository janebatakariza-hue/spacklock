import { useState } from "react";
import "./spack.css";
import phone from "./phone.png";
import designForm from "./Design.png";
import Signup from "./signup";
import Login from "./Login";
function SpackLock() {
  const [page, setPage] = useState<"home" | "signup" | "login">("home");

 if (page === "signup") return <Signup onBack={() => setPage("home")} />;
 if (page === "login") return <Login onBack={() => setPage("home")} />;
  return (
    <body>
      <div id="home">
        <div className="hero-wrapper" style={{ position: "relative" }}>
          <header>
            <h1 className="na-heading">SPACKLOCK</h1>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#features">Features</a>
              <a href="#reviews">Reviews</a>
              <a href="#contacts">Contact Us</a>
            </div>
            <div className="nav-actions">
              <button className="button1" onClick={() => setPage("signup")}>
                Sign Up
              </button>
             <button className="button2" onClick={() => setPage("login")}>Login</button>
            </div>
          </header>

          <div className="herosection">
            <h1 className="smartone">
              Smart Fire detection <br />
              and prevention system
            </h1>
            <br />
            <p className="hero-description">
              Spack Lock is an intelligent fire monitoring system that detects{" "}
              <br />
              early signs of fire—heat, smoke, and gas—in real time.
              <br /> Using AI to analyze sensor and circuit data, it alerts the
              owner instantly
              <br />
              and can notify the fire brigade if a fire breaks out.
            </p>
            <div className="hero-buttons">
              <button className="getStarted">Get Started</button>
              <button className="downloadApp">Download App</button>
            </div>
          </div>
        </div>
        <div className="design">
          <img src={designForm} alt="design" />
          <button>About us</button>
        </div>
        <div className="ourmission">
          <div className="missiontext">
            <h1>
              <span className="our">OUR</span>{" "}
              <span className="mission">MISSION</span>
            </h1>
            <p>
              With intelligent embedded sensors, it continuously <br />
              monitors air quality in real time — detecting harmful <br />
              pollutants before they reach dangerous levels. When <br />{" "}
              pollution spikes, <span>AeroSense</span> instantly sends alerts
              and <br />
              sound warnings, empowering industries, organizations,
              <br /> and communities to act fast and keep our environment
              <br /> safe and clean
            </p>
          </div>
          <img src={phone} alt="phone" />
        </div>
        <div className="ready">
          <p>
            Ready To Unlock The Power Of <br />
            Intelligent Fire Prevention For <br />
            Your Household?
          </p>
        </div>
        <div className="touchone">
          <button className="touch">Getin Touch</button>
        </div>

        <footer
          id="contacts"
          style={{
            backgroundColor: "#8B3A0F",
            color: "white",
            padding: "60px 40px 20px",
            position: "relative",
            marginTop: 60,
          }}
        >
          {/* Wave top */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: 0,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
            }}
          >
            <svg
              viewBox="0 0 1200 60"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "60px", display: "block" }}
            >
              <path
                d="M0,0 C150,60 350,0 600,40 C850,80 1050,10 1200,50 L1200,60 L0,60 Z"
                fill="#8B3A0F"
              />
            </svg>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
              gap: "40px",
              maxWidth: "1200px",
              margin: "0 auto",
              paddingBottom: "40px",
            }}
          >
            <div>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                ⬡ SPARKLOCK
              </h2>
              <p
                style={{
                  color: "#f0d9c8",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                  fontSize: "14px",
                }}
              >
                AI-Powered Smart Fire Prevention System
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.638 5.902-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  letterSpacing: "1px",
                  fontSize: "15px",
                }}
              >
                NAV LINKS
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Features", href: "#features" },
                  { label: "Reviews", href: "#reviews" },
                  { label: "Contact Us", href: "#contacts" },
                ].map((link) => (
                  <li key={link.label} style={{ marginBottom: "14px" }}>
                    <a
                      href={link.href}
                      style={{
                        color: "#f0d9c8",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#f0d9c8")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                style={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  letterSpacing: "1px",
                  fontSize: "15px",
                }}
              >
                SERVICES
              </h3>
              <p
                style={{
                  color: "#f0d9c8",
                  fontSize: "14px",
                  lineHeight: "1.8",
                }}
              >
                Monitoring <br />
                Alerting <br />
                Protection
                <br />
                prevention and seek help
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  letterSpacing: "1px",
                  fontSize: "15px",
                }}
              >
                GET IN TOUCH
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <span>📍</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#f0d9c8",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Musanze, Rwanda (Near School)
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "16px",
                    alignItems: "center",
                  }}
                >
                  <span>📞</span>
                  <a
                    href="tel:+250788000000"
                    style={{
                      color: "#f0d9c8",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    +250 788 000 000
                  </a>
                </li>
                <li
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <span>✉️</span>
                  <a
                    href="mailto:sparklock@email.com"
                    style={{
                      color: "#f0d9c8",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    sparklock@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
              fontSize: "13px",
              color: "#f0d9c8",
            }}
          >
            <span>
              © 2025 Copyright, All Rights Reserved, Made By{" "}
              <strong>INNOVEX</strong> Team
            </span>
            <a
              href="/privacy-policy"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
      <div id="about">
        <p>this is the about us</p>
      </div>
    </body>
  );
}
export default SpackLock;
