import { Link } from "react-router-dom";
import "./ResumeButton.css";
import resume from "../../images/nj2_043_Utkarsh_Nagar.pdf";

function ResumeButton() {
  return (
    <Link className="navItem resumeButton" to={resume} target="_blank">
      <h3>Resume</h3>
    </Link>
  );
}

export default ResumeButton;
