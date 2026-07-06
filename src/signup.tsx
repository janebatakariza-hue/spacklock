import { useState } from "react";

function Signup({
  onBack,
  onGoToLogin,
}: {
  onBack: () => void;
  onGoToLogin: () => void;
}) {
  const [form, setForm] = useState({
    fullName: "",

    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
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
      {/* Decorative background circles */}

      {/* Card */}
      <div style={styles.card}>
        {/* Left: Form */}
        <div style={styles.formSide}>
          <h1 style={styles.title}>Sign Up</h1>

          {success ? (
            <div style={styles.successMsg}>
              🎉 Account created successfully! <br />
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
                }}
              >
                ← Go back home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form} noValidate>
              <div style={styles.field}>
                <label style={styles.label}>Full name:</label>
                <input
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <span style={styles.error}>{errors.fullName}</span>
                )}
              </div>

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

              <div style={styles.field}>
                <label style={styles.label}>Confirm password:</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <span style={styles.error}>{errors.confirmPassword}</span>
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
                Signup
              </button>

              <p style={styles.loginText}>
                Already have an account?{" "}
                <button
                  onClick={onGoToLogin}
                  style={{
                    color: "#8B3A0F",
                    fontWeight: "600",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Login
                </button>
              </p>
              <p style={styles.loginText}>
                <button
                  onClick={onBack}
                  style={{
                    color: "#555",
                    fontWeight: "600",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  ← Back to Home
                </button>
              </p>
            </form>
          )}
        </div>

        {/* Right: Decorative panel */}
        <div style={styles.rightSide}>
          {/* Inner decorative circles */}
          <div
            style={{
              ...styles.innerCircle,
              width: 340,
              height: 340,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              ...styles.innerCircle,
              width: 240,
              height: 240,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
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
              signup to be able to access our
              <br />
              services and lock danger
              <br />
              before it sparks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
const RING_PALETTE = ["#8B3A0F", "#C98459", "#E9CBB0"];
const RING_COUNT = 9; // total number of bands — raise this for more rings
const RING_WIDTH = 40; // px thickness of each band

function buildRings(center: string) {
  const stops: string[] = [];
  for (let i = 0; i < RING_COUNT; i++) {
    const color = RING_PALETTE[i % RING_PALETTE.length];
    const start = i * RING_WIDTH;
    const end = (i + 1) * RING_WIDTH;
    stops.push(`${color} ${start}px, ${color} ${end}px`);
  }
  const fadeStart = RING_COUNT * RING_WIDTH;
  return `radial-gradient(circle at ${center}, ${stops.join(
    ", ",
  )}, transparent ${fadeStart}px, transparent 100%)`;
}

const cornerPattern = `${buildRings("105% 100%")}, ${buildRings(
  "-5% 0%",
)}, #ECE7E4`;

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Georgia', serif",
    position: "relative",
    overflow: "hidden",
    background: cornerPattern,
  },

  card: {
    display: "flex",
    borderRadius: "24px",
    overflow: "hidden",
    background: "white",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    width: "100%",
    maxWidth: "860px",
    minHeight: "520px",
    position: "relative",
    zIndex: 1,
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
    marginBottom: "28px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "14px",
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
    transition: "border 0.2s",
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
  loginText: {
    textAlign: "center",
    marginTop: "16px",
    fontSize: "13px",
    color: "#555",
    fontFamily: "Arial, sans-serif",
  },
  successMsg: {
    textAlign: "center",
    marginTop: "60px",
    fontSize: "18px",
    color: "#333",
    lineHeight: "2",
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

export default Signup;
