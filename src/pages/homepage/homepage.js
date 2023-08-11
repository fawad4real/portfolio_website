// import React, { useState, useEffect } from "react";
// import "./homepage.scss";

// const Homepage = () => {
//   const imageContext = require.context(
//     "../../assets/images/carousel",
//     false,
//     /\.(png|jpg|jpeg|gif|svg)$/
//   );
//   const backgroundImageUrls = imageContext.keys().map(imageContext);
//   const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);
//   const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
//   const [carouselImageIndices, setCarouselImageIndices] = useState([]);

//   useEffect(() => {
//     // Load background image
//     // const backgroundImg = new Image();
//     // backgroundImg.src = backgroundImageUrls[backgroundImageIndex];
//     // backgroundImg.onload = () => setBackgroundImageLoaded(true);

//     // Set interval for background image
//     const backgroundInterval = setInterval(() => {
//       setBackgroundImageIndex(
//         (prevIndex) => (prevIndex + 1) % backgroundImageUrls.length
//       );
//     }, Math.random() * 3500 + 5500); // Random interval between 3 to 5 seconds

//     // Set interval for scattered-carousel images
//     const carouselInterval = setInterval(() => {
//       setCarouselImageIndices((prevIndices) => {
//         const newIndex = (prevIndices[0] + 1) % backgroundImageUrls.length;
//         return [newIndex, ...prevIndices.slice(0, -1)];
//       });
//     }, Math.random() * 3000 + 5000); // Random interval between 3 to 5 seconds

//     return () => {
//       clearInterval(backgroundInterval);
//       clearInterval(carouselInterval);
//     };
//   }, [backgroundImageIndex]);

//   const randomNonOverlappingPosition = () => {
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     const minLeft = viewportWidth * 0.15;
//     const maxLeft = viewportWidth * 0.85;
//     const minTop = viewportHeight * 0.15;
//     const maxTop = viewportHeight * 0.85;

//     const position = {
//       top: `${Math.random() * (maxTop - minTop) + minTop}px`,
//       left: `${Math.random() * (maxLeft - minLeft) + minLeft}px`,
//     };

//     // Check for overlap and adjust position if needed
//     if (
//       carouselImageIndices.some((idx) => {
//         const imgPosition =
//           idx === backgroundImageIndex
//             ? randomNonOverlappingPosition()
//             : position;
//         const imgLeft = parseFloat(imgPosition.left);
//         const imgTop = parseFloat(imgPosition.top);
//         return (
//           imgLeft > position.left - 100 &&
//           imgLeft < position.left + 100 &&
//           imgTop > position.top - 100 &&
//           imgTop < position.top + 100
//         );
//       })
//     ) {
//       return randomNonOverlappingPosition();
//     }

//     return position;
//   };
//   carouselImageIndices.map((idx, i) => (
//     console.log(idx,i)
//   ))
//   return (
//     <div id="homepage">
//       <div className="app">
//         {/* Background Image Rendering */}
//         <div
//           className={`background-image${
//             backgroundImageLoaded ? " loaded" : ""
//           }`}
//           style={{
//             backgroundImage: `url(${backgroundImageUrls[backgroundImageIndex]})`,
//           }}
//         ></div>
//         {/* Scattered Image Carousel */}
//         <div className="scattered-carousel">
//           {carouselImageIndices.map((idx, i) => (
//             <img
//               key={i}
//               src={backgroundImageUrls[i]}
//               alt={`Image ${i + 1}`}
//               className={`carousel-image${
//                 i === backgroundImageIndex ? " active" : ""
//               }`}
//               style={ randomNonOverlappingPosition()
//               }
//             />
//           ))}
//         </div>
//       </div>
//       <h1 className="tnseg-logo position-absolute">{/* Your SVG code */}</h1>
//     </div>
//   );
// };

// export default Homepage;








import React, { useState, useEffect } from "react";

import "./homepage.scss";

const Homepage = () => {
  const imageContext = require.context(
    "../../assets/images/carousel",
    false,
    /\.(png|jpg|jpeg|gif|svg)$/
  );
  const backgroundImageUrls = imageContext.keys().map(imageContext);
  console.warn("backgroundImageUrls", backgroundImageUrls);
  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // Load background image
    const backgroundImg = new Image();
    backgroundImg.src = backgroundImageUrls[imageIndex];
    backgroundImg.onload = () => setBackgroundImageLoaded(true);
    console.warn("backgroundImg", backgroundImg);
    // Set interval for scattered images
    const interval = setInterval(() => {
      setImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImageUrls.length
      );
    }, Math.random() * 3000 + 5000); // Random interval between 3 to 5 seconds

    return () => {
      clearInterval(interval); // Clean up the interval when component unmounts
    };
  }, [imageIndex, backgroundImageUrls]);

  const scatteredImageCount = 2;
  const selectedImageIndices = Array.from(
    { length: scatteredImageCount },
    (_, i) =>
      (imageIndex + i + Math.floor(Math.random() * (40 - 2)) + 2) %
      backgroundImageUrls.length
  );

  const randomPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const minLeft = viewportWidth * 0.15;
    const maxLeft = viewportWidth * 0.85;
    const minTop = viewportHeight * 0.15;
    const maxTop = viewportHeight * 0.85;

    return {
      top: `${Math.random() * (maxTop - minTop) + minTop}px`,
      left: `${Math.random() * (maxLeft - minLeft) + minLeft}px`,
    };
  };

  return (
    <div id="homepage">
      <div className="app">
        {/* Background Image Rendering */}
        <div
          className={`background-image${
            backgroundImageLoaded ? " loaded" : ""
          }`}
          style={{
            backgroundImage: `url(${
              backgroundImageUrls[
                imageIndex + Math.floor(Math.random() * (30 - 3)) + 3
              ]
            })`,
          }}
        ></div>
        {/* Scattered Image Carousel */}
        <div className="scattered-carousel">
          {selectedImageIndices.map((idx) => (
            <img
              key={idx}
              src={backgroundImageUrls[idx]}
              alt={`Image ${idx + 1}`}
              className={`carousel-image${idx === imageIndex ? " active" : ""}`}
              style={randomPosition()}
            />
          ))}
        </div>
      </div>
      <h1 className="tnseg-logo position-absolute">{/* Your SVG code */}</h1>
    </div>
  );
};

export default Homepage;
