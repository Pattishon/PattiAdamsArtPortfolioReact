import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};

const MainPage = () => (
  <section className="max-w-2xl mx-auto mt-12">
    <Carousel responsive={responsive} infinite={true}>
      {images.map(image => {
        return (
          <div key={image.title}>
            <img
              className="d-block w-full h-64 sm:h-screen object-cover"
              src={image.src}
              alt="Me folk"
            />
            <p className="text-center">{image.description}</p>
          </div>
        );
      })}
    </Carousel>
  </section>
);

export default MainPage;
