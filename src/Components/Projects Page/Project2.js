import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";
import frontedmasters_pic from "../../images/Fronted_masters.PNG";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            FrontEnd Masters Clone
          </h3>
          <p className="project__description project__body">
            This project is a clone of Frontend-Masters. Frontend Masters is an
            Edtech Website that lets users take courses related to frontend
            technologies like CSS, React, Angular, Vue, and many more.
          </p>
          <p className="project__tech project__body">
            &gt;HTML · CSS ·Javascript · Express · Node.js · MongoDB · Mongoose
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/aniketT23/FrontEnd-Master-2.0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src={frontedmasters_pic}
          srcset={frontedmasters_pic}
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
