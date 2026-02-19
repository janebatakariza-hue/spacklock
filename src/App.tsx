import "./App.css";
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
      </div>
    </body>
  );
}
