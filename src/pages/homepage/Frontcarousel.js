import React, {useState, useEffect} from "react";

const Frontcarousel = () => {
  const imageURLsContext = require.context(
    "../../assets/images/carousel",
    false,
    /\.(png|jpg|jpeg)$/
  );
  const frontimageURLs = imageURLsContext.keys().map(imageURLsContext);

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

  const [frontcurrentImageIndex, setFrontCurrentImageIndex] = useState(5);
  const [positionLeft, setPositionLeft] = useState(getRandomPositionleft());
  const [positionRight, setPositionRight] = useState(getRandomPositionright());

  useEffect(() => {
    const frontinterval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * frontimageURLs.length);
      setFrontCurrentImageIndex(newIndex);

      // Update positions when the image changes
      setPositionLeft(getRandomPositionleft());
      setPositionRight(getRandomPositionright());
    }, Math.floor(Math.random() * (8000 - 6000)) + 6000); // Random interval between 3 to 5 seconds

    return () => clearInterval(frontinterval); // Clear interval on component unmount
  }, [frontcurrentImageIndex]);

  return (
    <div className="front-carousel">
      <img
        src={frontimageURLs[frontcurrentImageIndex]}
        style={{
          position: "absolute",
          left: `${positionLeft.x}px`,
          top: `${positionLeft.y}px`,
        }}
      />
      <img
        src={frontimageURLs[frontcurrentImageIndex + 1]}
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
