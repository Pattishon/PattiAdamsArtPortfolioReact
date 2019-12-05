import React from "react";
import GalleryComponent from "./../../components/GalleryComponent";
//images
import linkThumb from "../../img/portfolio/thumbnails/Patti Adams - link.thumb.jpg";
import linkThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-link.thumb.webp";
import link from "../../img/portfolio/Patti Adams - link.jpg";
import linkWebp from "../../img/portfolio/PattiAdams-link.webp";
import zeldaThumb from "../../img/portfolio/thumbnails/Patti Adams - zelda.thumb.jpg";
import zeldaThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-zelda.thumb.webp";
import zelda from "../../img/portfolio/Patti Adams - zelda.jpg";
import zeldaWebp from "../../img/portfolio/PattiAdams-zelda.webp";
import wonderThumb from "../../img/portfolio/thumbnails/Patti Adams - wonder woman.thumb.jpg";
import wonderThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-wonderwoman.thumb.webp";
import wonder from "../../img/portfolio/Patti Adams - wonder woman.jpg";
import wonderWebp from "../../img/portfolio/PattiAdams-wonderwoman.webp";
import joyThumb from "../../img/portfolio/thumbnails/Patti Adams - Joy Iron First.thumb.jpg";
import joyThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-JoyIronFirst.thumb.webp";
import joy from "../../img/portfolio/Patti Adams - Joy Iron First.jpg";
import joyWebp from "../../img/portfolio/PattiAdams-JoyIronFirst.webp";
import thorgalThumb from "../../img/portfolio/thumbnails/Patti Adams - thorgal.thumb.jpg";
import thorgalThumbWebp from "../../img/portfolio/thumbnails/PattiAdams-thorgal.thumb.webp";
import thorgal from "../../img/portfolio/Patti Adams - thorgal.jpg";
import thorgalWebp from "../../img/portfolio/PattiAdams-thorgal.webp";

const images = [
  {
    src: link,
    srcWebp: linkWebp,
    thumbnail: linkThumb,
    thumbnailWebp: linkThumbWebp,
    thumbnailWidth: 250,
    thumbnailHeight: 200,
    title: "Link",
    description: "guash, 21cm x 29cm",
    number: 1
  },
  {
    src: zelda,
    srcWebp: zeldaWebp,
    thumbnail: zeldaThumb,
    thumbnailWebp: zeldaThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Zelda",
    description: "guash, 21cm x 29cm",
    number: 2
  },
  {
    src: wonder,
    srcWebp: wonderWebp,
    thumbnail: wonderThumb,
    thumbnailWebp: wonderThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Wonder Women",
    description: "guash, 21cm x 29cm",
    number: 3
  },
  {
    src: joy,
    srcWebp: joyWebp,
    thumbnail: joyThumb,
    thumbnailWebp: joyThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Joy",
    description: "guash, 21cm x 29cm",
    number: 4
  },
  {
    src: thorgal,
    srcWebp: thorgalWebp,
    thumbnail: thorgalThumb,
    thumbnailWebp: thorgalThumbWebp,
    thumbnailWidth: 320,
    thumbnailHeight: 280,
    title: "Thorgal",
    description: "guash, 21cm x 29cm",
    number: 5
  }
];

const GalleryFanart = () => (
  <article className="text-center">
    <h1 className="font-normal uppercase text-3xl p-4">Fanart</h1>

    <GalleryComponent images={images} />
  </article>
);

export default GalleryFanart;
