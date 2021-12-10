import LightWave from "../Waves/LightWave";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading">Contact Me</h2>
        <p className="contact__p">
          Whether you have questions or you would just like to say hello,
          contact me.
        </p>
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: utkarshnagar79@gmail.com">
            <span className="contact__text">utkarshnagar79@gmail.com</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/utkarsh79/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">Linkedin@utkarsh79</span>
          </a>
        </div>

        <div className="contact__option">
          <FaGithub className="contact__logo" size={45} />
          <a
            href="https://github.com/utkarsh79"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my github"
          >
            <span className="contact__text">Github@utkarsh79</span>
          </a>
        </div>
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;
