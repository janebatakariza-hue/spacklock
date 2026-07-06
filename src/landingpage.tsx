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
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function LandingPage() {
  const [page, setPage] = useState<
    "home" | "signup" | "login" | "about" | "Contact"
  >("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const featureItems = [
    {
      num: 1,
      title: "Realtime",
      subtitle: "Monitoring",
      desc: "Continuously tracks heat, smoke, and gas levels 24/7 so no danger goes undetected, giving you full visibility into your space at all times.",
    },
    {
      num: 2,
      title: "Instants",
      subtitle: "Monitoring",
      desc: "Get notified on your phone the instant unusual activity is detected, wherever you are, so you can respond right away.",
    },
    {
      num: 3,
      title: "Alarms",
      subtitle: "Daily Warning",
      desc: "Receive daily summaries and warning alerts so you always know the current status of every sensor in your network.",
    },
    {
      num: 4,
      title: "Alerts",
      subtitle: "Monitoring",
      desc: "Automatically contacts the nearest fire brigade and your emergency contacts the moment a real threat is confirmed.",
    },
  ];
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
        </div>

        {/* Floating stats card — overlaps hero + features */}
        <div
          style={{
            position: "absolute",
            bottom: "-56px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            gap: "40px",
            background: "white",
            borderRadius: "20px",
            padding: "26px 48px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            width: "min(90%, 700px)",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#a34d1b",
                fontSize: "26px",
                fontWeight: "800",
              }}
            >
              500+
            </div>
            <div style={{ color: "#555", fontSize: "13px" }}>
              Homes Protected
            </div>
          </div>
          <div style={{ width: "1px", background: "#eee" }} />
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#a34d1b",
                fontSize: "26px",
                fontWeight: "800",
              }}
            >
              304+
            </div>
            <div style={{ color: "#555", fontSize: "13px" }}>
              Fires Prevented
            </div>
          </div>
          <div style={{ width: "1px", background: "#eee" }} />
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#1a1a1a",
                fontSize: "26px",
                fontWeight: "800",
              }}
            >
              Instant
            </div>
            <div style={{ color: "#555", fontSize: "13px" }}>Alert System</div>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div
        id="features"
        style={{
          padding: "120px 60px 140px",
          background: "white",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #f0d9c8",
              borderRadius: "40px",
              padding: "10px 24px",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: "1.5px solid #a34d1b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Star size={12} color="#a34d1b" />
            </span>
            <span
              style={{ color: "#a34d1b", fontWeight: "700", fontSize: "15px" }}
            >
              Features
            </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            maxWidth: "1100px",
            margin: "0 auto",
            alignItems: "start",
          }}
        >
          {/* Left: heading + active feature card */}
          <div>
            <h2
              style={{
                fontSize: "56px",
                fontWeight: "900",
                color: "#1a1a1a",
                marginBottom: "40px",
              }}
            >
              Features
            </h2>
            <div
              style={{
                background: "white",
                border: "1px solid #eee",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                minHeight: "220px",
              }}
            >
              <h3
                style={{
                  color: "#a34d1b",
                  fontSize: "22px",
                  fontWeight: "800",
                  marginBottom: "16px",
                }}
              >
                {featureItems[activeFeature].title}{" "}
                {featureItems[activeFeature].subtitle}
              </h3>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                {featureItems[activeFeature].desc}
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              <button
                onClick={() => setActiveFeature((activeFeature + 3) % 4)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1.5px solid #a34d1b",
                  background: "white",
                  color: "#a34d1b",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setActiveFeature((activeFeature + 1) % 4)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1.5px solid #a34d1b",
                  background: "white",
                  color: "#a34d1b",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right: 2x2 staggered numbered cards with cross accent */}
          <div style={{ position: "relative", height: "520px" }}>
            <div
              style={{
                position: "absolute",
                top: "190px",
                left: "210px",
                width: "150px",
                height: "40px",
                background: "#a34d1b",
                borderRadius: "12px",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "165px",
                left: "255px",
                width: "40px",
                height: "150px",
                background: "#a34d1b",
                borderRadius: "12px",
                zIndex: 0,
              }}
            />
            {featureItems.map((item, i) => {
              const positions = [
                { top: "0px", left: "0px" },
                { top: "220px", left: "0px" },
                { top: "-10px", left: "260px" },
                { top: "210px", left: "260px" },
              ];
              return (
                <div
                  key={item.num}
                  style={{
                    position: "absolute",
                    top: positions[i].top,
                    left: positions[i].left,
                    width: "230px",
                    background: "white",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#a34d1b",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    {item.num}
                  </div>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "800",
                      color: "#1a1a1a",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ color: "#a34d1b", fontSize: "14px" }}>
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
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
