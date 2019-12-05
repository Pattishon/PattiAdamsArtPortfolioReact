import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import folk from "../../img/portfolio/Patti Adams - me folk.jpg";
import folkWebp from "../../img/portfolio/PattiAdams-mefolk.webp";
import thorgal from "../../img/portfolio/Patti Adams - thorgal.jpg";
import thorgalWebp from "../../img/portfolio/PattiAdams-thorgal.webp";
import still from "../../img/portfolio/Patti Adams - very still.jpg";
import stillWebp from "../../img/portfolio/PattiAdams-verystill.webp";

const images = [
  {
    src: folk,
    srcWebp: folkWebp,
    title: "Self-portrait",
    description: "oils, 21cm x 29cm",
    number: 1
  },
  {
    src: thorgal,
    srcWebp: thorgalWebp,
    title: "Thorgal",
    description: "acrylic, 21cm x 29cm",
    number: 1
  },
  {
    src: still,
    srcWebp: stillWebp,
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
            <picture>
              <source srcset={image.srcWebp} type="image/webp" />
              <source srcset={image.src} type="image/jpg" />
              <img
                className="d-block w-full h-64 sm:h-screen object-cover"
                src={image.src}
                alt="Me folk"
              />
            </picture>

            <p className="text-center">{image.description}</p>
          </div>
        );
      })}
    </Carousel>
  </section>
);

export default MainPage;
