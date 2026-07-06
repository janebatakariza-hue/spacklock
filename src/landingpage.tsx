import { useState } from "react";
import "./spack.css";
import Signup from "./signup";
import Login from "./login";
import AboutUs from "./aboutus";
import Contact from "./Contact";

import {
  Flame,
  Bot,
  Bell,
  Truck,
  Zap,
  Shield,
  ArrowRight,
  Download,
} from "lucide-react";

function LandingPage() {
  const [page, setPage] = useState<
    "home" | "signup" | "login" | "about" | "Contact"
  >("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  if (page === "signup")
    return (
      <Signup
        onBack={() => setPage("home")}
        onGoToLogin={() => setPage("login")}
      />
    );
  if (page === "login")
    return (
      <Login
        onBack={() => setPage("home")}
        onGoToSignup={() => setPage("signup")}
      />
    );
  if (page === "about")
    return (
      <AboutUs
        onBack={() => setPage("home")}
        onGoToContact={() => setPage("Contact")}
        onGoToSignup={() => setPage("signup")}
        onGoToLogin={() => setPage("login")}
      />
    );
  if (page === "Contact")
    return (
      <Contact
        onBack={() => setPage("home")}
        onGoToAbout={() => setPage("about")}
        onGoToSignup={() => setPage("signup")}
        onGoToLogin={() => setPage("login")}
      />
    );

  return (
    <div id="home">
      {/* ── HERO ── */}
      <div className="hero-wrapper" style={{ position: "relative" }}>
        <header className="navBar">
          <h1 className="na-heading">SPACKLOCK</h1>
          <div className="nav-pill">
            <div className="nav-links">
              <a href="#home">Home</a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("about");
                }}
              >
                About Us
              </a>
              <a href="#features">Features</a>
              <a href="#reviews">Reviews</a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("Contact");
                }}
              >
                Contact Us
              </a>
            </div>
            <div className="nav-actions">
              <button className="button1" onClick={() => setPage("signup")}>
                Sign Up
              </button>
              <button className="button2" onClick={() => setPage("login")}>
                Login
              </button>
            </div>
          </div>
        </header>

        <div className="herosection">
          <h1 className="smartone">
            Smart Fire Detection <br />
            and Prevention System
          </h1>
          <br />
          <p className="hero-description">
            Spack Lock is an intelligent fire monitoring system that detects{" "}
            <br />
            early signs of fire—heat, smoke, and gas—in real time.
            <br />
            Using AI to analyze sensor and circuit data, it alerts the owner
            instantly
            <br />
            and can notify the fire brigade if a fire breaks out.
          </p>
          <div className="hero-buttons">
            <button className="getStarted" onClick={() => setPage("signup")}>
              Get Started <ArrowRight size={18} />
            </button>
            <button className="downloadApp">
              <Download size={18} /> Download App
            </button>
          </div>

          {/* Stats bar */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "40px",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              borderRadius: "14px",
              padding: "18px 36px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontWeight: "800",
                }}
              >
                500+
              </div>
              <div
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px" }}
              >
                Homes Protected
              </div>
            </div>
            <div
              style={{ width: "1px", background: "rgba(255,255,255,0.3)" }}
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontWeight: "800",
                }}
              >
                304+
              </div>
              <div
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px" }}
              >
                Fires Prevented
              </div>
            </div>
            <div
              style={{ width: "1px", background: "rgba(255,255,255,0.3)" }}
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontWeight: "800",
                }}
              >
                Instant
              </div>
              <div
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px" }}
              >
                Alert System
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div
        id="features"
        style={{
          padding: "120px 60px 80px",
          background: "white",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#a34d1b",
            fontWeight: "700",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          ✦ Features
        </p>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            color: "#1a1a1a",
            marginBottom: "60px",
          }}
        >
          What Makes <span style={{ color: "#a34d1b" }}>Spacklock</span>{" "}
          Different
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            {
              icon: <Flame size={36} color="#a34d1b" />,
              title: "Real-Time Monitoring",
              desc: "Continuously tracks heat, smoke, and gas levels 24/7 so no danger goes undetected.",
            },
            {
              icon: <Bot size={36} color="#a34d1b" />,
              title: "AI-Powered Detection",
              desc: "Advanced AI analyzes sensor data to distinguish false alarms from real threats.",
            },
            {
              icon: <Bell size={36} color="#a34d1b" />,
              title: "Instant Alerts",
              desc: "Get notified on your phone the moment danger is detected, wherever you are.",
            },
            {
              icon: <Truck size={36} color="#a34d1b" />,
              title: "Fire Brigade Notify",
              desc: "Automatically contacts the nearest fire brigade when a fire is confirmed.",
            },
            {
              icon: <Zap size={36} color="#a34d1b" />,
              title: "Fast Response",
              desc: "From detection to alert in under 3 seconds — speed that saves lives.",
            },
            {
              icon: <Shield size={36} color="#a34d1b" />,
              title: "Full Protection",
              desc: "Covers every corner of your home or building with our sensor network.",
            },
          ].map((f) => (
            <div
              key={f.title}
              style={{
                background: "#fdf7f4",
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "left",
                border: "1px solid #f0e0d6",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={{ marginBottom: "16px" }}>{f.icon}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  marginBottom: "10px",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.7" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW WE MAKE IT HAPPEN ── */}
      <div
        style={{
          padding: "80px 60px",
          background: "#fdf7f4",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#a34d1b",
            fontWeight: "700",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          ✦ Process
        </p>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            color: "#1a1a1a",
            marginBottom: "60px",
          }}
        >
          How We <span style={{ color: "#a34d1b" }}>Make It Happen</span>
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0px",
            maxWidth: "1000px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              step: "01",
              title: "Sense",
              desc: "Sensors detect heat, smoke & gas",
            },
            {
              step: "02",
              title: "Analyze",
              desc: "AI processes the data instantly",
            },
            {
              step: "03",
              title: "Alert",
              desc: "You get notified immediately",
            },
            {
              step: "04",
              title: "Act",
              desc: "Fire brigade is contacted if needed",
            },
          ].map((s, i) => (
            <div key={s.step} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ textAlign: "center", padding: "0 20px" }}>
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#a34d1b",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "800",
                    margin: "0 auto 16px",
                  }}
                >
                  {s.step}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666",
                    maxWidth: "120px",
                  }}
                >
                  {s.desc}
                </p>
              </div>
              {i < 3 && (
                <div
                  style={{
                    width: "60px",
                    height: "2px",
                    background: "#a34d1b",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <button
          className="getStarted"
          style={{ marginTop: "50px" }}
          onClick={() => setPage("signup")}
        >
          Order Now
        </button>
      </div>

      {/* ── LIVE DEMO ── */}
      <div
        style={{
          padding: "80px 60px",
          background: "white",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#a34d1b",
            fontWeight: "700",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          ✦ Demo
        </p>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            color: "#1a1a1a",
            marginBottom: "40px",
          }}
        >
          View A <span style={{ color: "#a34d1b" }}>Live Demo</span>
        </h2>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
            background: "#1a1a1a",
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "#a34d1b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                cursor: "pointer",
                fontSize: "28px",
              }}
            >
              ▶
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>
              Watch how Spacklock detects and prevents fire in real time
            </p>
          </div>
        </div>
      </div>

      {/* ── CLIENT SUCCESS STORIES ── */}
      <div
        id="reviews"
        style={{
          padding: "80px 60px",
          background: "#fdf7f4",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#a34d1b",
            fontWeight: "700",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          ✦ Reviews
        </p>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            color: "#1a1a1a",
            marginBottom: "60px",
          }}
        >
          Client <span style={{ color: "#a34d1b" }}>Success</span> Stories
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            {
              name: "Jean Pierre",
              role: "Homeowner, Kigali",
              review:
                "Spacklock alerted me within seconds when my kitchen started overheating. It literally saved my home. I recommend it to every family.",
            },
            {
              name: "Amina Uwase",
              role: "Factory Manager, Musanze",
              review:
                "We installed Spacklock across our entire facility. The AI detection has been flawless — no false alarms, just accurate real-time monitoring.",
            },
            {
              name: "Eric Nshuti",
              role: "School Principal, Huye",
              review:
                "Having Spacklock in our school gives us peace of mind. The instant alerts mean we can always act before anything escalates.",
            },
          ].map((r) => (
            <div
              key={r.name}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "left",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: "1.8",
                  marginBottom: "24px",
                }}
              >
                "{r.review}"
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#a34d1b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: "700",
                      fontSize: "15px",
                      color: "#1a1a1a",
                    }}
                  >
                    {r.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "#888" }}>
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ padding: "80px 60px", background: "white" }}>
        <p
          style={{
            color: "#a34d1b",
            fontWeight: "700",
            letterSpacing: "2px",
            fontSize: "13px",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          ✦ FAQs
        </p>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "800",
            color: "#1a1a1a",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Frequently <span style={{ color: "#a34d1b" }}>Asked</span> Questions
        </h2>
        <div style={{ maxWidth: "750px", margin: "0 auto" }}>
          {[
            {
              q: "How does Spacklock detect fire?",
              a: "Spacklock uses a combination of heat, smoke, and gas sensors combined with AI analysis to detect early signs of fire before it spreads.",
            },
            {
              q: "How quickly does it send alerts?",
              a: "Alerts are sent within 3 seconds of detection directly to your phone, so you can act immediately no matter where you are.",
            },
            {
              q: "Does it automatically contact the fire brigade?",
              a: "Yes. If a fire is confirmed, Spacklock can automatically notify your nearest fire brigade so help is on the way without delay.",
            },
            {
              q: "Is it easy to install?",
              a: "Absolutely. Our team handles the full installation and setup, usually completed within a few hours with minimal disruption.",
            },
            {
              q: "Any question?",
              a: "Feel free to reach us at sparklock@email.com or call +250 788 000 000 and our team will be happy to help.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid #eee", padding: "20px 0" }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  fontFamily: "jost, sans-serif",
                }}
              >
                {faq.q}
                <span style={{ fontSize: "22px", color: "#a34d1b" }}>
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <p
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: "1.8",
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
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
                style={{ color: "white", textDecoration: "none" }}
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
                style={{ color: "white", textDecoration: "none" }}
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
                {
                  label: "Home",
                  action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                },
                { label: "About Us", action: () => setPage("about") },
                { label: "Contact Us", action: () => setPage("Contact") },
              ].map((link) => (
                <li key={link.label} style={{ marginBottom: "14px" }}>
                  <button
                    onClick={link.action}
                    style={{
                      color: "#f0d9c8",
                      fontSize: "14px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "jost, sans-serif",
                      padding: 0,
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "#f0d9c8")
                    }
                  >
                    {link.label}
                  </button>
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
              Monitoring <br /> Alerting <br /> Protection <br /> Prevention and
              seek help
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
            © 2026 Copyright, All Rights Reserved, Made By{" "}
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
  );
}

export default LandingPage;
