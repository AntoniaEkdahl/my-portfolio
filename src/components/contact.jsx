import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contactContainer" id="contact">
        <div className="contactTitle">#contact</div>
        <h1 className="contactText">Get in touch with me via</h1>
        <div className="contactNavContainer">
          <a
            className="navLinkContact"
            href="https://www.linkedin.com/in/antonia-ekdahl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="navLinkContact"
            target="_blank"
            rel="noreferrer noopener"
            href="mailto:antoniaekdahl@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
