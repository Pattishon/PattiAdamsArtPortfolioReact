import React from "react";
import GalleryComponent from "./../../components/GalleryComponent";
//images
import goghThumb from "../../img/portfolio/thumbnails/Patti Adams - van gogh.thumb.jpg";
import gogh from "../../img/portfolio/Patti Adams - van gogh.jpeg";
import stillThumb from "../../img/portfolio/thumbnails/Patti Adams - very still.thumb.jpg";
import still from "../../img/portfolio/Patti Adams - very still.jpg";
import mediterraneanThumb from "../../img/portfolio/thumbnails/Patti Adams - mediterranean.thumb.jpg";
import mediterranean from "../../img/portfolio/Patti Adams - mediterranean.jpg";
import yagaThumb from "../../img/portfolio/thumbnails/Patti Adams - yaga.thumb.jpg";
import yaga from "../../img/portfolio/Patti Adams - yaga.jpg";
import handsThumb from "../../img/portfolio/thumbnails/Patti Adams - hands01.thumb.jpg";
import hands from "../../img/portfolio/Patti Adams - hands01.jpg";

const images = [
  {
    src: gogh,
    thumbnail: goghThumb,
    thumbnailWidth: 250,
    thumbnailHeight: 200,
    title: "Van Gogh",
    description: "acrylics, 21cm x 29cm",
    number: 1
  },
  {
    src: still,
    thumbnail: stillThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Very Still",
    description: "guash, 21cm x 29cm",
    number: 2
  },
  {
    src: mediterranean,
    thumbnail: mediterraneanThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Mediterranean",
    description: "guash, 21cm x 29cm",
    number: 3
  },
  {
    src: yaga,
    thumbnail: yagaThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Yaga",
    description: "acrylic, 21cm x 29cm",
    number: 4
  },
  {
    src: hands,
    thumbnail: handsThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 280,
    title: "Hands",
    description: "acrylic, 21cm x 29cm",
    number: 5
  }
];

const GalleryOther = () => (
  <article className="text-center">
    <h2 className="font-normal uppercase text-3xl p-4">Other</h2>

    <GalleryComponent images={images} />
  </article>
);

export default GalleryOther;
