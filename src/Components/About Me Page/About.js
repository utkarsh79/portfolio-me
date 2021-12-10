import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";
import profile_pic from "../../images/professional_Profile_pic_v2-modified.png";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section id="about" className="about">
        <div data-aos="fade-right" className="about__text">
          <h2 className="about__heading">About Me</h2>
          <p className="about__body">
            Hello! My name is Utkarsh Nagar. I am dedicated and motivated full
            stack developer with a Bachelor’s degree in{" "}
            <span className="about__specialText">Information Technology.</span>
            An ambitious software engineer with hands-on technical training in a
            junior-level front-end software engineering role.
          </p>
          <br />
          <p className="about__body">
            You can reach out to me on my{" "}
            <NavHashLink className="about__specialText" smooth to="#contact">
              contact
            </NavHashLink>{" "}
            page
          </p>
        </div>
        <img
          className="about__headshot"
          src={profile_pic}
          alt="Brand Logo"
          width="300"
          height="300"
        />
        <LightWave />
      </section>
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-heroku-plain-wordmark technology"></i>
                <i className="devicon-git-plain-wordmark colored technology"></i>
                <i className="devicon-bootstrap-plain-wordmark technology"></i>
                <i className="devicon-css3-plain-wordmark colored technology"></i>
                <i className="devicon-sass-original  technology"></i>
                <i className="devicon-html5-plain-wordmark colored technology"></i>
                <i className="devicon-ruby-plain-wordmark technology"></i>
                <i className="devicon-javascript-plain colored technology"></i>
                <i className="devicon-postgresql-plain-wordmark  technology"></i>
                <i className="devicon-webpack-plain colored technology"></i>
                <i className="devicon-rails-plain-wordmark technology"></i>
                <i className="devicon-react-plain-wordmark colored technology"></i>
                <i className="devicon-php-plain technology"></i>
                <i className="devicon-laravel-plain-wordmark colored technology"></i>
                <i className="devicon-docker-plain-wordmark technology"></i>
                <i className="devicon-mysql-plain-wordmark colored technology"></i>
                <i className="devicon-github-original technology"></i>
                <i className="devicon-amazonwebservices-plain-wordmark colored technology"></i>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
