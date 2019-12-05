import React from "react";
import GalleryComponent from "./../../components/GalleryComponent";
//images
import linkThumb from "../../img/portfolio/thumbnails/Patti Adams - link.thumb.jpg";
import link from "../../img/portfolio/Patti Adams - link.jpg";
import zeldaThumb from "../../img/portfolio/thumbnails/Patti Adams - zelda.thumb.jpg";
import zelda from "../../img/portfolio/Patti Adams - zelda.jpg";
import wonderThumb from "../../img/portfolio/thumbnails/Patti Adams - wonder woman.thumb.jpg";
import wonder from "../../img/portfolio/Patti Adams - wonder woman.jpg";
import joyThumb from "../../img/portfolio/thumbnails/Patti Adams - Joy Iron First.thumb.jpg";
import joy from "../../img/portfolio/Patti Adams - Joy Iron First.jpg";
import thorgalThumb from "../../img/portfolio/thumbnails/Patti Adams - thorgal.thumb.jpg";
import thorgal from "../../img/portfolio/Patti Adams - thorgal.jpg";

const images = [
  {
    src: link,
    thumbnail: linkThumb,
    thumbnailWidth: 250,
    thumbnailHeight: 200,
    title: "Link",
    description: "guash, 21cm x 29cm",
    number: 1
  },
  {
    src: zelda,
    thumbnail: zeldaThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Zelda",
    description: "guash, 21cm x 29cm",
    number: 2
  },
  {
    src: wonder,
    thumbnail: wonderThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Wonder Women",
    description: "guash, 21cm x 29cm",
    number: 3
  },
  {
    src: joy,
    thumbnail: joyThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Joy",
    description: "guash, 21cm x 29cm",
    number: 4
  },
  {
    src: thorgal,
    thumbnail: thorgalThumb,
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
