import "./PurpleArrows.css";
import { NavHashLink } from "react-router-hash-link";
import purpuleArrow from "../../images/bottom_purple_arrows.svg";

function PurpleArrows() {
  return (
    <NavHashLink
      className="purpleArrows"
      to="/#about"
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
    >
      <img
        className="purpleArrows"
        src={purpuleArrow}
        alt="bottom puruple arrows"
      />
    </NavHashLink>
  );
}

export default PurpleArrows;
