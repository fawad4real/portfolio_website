import React from "react";
import { Link } from "react-router-dom";
const Ethos = () => {
  return (
    <div className="ethos-wrapper">
      <Link to="/" id="ethos" className="ethos">
        <h2>
          TNEG is a motion picture studio whose goal is to create a black cinema
          as culturally, socially, and economically central to the 21st century
          as was black music to the 20th century.
        </h2>
      </Link>
    </div>
  );
};

export default Ethos;
