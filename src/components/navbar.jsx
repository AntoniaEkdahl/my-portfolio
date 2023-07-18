import { Link } from "react-router-dom";
import "./Navbar.css";
import { Github, Linkedin } from "react-bootstrap-icons";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="about" className="navLink">
            About
          </Link>
          <Link to="contact" className="navLink">
            Contact
          </Link>
          <Link to="work" className="navLink">
            Work
          </Link>
        </div>

        <div className="navSocial">
          <a
            href="https://github.com/AntoniaEkdahl"
            target="_blank"
            rel="noopener noreferrer"
            className="navLinkSocial"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/antonia-ekdahl/"
            target="_blank"
            rel="noopener noreferrer"
            className="navLinkSocial"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
