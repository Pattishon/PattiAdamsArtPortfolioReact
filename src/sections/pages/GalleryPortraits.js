import React from "react";
import GalleryComponent from "./../../components/GalleryComponent";
//images
import elfThumb from "../../img/portfolio/thumbnails/Patti Adams - elf.thumb.jpg";
import elfThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-elf.thumb.webp";
import elf from "../../img/portfolio/Patti Adams - elf.jpg";
import elfWebp from "../../img/portfolio/PattiAdams-elf.webp";
import folkThumb from "../../img/portfolio/thumbnails/Patti Adams - me folk.thumb.jpg";
import folkThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-mefolk.thumb.webp";
import folk from "../../img/portfolio/Patti Adams - me folk.jpg";
import folkWebp from "../../img/portfolio/PattiAdams-mefolk.webp";
import selfportraitThumb from "../../img/portfolio/thumbnails/Patti Adams - selfportrait.thumb.jpg";
import selfportraitThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-selfportrait.thumb.webp";
import selfportrait from "../../img/portfolio/Patti Adams - selfportrait.jpg";
import selfportraitWebp from "../../img/portfolio/PattiAdams-selfportrait.webp";
import smileThumb from "../../img/portfolio/thumbnails/Patti Adams - smile.thumb.jpg";
import smileThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-smile.thumb.webp";
import smile from "../../img/portfolio/Patti Adams - smile.jpg";
import smileWebp from "../../img/portfolio/PattiAdams-smile.webp";
import eyesThumb from "../../img/portfolio/thumbnails/Patti Adams - crazy eyes.thumb.jpg";
import eyesThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-crazyeyes.thumb.webp";
import eyes from "../../img/portfolio/Patti Adams - crazy eyes.jpg";
import eyesWebp from "../../img/portfolio/PattiAdams-crazyeyes.webp";

const images = [
  {
    src: elf,
    srcWebp: elfWebp,
    thumbnail: elfThumb,
    thumbnailWebp: elfThumbWebp,
    thumbnailWidth: 250,
    thumbnailHeight: 200,
    title: "Elf",
    description: "guash, 21cm x 29cm",
    number: 1
  },
  {
    src: folk,
    srcWebp: folkWebp,
    thumbnail: folkThumb,
    thumbnailWebp: folkThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Me folk",
    description: "oils, 21cm x 29cm",
    number: 2
  },
  {
    src: selfportrait,
    srcWebp: selfportraitWebp,
    thumbnail: selfportraitThumb,
    thumbnailWebp: selfportraitThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Selfportrait",
    description: "ink, 21cm x 29cm",
    number: 3
  },
  {
    src: smile,
    srcWebp: smileWebp,
    thumbnail: smileThumb,
    thumbnailWebp: smileThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Smile",
    description: "charcoal, 21cm x 29cm",
    number: 4
  },
  {
    src: eyes,
    srcWebp: eyesWebp,
    thumbnail: eyesThumb,
    thumbnailWebp: eyesThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 280,
    title: "Crazy eyes",
    description: "charcoal, 21cm x 29cm",
    number: 5
  }
];

const GalleryPortraits = () => (
  <article className="text-center">
    <h2 className="font-normal uppercase text-3xl p-4">Portraits</h2>

    <GalleryComponent images={images} />
  </article>
);
export default GalleryPortraits;
