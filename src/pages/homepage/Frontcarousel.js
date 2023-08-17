import React, { useState, useEffect } from "react";

const Frontcarousel = () => {
  const imageURLsContext = require.context(
    "../../assets/images/carousel",
    false,
    /\.(png|jpg|jpeg)$/
  );
  const frontimageURLs = imageURLsContext.keys().map(imageURLsContext);

  const [imageWidth, setImageWidth] = useState(500); // Default width
  const [imageHeight, setImageHeight] = useState(500); // Default width

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);

      if (screenWidth <= 767) {
        setImageWidth(150); // Mobile width
        setImageHeight(150); // Mobile width
      } else if (screenWidth <= 1023) {
        setImageWidth(200); // Tablet width
        setImageHeight(200); // Mobile width
      } else if (screenWidth <= 1279) {
        setImageWidth(300); // Large screen width
        setImageHeight(300); // obile width
      } else {
        setImageWidth(500); // Extra large screen width
        setImageHeight(500); // Mobile width
      }
    };

    handleResize(); // Call initially to set the initial image width
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
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
    console.warn('imageWidth: ',imageWidth);
    console.warn('imageHeight: ',imageHeight);
    console.warn('minWidth: ',minWidth);
    console.warn('maxWidth: ',maxWidth);
    console.warn('maxHeight: ',maxHeight);
    
    const x = parseInt(Math.random() * (maxWidth - minWidth) + minWidth);
    const y = parseInt(Math.random() * maxHeight);
    console.warn('x: ',x);
    console.warn('y: ',y);

    return { x, y };
  }

  const [frontcurrentImageIndexLeft, setFrontCurrentImageIndexLeft] = useState(5);
  const [frontcurrentImageIndexRight, setFrontCurrentImageIndexRight] = useState(6);
  const [positionLeft, setPositionLeft] = useState(getRandomPositionleft());
  const [positionRight, setPositionRight] = useState(getRandomPositionright());

  useEffect(() => {
    const frontintervalLeft = setInterval(() => {
      const newIndex = Math.floor(Math.random() * frontimageURLs.length);
      setFrontCurrentImageIndexLeft(newIndex);
      setPositionLeft(getRandomPositionleft());
    }, Math.floor(Math.random() * (8000 - 6000)) + 6000);

    const frontintervalRight = setInterval(() => {
      const newIndex = Math.floor(Math.random() * frontimageURLs.length);
      setFrontCurrentImageIndexRight(newIndex);
      setPositionRight(getRandomPositionright());
    }, Math.floor(Math.random() * (7000 - 5000)) + 5000);

    return () => {
      clearInterval(frontintervalLeft);
      clearInterval(frontintervalRight);
    };
  }, []);

  return (
    <div className="front-carousel">
      <img
        src={frontimageURLs[frontcurrentImageIndexLeft]}
        style={{
          position: "absolute",
          left: `${positionLeft.x}px`,
          top: `${positionLeft.y}px`,
        }}
      />
      <img
        src={frontimageURLs[frontcurrentImageIndexRight]}
        style={{
          position: "absolute",
          left: `${positionRight.x}px`,
          top: `${positionRight.y}px`,
        }}
      />
    </div>
  );
};

export default Frontcarousel;
