import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import folk from "../../img/portfolio/Patti Adams - me folk.jpg";
import thorgal from "../../img/portfolio/Patti Adams - thorgal.jpg";
import still from "../../img/portfolio/Patti Adams - very still.jpg";

const images = [
  {
    src: folk,
    title: "Self-portrait",
    description: "oils, 21cm x 29cm",
    number: 1
  },
  {
    src: thorgal,
    title: "Thorgal",
    description: "acrylic, 21cm x 29cm",
    number: 1
  },
  {
    src: still,
    title: "Very still",
    description: "guash, 21cm x 29cm",
    number: 1
  }
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <div className="max-w-2xl mx-auto">
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        fade={true}
        indicators={false}
        interval={2000}
        className="my-10 mx-4"
      >
        {images.map(image => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-full h-64 sm:h-screen object-cover"
                src={image.src}
                alt="Me folk"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
