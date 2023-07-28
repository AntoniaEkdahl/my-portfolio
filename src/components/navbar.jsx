import "./NavBar.css";
import { Github, Linkedin } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <>
      <div className="navbar sticky">
        <div>
          <HashLink smooth to="/#home" className="navLink">
            Home
          </HashLink>
          <HashLink smooth to="/#about" className="navLink">
            About
          </HashLink>
          <HashLink smooth to="/#work" className="navLink">
            Work
          </HashLink>
          <HashLink smooth to="/#contact" className="navLink">
            Contact
          </HashLink>
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
