import React, {useState, useEffect} from "react";

const Background = () => {
  const imageURLsContext = require.context(
    "../../assets/images/carousel",
    false,
    /\.(png|jpg|jpeg)$/
  );
  const imageURLs = imageURLsContext.keys().map(imageURLsContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  useEffect(() => {
    const bginterval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * imageURLs.length);
      setCurrentImageIndex(newIndex);
    }, Math.floor(Math.random() * (8000 - 6000)) + 6000); // Random interval between 3 to 5 seconds

    return () => clearInterval(bginterval); // Clear interval on component unmount
  }, [currentImageIndex]);
  const currentImageStyle = {
    backgroundImage: `url(${imageURLs[currentImageIndex]}), linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))`,
  };


  return <div className="background-image" style={currentImageStyle}></div>;
};

export default Background;
