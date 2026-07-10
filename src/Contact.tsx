import React from "react";
import "./spack.css";
import { MapPin, Phone, Mail } from "lucide-react";

function Contact({
  onBack,
  onGoToAbout,
  onGoToSignup,
  onGoToLogin,
}: {
  onBack: () => void;
  onGoToAbout: () => void;
  onGoToSignup: () => void;
  onGoToLogin: () => void;
}) {
  return (
    <div id="home">
      {/* NAVBAR */}
      <div className="hero-wrapper" style={{ position: "relative" }}>
        <header>
          <h1 className="na-heading" onClick={onBack}>
            SPACKLOCK
          </h1>
          <div className="nav-links">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
            >
              Home
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onGoToAbout();
              }}
            >
              About Us
            </a>
            <a href="#contact-section">Contact Us</a>
          </div>
          <div className="nav-actions">
            <button className="button1" onClick={onGoToSignup}>
              Sign Up
            </button>
            <button className="button2" onClick={onGoToLogin}>
              Login
            </button>
          </div>
        </header>

        {/* HERO */}
        <div className="herosection">
          <h1 className="smartone">
            Smart Fire Prevention <br />
            System
          </h1>
          <br />
          <p className="hero-description" style={{ color: "rgb(236,232,232)" }}>
            Spack Lock is an intelligent fire monitoring system that detects{" "}
            <br />
            early signs of fire — heat, smoke, and gas — in real time. <br />
            Using AI, it alerts the owner instantly and can notify the fire
            brigade.
          </p>
          <div className="hero-buttons">
            <button className="getStarted">Get Started →</button>
            <button className="downloadApp">⬇ Download App</button>
          </div>
        </div>
      </div>

      {/* CONTACT US HEADING */}
      <div id="contact-section" style={styles.contactHeadingWrapper}>
        <div style={styles.contactHeadingPill}>
          <span style={styles.contactHeadingIcon}>💬</span>
          <span style={styles.contactHeadingText}>Contact Us</span>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div style={styles.contactWrapper}>
        {/* LEFT: Info Card */}
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Contact Information</h3>
          <p style={styles.infoSubtitle}>Say something to start a live chat!</p>

          <div style={styles.infoItems}>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📞</span>
              <span>+250 345 678 345</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>✉️</span>
              <span>dariusniyonkuru@gmail.com</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📍</span>
              <span>Rwanda ,Nyabihu-Mukamira</span>
            </div>
          </div>

          {/* Decorative circles */}
          <div style={styles.decorCircle1} />
          <div style={styles.decorCircle2} />

          {/* Social Icons */}
          <div style={styles.socialRow}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.638 5.902-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          {/* Row 1 */}
          <div style={styles.formRow}>
            <div style={styles.formField}>
              <label style={styles.label}>First Name</label>
              <input
                style={styles.input}
                type="text"
                placeholder="First name"
              />
            </div>
            <div style={styles.formField}>
              <label style={styles.label}>Last Name</label>
              <input style={styles.input} type="text" placeholder="Last name" />
            </div>
          </div>

          {/* Row 2 */}
          <div style={styles.formRow}>
            <div style={styles.formField}>
              <label style={styles.label}>Email</label>
              <input
                style={styles.input}
                type="email"
                placeholder="your@email.com"
              />
            </div>
            <div style={styles.formField}>
              <label style={styles.label}>Phone Number</label>
              <input
                style={styles.input}
                type="tel"
                placeholder="+250 000 000 000"
              />
            </div>
          </div>

          {/* Subject */}
          <div style={{ marginBottom: "24px" }}>
            <label style={styles.label}>Select Subject?</label>
            <div style={styles.radioRow}>
              {["General Inquiry", "Technical Support", "General Reply"].map(
                (subject, i) => (
                  <label key={i} style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="subject"
                      defaultChecked={i === 0}
                      style={{ accentColor: "#8B3A0F", marginRight: "6px" }}
                    />
                    {subject}
                  </label>
                ),
              )}
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: "32px" }}>
            <label style={styles.label}>Message</label>
            <textarea
              style={styles.textarea}
              placeholder="Write your message..."
              rows={4}
            />
          </div>

          {/* Submit */}
          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              className="button1"
              style={{ width: "160px", height: "48px", fontSize: "15px" }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* WAVE DIVIDER */}
      <div style={{ marginTop: "60px", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1200 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "80px", display: "block" }}
        >
          <path
            d="M0,40 C200,80 400,0 600,40 C800,80 1000,10 1200,40 L1200,80 L0,80 Z"
            fill="#8B3A0F"
          />
        </svg>
      </div>

      {/* FOOTER */}
      <footer
        id="contacts"
        style={{
          backgroundColor: "#8B3A0F",
          color: "white",
          padding: "40px 40px 20px",
        }}
      >
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
                fontSize: "22px",
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
              When danger knocks ,Spacklock blocks
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
                  width="24"
                  height="24"
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
                  width="24"
                  height="24"
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
                  width="24"
                  height="24"
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
                { label: "Home", action: () => onBack() },
                { label: "About Us", action: () => onGoToAbout() },
                {
                  label: "Contact Us",
                  action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                },
              ].map((link) => (
                <li key={link.label} style={{ marginBottom: "12px" }}>
                  <button
                    onClick={link.action}
                    style={{
                      color: "#f0d9c8",
                      fontSize: "14px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "Arial, sans-serif",
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
              style={{ color: "#f0d9c8", fontSize: "14px", lineHeight: "1.8" }}
            >
              detecting <br />
              alerting <br />
              preventing <br />
              protecting <br />
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
                style={{ display: "flex", gap: "10px", marginBottom: "16px" }}
              >
                <MapPin size={16} color="#f0d9c8" style={{ flexShrink: 0 }} />
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
                  Nyabihu , Rwanda Coding Academy
                </a>
              </li>
              <li
                style={{ display: "flex", gap: "10px", marginBottom: "16px" }}
              >
                <Phone size={16} color="#f0d9c8" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+250780567769"
                  style={{
                    color: "#f0d9c8",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  +250 727983026
                </a>
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <Mail size={16} color="#f0d9c8" style={{ flexShrink: 0 }} />
                <a
                  href="mailto:sparklock@email.com"
                  style={{
                    color: "#f0d9c8",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  dariusniyonkuru@gmail.com
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

const styles: Record<string, React.CSSProperties> = {
  contactHeadingWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "60px 0 40px",
  },
  contactHeadingPill: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1.5px solid #8B3A0F",
    borderRadius: "40px",
    padding: "10px 28px",
    fontSize: "16px",
    color: "#8B3A0F",
    fontWeight: "600",
  },
  contactHeadingIcon: {
    fontSize: "18px",
  },
  contactHeadingText: {
    fontFamily: "Arial, sans-serif",
  },
  contactWrapper: {
    display: "flex",
    gap: "32px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 40px 60px",
    alignItems: "flex-start",
  },
  infoCard: {
    background: "#8B3A0F",
    borderRadius: "16px",
    padding: "36px 32px",
    color: "white",
    width: "300px",
    flexShrink: 0,
    position: "relative",
    overflow: "hidden",
    minHeight: "420px",
    display: "flex",
    flexDirection: "column",
  },
  infoTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "8px",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    zIndex: 1,
  },
  infoSubtitle: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "40px",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    zIndex: 1,
  },
  infoItems: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    flex: 1,
    position: "relative",
    zIndex: 1,
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
  },
  infoIcon: {
    fontSize: "18px",
    flexShrink: 0,
  },
  decorCircle1: {
    position: "absolute",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    bottom: "60px",
    right: "-40px",
    zIndex: 0,
  },
  decorCircle2: {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.12)",
    bottom: "-20px",
    right: "20px",
    zIndex: 0,
  },
  socialRow: {
    display: "flex",
    gap: "14px",
    marginTop: "40px",
    position: "relative",
    zIndex: 1,
  },
  socialIcon: {
    background: "rgba(255,255,255,0.15)",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
  },
  form: {
    flex: 1,
    padding: "10px 0",
  },
  formRow: {
    display: "flex",
    gap: "24px",
    marginBottom: "24px",
  },
  formField: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "8px",
    fontFamily: "Arial, sans-serif",
    fontWeight: "600",
  },
  input: {
    border: "none",
    borderBottom: "1.5px solid #ccc",
    outline: "none",
    padding: "8px 0",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    background: "transparent",
    color: "#333",
  },
  radioRow: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    color: "#555",
    fontFamily: "Arial, sans-serif",
    cursor: "pointer",
  },
  textarea: {
    border: "none",
    borderBottom: "1.5px solid #ccc",
    outline: "none",
    padding: "8px 0",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    background: "transparent",
    resize: "none",
    width: "100%",
    color: "#333",
  },
};

export default Contact;
