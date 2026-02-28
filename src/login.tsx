import { useState } from "react";

function Login({ onBack }: { onBack: () => void }) {
  const [form, setForm] = useState({ phone: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.password.trim()) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSuccess(true);
  };

  return (
    <div style={styles.page}>
      {/* Background decorative circles */}
      <div
        style={{
          ...styles.bgCircle,
          width: 420,
          height: 420,
          top: -80,
          left: -120,
          background: "rgba(160,90,50,0.25)",
        }}
      />
      <div
        style={{
          ...styles.bgCircle,
          width: 300,
          height: 300,
          bottom: -60,
          left: 60,
          background: "rgba(160,90,50,0.18)",
        }}
      />
      <div
        style={{
          ...styles.bgCircle,
          width: 200,
          height: 200,
          bottom: 40,
          right: -40,
          background: "rgba(139,58,15,0.3)",
        }}
      />

      {/* Card */}
      <div style={styles.card}>
        {/* LEFT: Form side */}
        <div style={styles.formSide}>
          <h1 style={styles.title}>Login</h1>

          {success ? (
            <div style={styles.successMsg}>
              ✅ Logged in successfully!
              <br />
              <button
                onClick={onBack}
                style={{
                  color: "#8B3A0F",
                  fontWeight: "bold",
                  marginTop: 12,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "inline-block",
                }}
              >
                ← Go back home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form} noValidate>
              {/* Phone */}
              <div style={styles.field}>
                <label style={styles.label}>Phone number:</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="+250 700 000 000"
                />
                {errors.phone && (
                  <span style={styles.error}>{errors.phone}</span>
                )}
              </div>

              {/* Password */}
              <div style={styles.field}>
                <label style={styles.label}>Password:</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <span style={styles.error}>{errors.password}</span>
                )}
              </div>

              <button
                type="submit"
                style={styles.btn}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#6e2d08")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#8B3A0F")
                }
              >
                Login
              </button>

              <p style={styles.signupText}>
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onBack();
                  }}
                  style={{ color: "#8B3A0F", fontWeight: "600" }}
                >
                  Sign Up
                </a>
              </p>

              <button type="button" onClick={onBack} style={styles.backBtn}>
                ← Back to home
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: Welcome panel */}
        <div style={styles.rightSide}>
          <div
            style={{
              ...styles.innerCircle,
              width: 340,
              height: 340,
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              ...styles.innerCircle,
              width: 240,
              height: 240,
              background: "rgba(255,255,255,0.1)",
            }}
          />

          <div style={styles.rightContent}>
            <h2 style={styles.welcomeTitle}>
              WELCOME TO
              <br />
              SPARKLOCK
            </h2>
            <p style={styles.welcomeText}>
              login to be able to access
              <br />
              our services and enjoy our
              <br />
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#e8e0db",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Georgia', serif",
    position: "relative",
    overflow: "hidden",
  },
  bgCircle: {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  card: {
    display: "flex",
    borderRadius: "24px",
    overflow: "hidden",
    background: "white",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    width: "100%",
    maxWidth: "860px",
    minHeight: "480px",
    position: "relative",
    zIndex: 1,
    margin: "20px",
  },
  formSide: {
    flex: 1,
    padding: "50px 50px 40px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#8B3A0F",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "36px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "18px",
  },
  label: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "6px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    border: "1.5px solid #ccc",
    borderRadius: "6px",
    padding: "10px 14px",
    fontSize: "14px",
    outline: "none",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box",
  },
  error: {
    color: "#c0392b",
    fontSize: "12px",
    marginTop: "4px",
    fontFamily: "Arial, sans-serif",
  },
  btn: {
    background: "#8B3A0F",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "13px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.2s",
    fontFamily: "Arial, sans-serif",
  },
  signupText: {
    textAlign: "center",
    marginTop: "16px",
    fontSize: "13px",
    color: "#555",
    fontFamily: "Arial, sans-serif",
  },
  backBtn: {
    background: "none",
    border: "none",
    color: "#999",
    cursor: "pointer",
    fontSize: "13px",
    marginTop: "10px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  successMsg: {
    textAlign: "center",
    marginTop: "60px",
    fontSize: "18px",
    color: "#333",
    lineHeight: "2",
    fontFamily: "Arial, sans-serif",
  },
  rightSide: {
    width: "320px",
    background: "#8B3A0F",
    borderRadius: "20px",
    margin: "16px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  innerCircle: {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  rightContent: {
    textAlign: "center",
    color: "white",
    position: "relative",
    zIndex: 1,
    padding: "20px",
  },
  welcomeTitle: {
    fontSize: "28px",
    fontWeight: "800",
    lineHeight: "1.3",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
  },
  welcomeText: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "rgba(255,255,255,0.9)",
    fontFamily: "Arial, sans-serif",
  },
};

export default Login;
