import "./navbar.scss";
import { NavLink } from "react-router-dom";
const navbar = () => {
  return (
    <div id="navbar" className="py-3">
      <div className="container">
        <div class="row">
          <div class="col">
            <div className="d-flex align-items-center justify-content-evenly">
              <NavLink
                to="/nowplaying"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Now Playing
              </NavLink>
              <NavLink
                to="/ethos"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Ethos
              </NavLink>
              <NavLink
                to="/contact"
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
