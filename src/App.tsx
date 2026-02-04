import "./spack.css";
import phone from "./phone.png";
import footer from "./Footer.png";
import designForm from "./Design.png";

function SpackLock() {
  return (
    <div className="body">
      <header>
        <nav className="nav-content">
          <h1 className="na-heading">SPARKLOCK</h1>
          <div className="navBar">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#features">Features</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact Us</a>
            <button className="button1">SignUp</button>
            <button className="button2">Login</button>
          </div>
        </nav>
      </header>

      {/* Move herosection OUTSIDE of header */}
      <div className="herosection">
        <h1 className="smartone">
          Smart Pollution Detection <br />
          for a Cleaner Future
        </h1>
        <p className="hero-description">
          AeroSense is an intelligent air monitoring system that uses embedded
          <br />
          sensors to track pollution levels in real time. When pollution <br />
          reaches unsafe levels, the system sends automatic alerts.
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
            pollutants before they reach dangerous levels. When <br /> pollution
            spikes, <span>AeroSense</span> instantly sends alerts and <br />
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
        <img src={footer} alt="footer" />
      </footer>
    </div>
  );
}

export default SpackLock;
