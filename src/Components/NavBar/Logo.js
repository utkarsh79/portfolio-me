import { HashLink } from "react-router-hash-link";
import logo from "../../images/UN.png";

function Logo({ clicked, setClicked }) {
  return (
    <div className="header__logo">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <img src={logo} alt="Brand Logo" width="50" height="50" />
      </HashLink>
    </div>
  );
}

export default Logo;
