import React from "react";
import { Link } from "react-router-dom";
const Ethos = () => {
  return (
    <div className="ethos-wrapper">
      <Link to="/" id="ethos" className="ethos">
        <h2 class="ethos">
          ZWRTNWS is een door cultuur gedreven, original content en nieuws
          platform met als doel te inspireren, provoceren en te vermaken.
        </h2>
      </Link>
    </div>
  );
};

export default Ethos;
