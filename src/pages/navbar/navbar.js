import "./navbar.scss";
import { NavLink } from "react-router-dom";
const navbar = ({ onNavbarTagClick }) => {
  return (
    <div id="navbar" className="py-3">
      <div className="container">
        <div className="row">
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
                to="#ethos"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Ethos
              </NavLink>
              <NavLink
                onClick={() => onNavbarTagClick('contact')}
                to="#contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
