import React from "react";
import GalleryComponent from "./../../components/GalleryComponent";
//images
import goghThumb from "../../img/portfolio/thumbnails/Patti Adams - van gogh.thumb.jpg";
import goghThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-vangogh.thumb.webp";
import gogh from "../../img/portfolio/Patti Adams - van gogh.jpeg";
import goghWebp from "../../img/portfolio/PattiAdams-vangogh.webp";
import stillThumb from "../../img/portfolio/thumbnails/Patti Adams - very still.thumb.jpg";
import stillThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-verystill.thumb.webp";
import still from "../../img/portfolio/Patti Adams - very still.jpg";
import stillWebp from "../../img/portfolio/PattiAdams-verystill.webp";
import mediterraneanThumb from "../../img/portfolio/thumbnails/Patti Adams - mediterranean.thumb.jpg";
import mediterraneanThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-mediterranean.thumb.webp";
import mediterranean from "../../img/portfolio/Patti Adams - mediterranean.jpg";
import mediterraneanWebp from "../../img/portfolio/PattiAdams-mediterranean.webp";
import yagaThumb from "../../img/portfolio/thumbnails/Patti Adams - yaga.thumb.jpg";
import yagaThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-yaga.thumb.webp";
import yaga from "../../img/portfolio/Patti Adams - yaga.jpg";
import yagaWebp from "../../img/portfolio/PattiAdams-yaga.webp";
import handsThumb from "../../img/portfolio/thumbnails/Patti Adams - hands01.thumb.jpg";
import handsThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-hands01.thumb.webp";
import hands from "../../img/portfolio/Patti Adams - hands01.jpg";
import handsWebp from "../../img/portfolio/PattiAdams-hands01.webp";

const images = [
  {
    src: gogh,
    srcWebp: goghWebp,
    thumbnail: goghThumb,
    thumbnailWebp: goghThumbWebp,
    thumbnailWidth: 250,
    thumbnailHeight: 200,
    title: "Van Gogh",
    description: "acrylics, 21cm x 29cm",
    number: 1
  },
  {
    src: still,
    srcWebp: stillWebp,
    thumbnail: stillThumb,
    thumbnailWebp: stillThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Very Still",
    description: "guash, 21cm x 29cm",
    number: 2
  },
  {
    src: mediterranean,
    srcWebp: mediterraneanWebp,
    thumbnail: mediterraneanThumb,
    thumbnailWebp: mediterraneanThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Mediterranean",
    description: "guash, 21cm x 29cm",
    number: 3
  },
  {
    src: yaga,
    srcWebp: yagaWebp,
    thumbnail: yagaThumb,
    thumbnailWebp: yagaThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Yaga",
    description: "acrylic, 21cm x 29cm",
    number: 4
  },
  {
    src: hands,
    srcWebp: handsWebp,
    thumbnail: handsThumb,
    thumbnailWebp: handsThumbWebp,
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
