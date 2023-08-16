import "./navbar.scss";
import { NavLink } from "react-router-dom";
const navbar = ({ onNavbarTagClick }) => {
  return (
    <div id="navbar" className="py-3 h-100">
      <div className="container  h-100">
        <div className="row h-100 align-items-center flex-column">
          <div className="col">
            <div className="d-flex align-items-center justify-content-evenly">
              <NavLink
                onClick={() => onNavbarTagClick('nowPlaying')}
                to="/nowplaying"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Now Playing
              </NavLink>
              <NavLink
                onClick={() => onNavbarTagClick('ethos')}
                to="ethos"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Ethos
              </NavLink>
              <NavLink
                onClick={() => onNavbarTagClick('contact')}
                to="contact"
                className="d-none d-md-block"
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-end">
          <NavLink
                onClick={() => onNavbarTagClick('contact')}
                to="contact"
                className="d-md-none d-block"
              >
                Contact
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
