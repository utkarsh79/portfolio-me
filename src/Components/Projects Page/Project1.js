import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import zoomcar_pic from "../../images/Zoomcar.PNG";

function Project1({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image"
          src={zoomcar_pic}
          srcset={zoomcar_pic}
          sizes="50vw"
          alt="Zoomcar Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Zoomcar Clone</h3>
          <p className="project__description project__body">
            Zoomcar is an online platform that helps users book self-drive cars
            on a rental basis. We recreated the process of booking a car with
            the help of local storage to store the data.
          </p>
          <p className="project__tech project__body">
            &gt; HTML · CSS · JavaScript · LocalStorage
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Jagadish1217/ZoomCar-Proj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
