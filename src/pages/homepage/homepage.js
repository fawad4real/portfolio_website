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
    'Cultuur wordt nog steeds gedefinieerd door wat de media projecteert',
    'Zij die de zwarte cultuur manifesteren proberen een genuanceerde en alomvattende weergave te bieden van de cultuur. ',
    'Een weergave die de kracht, schoonheid en vervreemding van de zwarte cultuur toont.',
    'Een weergave van ons verhaal die keer op keer opnieuw verteld moet worden.',

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

  return (
    <div id="homepage">
      <div className="app">
        <Background />
        <Frontcarousel />
        {(activeLinkCurrent === "homepage" || "/") && (
          <div className="homepage">
            <img src={constants.image.logo} id="hiddenText" className="tneg-logo" />
            <div className="text">
              <p>{displayText}</p>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/subscribe" element={<NowPlaying />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Ethos />} />
        </Routes>
      </div>
    </div>
  );
};

export default Homepage;
