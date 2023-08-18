import React, { useState, useEffect } from "react";
import "./homepage.scss";
import Background from "./background";
import { Link, Route, Routes } from "react-router-dom";
import Frontcarousel from "./Frontcarousel";
import Contact from "./Contact";
import Ethos from "./Ethos";
import { NowPlaying } from "./NowPlaying";
import constants from "../../assets/Config/constant";
const Homepage = ({ activeLink }) => {
  const [activeLinkCurrent, setActiveLinkCurrent] = useState(activeLink);

  useEffect(() => {
   // console.log("Active Link Coming From above: ", activeLink);
    //console.log("Active Link Below: ", activeLinkCurrent);
    setActiveLinkCurrent(activeLink);
    activeLink = "homepage";
  }, [activeLink]);

  // console.warn("imageURLs", imageURLs);

  useEffect(() => {
    if (activeLinkCurrent === "homepage") {
      const imgRef = document.getElementById("hiddenText");

      function toggleVisibility() {
        //console.log("Toggling visibility");
        imgRef.style.display =
          imgRef.style.display === "none" ? "block" : "none";
      }

      const timeset = setInterval(toggleVisibility, 7000);

      return () => {
        clearInterval(timeset);
      };
    }
  }, [activeLinkCurrent]); // Make sure to include activeLinkCurrent in the dependency array

  const textArray = [
    '"Codes within codes, subjectivities enfolded in ciphers, 45 revolutions per minute at 24 frames per second, more or less"',
    '"Cinema that replicates the power, beauty and alienation of Black Music"',
    '"Stages and moves viewers through several certain knowledges and beliefs of and in some of the gifts, possibilities, and refusals enacted by black culture"',
  ]; // Your array of strings
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    if (activeLinkCurrent === "homepage") {
      const intervalId = setInterval(() => {
        setDisplayText(textArray[currentIndex]);

        setTimeout(() => {
          setDisplayText("");
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 3500);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  });
  const handleClickContact = () => {
    setActiveLinkCurrent("homepage");
  };
  return (
    <div id="homepage">
      <div className="app">
        <Background />
        <Frontcarousel />
        {(activeLinkCurrent === "homepage" || "/") && (
          <div className="homepage">
              <img src={constants.image.logo}  id="hiddenText" className="tneg-logo"/>
            <div className="text">
              <p>{displayText}</p>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/subscribe" element={<NowPlaying />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ethos" element={<Ethos />} />
        </Routes>
      </div>
    </div>
  );
};

export default Homepage;
