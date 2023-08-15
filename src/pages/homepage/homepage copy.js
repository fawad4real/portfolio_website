import React, { useState, useEffect } from "react";
import "./homepage.scss";

const Homepage = ({ activeLink }) => {
  const [activeLinkCurrent, setActiveLinkCurrent] = useState(activeLink);

  useEffect(() => {
    setActiveLinkCurrent(activeLink);
    console.log("2", activeLinkCurrent);
  }, [activeLink]);

  const imageURLsContext = require.context(
    "../../assets/images/carousel",
    false,
    /\.(png|jpg|jpeg)$/
  );
  const imageURLs = imageURLsContext.keys().map(imageURLsContext);
  const frontimageURLs = imageURLsContext.keys().map(imageURLsContext);
  // console.warn("imageURLs", imageURLs);

  const imageWidth = 500; // Set your desired image width
  const imageHeight = 500; // Set your desired image height
  function getRandomPositionleft() {
    const maxWidth = window.innerWidth / 2 - imageWidth; // Subtract image width
    const maxHeight = window.innerHeight - imageHeight; // Subtract image height

    const x = Math.random() * maxWidth;
    const y = Math.random() * maxHeight;

    return { x, y };
  }

  function getRandomPositionright() {
    const minWidth = window.innerWidth / 2;
    const maxWidth = window.innerWidth - imageWidth; // Subtract image width
    const maxHeight = window.innerHeight - imageHeight; // Subtract image height

    const x = Math.random() * (maxWidth - minWidth) + minWidth;
    const y = Math.random() * maxHeight;

    return { x, y };
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  useEffect(() => {
    const bginterval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * imageURLs.length);
      setCurrentImageIndex(newIndex);
    }, Math.floor(Math.random() * (8000 - 6000)) + 6000); // Random interval between 3 to 5 seconds

    return () => clearInterval(bginterval); // Clear interval on component unmount
  }, [currentImageIndex]);

  const [frontcurrentImageIndex, setFrontCurrentImageIndex] = useState(5);
  useEffect(() => {
    const frontinterval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * frontimageURLs.length);
      setFrontCurrentImageIndex(newIndex);
    }, Math.floor(Math.random() * (8000 - 6000)) + 6000); // Random interval between 3 to 5 seconds

    return () => clearInterval(frontinterval); // Clear interval on component unmount
  }, [frontcurrentImageIndex]);

  const currentImageStyle = {
    backgroundImage: `url(${imageURLs[currentImageIndex]}), linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))`,
  };
  useEffect(() => {
    if (activeLinkCurrent === "homepage") {
      console.log("activeLinkCurrent:", activeLinkCurrent);
      const h1Element = document.getElementById("hiddenText");

      function toggleVisibility() {
        h1Element.style.display =
          h1Element.style.display === "none" ? "block" : "none";
      }

      const timeset = setInterval(toggleVisibility, 9000);

      return () => {
        clearInterval(timeset);
      };
    }
  },[]);
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
  return (
    <div id="homepage">
      <div className="app">
        <div className="background-image" style={currentImageStyle}></div>
        <div className="front-carousel">
          <img
            src={frontimageURLs[frontcurrentImageIndex]}
            style={{
              position: "absolute",
              left: `${getRandomPositionleft().x}px`,
              top: `${getRandomPositionleft().y}px`,
            }}
          />
          <img
            src={frontimageURLs[frontcurrentImageIndex + 1]}
            style={{
              position: "absolute",
              left: `${getRandomPositionright().x}px`,
              top: `${getRandomPositionright().y}px`,
            }}
          />
        </div>
        {activeLinkCurrent === "homepage" && (
          <div className="homepage">
            <h1 id="hiddenText" className="tneg-logo">
              <svg
                className="svg-tneglogo"
                x="0px"
                y="0px"
                width="920px"
                height="264px"
                viewBox="0 0 920 264"
                fill="white"
              >
                <path d="M796.9,151.7v6.7h6.4c5.9,0,11,1.2,15.2,3.5s6.9,4.9,8.3,7.7c1.3,2.8,2,9.1,2,18.8v51.2c-6.5,2.4-12.9,4.3-19.2,5.5 c-6.2,1.3-12.3,1.9-18.3,1.9c-17.1,0-31.8-4.2-44.2-12.5c-12.4-8.4-21.4-21.4-27-39.2c-5.6-17.8-8.4-38.5-8.4-62.1 c0-19.5,2.5-38.5,7.6-57s13.7-33,26-43.3c12.2-10.4,27.5-15.5,46-15.5c19.3,0,37,6.2,53.2,18.5C860.7,48.3,872.9,66.3,881,90h6.7 V3.2H881c-2.4,6.9-5.1,11.6-8,14.1s-6.1,3.7-9.4,3.7c-2.2,0-9.2-2.3-21.2-6.8c-11.9-4.5-20.6-7.3-25.9-8.3C806.7,4,795.7,3,783.5,3 c-39.5,0-72.2,12.8-98.3,38.3c-26,25.6-39.1,56.9-39.1,93.9c0,16.6,2.7,31.9,8.2,46c-6.2,19.6-15.6,34.3-28.6,44.2 c-13.9,10.7-32.3,16-55.3,16h-14.7c-7,0-12.1-1-15.3-2.9c-3.2-1.9-5.3-4.4-6.4-7.4c-1.2-3-1.7-11.3-1.7-24.9v-69.4 c11.7,0,20.7,1.5,26.9,4.6c6.2,3.1,11.6,9.1,16.3,18.1s7.7,20.5,9.2,34.5h6.9V65h-6.9c-1.9,19.1-6.4,33.6-13.4,43.4 c-7,9.8-18.3,14.7-34,14.7h-4.9V23h25.3c18.6,0,31.4,1.1,38.1,3.3c11.6,3.6,20.6,9.3,27,17.1c6.4,7.8,11.3,20.5,14.8,38.3h6.9V8.8 H378v6.7c13.7-0.2,23.4,3.1,29.2,10.2c4.2,5.2,6.4,15.2,6.4,30v105.9L292.1,8.8H3.4v66.7h6.9c2.8-18.2,9.4-32.1,20-42 c7.5-7,19.6-10.5,36.1-10.5h17.8v190c0,12.4-0.7,20-2,22.9c-1.8,4.1-4.3,7-7.4,8.7c-4.4,2.5-10.1,3.8-17.3,3.8h-8.2v6.7h129v-6.7 h-8.2c-7,0-12.6-1.2-16.6-3.5c-4.1-2.4-6.8-5.1-8.2-8.3c-1.4-3.1-2.1-11-2.1-23.6V23h18.3c11.5,0,19.6,1.1,24.2,3.3 c8.2,4,14.7,9.4,19.4,16.1c4.7,6.7,9,17.8,12.9,33.1h6.5V20.6c3.4,2.4,7.1,6.1,11.3,11.3l5.3,6.5v173.8c0,13.1-2.7,22.3-8,27.8 c-5.3,5.4-14.8,8.2-28.3,8.4v6.7h80.7h6.7v-6.7h-5.8c-8.4,0-15.8-2.5-22.2-7.4c-6.5-5-9.7-14.5-9.7-28.7V55.7l162,199.4h10.8V55.7 c0-11.6,1-19.8,3-24.6c2-4.8,4.8-8.2,8.4-10.4c3-1.8,8.4-3.2,16.2-4.5c4.2,0.8,7.8,2.3,10.6,4.4c3.3,2.3,5.5,5.6,6.7,9.8 c0.6,2.5,0.9,9.4,0.9,20.5v162c0,12.4-0.7,20-2,22.9c-1.7,4.1-4.1,7-7.3,8.7c-4.4,2.5-10.1,3.8-17.3,3.8h-8.2v6.7h212.9l8.7-61.6 c6.6,12.1,15.4,23,26.6,32.9c11.8,10.4,25.4,18.7,40.9,25.1c15.4,6.4,34.8,9.5,58.2,9.5c18.3,0,35.9-1.8,52.9-5.4 c17-3.6,33.4-8.9,49.1-15.9v-51.2c0-9,0.5-14.6,1.6-16.9c1.9-4.4,4.7-7.5,8.3-9.4c3.6-1.9,9.9-3.1,19-3.7v-6.7H796.9z"></path>
              </svg>
            </h1>
            <div className="text">
              <p>{displayText}</p>
            </div>
          </div>
        )}
        {activeLinkCurrent == "ethos" && (
          <div id="ethos" className="ethos">
            <h2>
              TNEG is a motion picture studio whose goal is to create a black
              cinema as culturally, socially, and economically central to the
              21st century as was black music to the 20th century.
            </h2>
          </div>
        )}
        {activeLinkCurrent == "contact" && (
          <div id="contact" className="contactUs">
            <a href="mailto:info@tnge.us">info@tnge.us</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
