import "./spack.css";
import phone from "./phone.png";
import designForm from "./Design.png";
function SpackLock() {
  return (
    <body>
      <div id="home">
        <header>
          <nav className="nav-content">
            <h1 className="na-heading">SPACKLOCK</h1>
            <div className="navBar">
              <a href="#home">Home</a>
              <a href="#about">AboutUs</a>
              <a href="#features">Features</a>
              <a href="#reviews">Reviews</a>
              <a href="#contacts">Contacts</a>
              <button className="button1">SignUp</button>
              <button className="button2">Login</button>
            </div>
          </nav>
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

        <footer>
          <h2 className="footer-brand">SPACKLOCK</h2>
        </footer>
      </div>
      <div id="about">
        <p>this is the about us</p>
      </div>
    </body>
  );
}
export default SpackLock;
