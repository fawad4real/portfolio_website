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
      //console.log(screenWidth);

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
  }, [imageHeight, imageWidth]);


  function getRandomPositionleft() {

    let maxWidth = 0;
    let maxHeight = 0;
    if (window.innerWidth <= 768) {
      maxWidth = window.innerWidth - imageWidth; // Subtract image width
      maxHeight = (window.innerHeight / 2) - imageHeight; // Subtract image height
    }
    else {
      maxWidth = window.innerWidth / 2 - imageWidth; // Subtract image width
      maxHeight = window.innerHeight - imageHeight; // Subtract image height
    }

    const x = Math.floor(Math.random() * (maxWidth -  0 ) + 0);
    const y = Math.floor(Math.random() * (maxHeight - 0 ) + 0);
    console.log('maxHeight Left: ', maxHeight);
    console.log('Left y:  ', y);
    console.log('Left X:  ', x);
    return { x, y };
  }

  function getRandomPositionright() {
    let maxWidth = 0;
    let minWidth = 0;
    let minHeight = 0;
    let maxHeight = 0;

    if (window.innerWidth <= 768) {
      minWidth = window.innerWidth;
      maxWidth = window.innerWidth - imageWidth; // Subtract image width
      minHeight = (window.innerHeight / 2) - imageHeight; // Subtract image height
      maxHeight = (window.innerHeight) - imageHeight; // Subtract image height
    }
    else {
      minWidth = window.innerWidth / 2;
      maxWidth = window.innerWidth - imageWidth; // Subtract image width
      maxHeight = window.innerHeight - imageHeight; // Subtract image height
    }

    //console.warn('imageWidth: ',imageWidth);
    //console.warn('imageHeight: ',imageHeight);
    //console.warn('minWidth: ',minWidth);
    //console.warn('maxWidth: ',maxWidth);
    console.log('maxHeight Right: ', maxHeight);

    const x = Math.floor(parseInt(Math.random() * (maxWidth - minWidth) + minWidth));
    const y = Math.floor(parseInt(Math.random() * (maxHeight - minHeight) + minHeight));
    //console.warn('x: ',x);
    console.log('Right y:  ', y);
    console.log('Right X:  ', x);

    return { x, y };
  }

  const [frontcurrentImageIndexLeft, setFrontCurrentImageIndexLeft] = useState(5);
  const [frontcurrentImageIndexRight, setFrontCurrentImageIndexRight] = useState(5);
  const [positionLeft, setPositionLeft] = useState(getRandomPositionleft());
  const [positionRight, setPositionRight] = useState(getRandomPositionright());

  useEffect(() => {
    const frontintervalLeft = setInterval(() => {
      const newIndex = Math.floor(Math.random() * frontimageURLs.length);
      setFrontCurrentImageIndexLeft(newIndex);
      setPositionLeft(getRandomPositionleft());
    }, Math.floor(Math.random() * (8000 - 6000)) + 6000);
    return () => {
      clearInterval(frontintervalLeft);
    };
  }, [frontcurrentImageIndexLeft]);

  useEffect(() => {
    const frontintervalRight = setInterval(() => {
      const newIndex = Math.floor(Math.random() * frontimageURLs.length);
      setFrontCurrentImageIndexRight(newIndex);
      setPositionRight(getRandomPositionright());
    }, Math.floor(Math.random() * (7000 - 5000)) + 5000);

    return () => {
      clearInterval(frontintervalRight);
    };
  }, [frontcurrentImageIndexRight]);

  return (
    <div className="front-carousel">
      <img
        alt="1"
        src={frontimageURLs[frontcurrentImageIndexLeft]}
        style={{
          position: "absolute",
          left: `${positionLeft.x}px`,
          top: `${positionLeft.y}px`,
        }}
      />
      <img
        alt="2"
        src={frontimageURLs[frontcurrentImageIndexRight + 1]}
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
