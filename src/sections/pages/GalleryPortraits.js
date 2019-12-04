import React, { Component } from "react";
import GalleryComponent from "./../../components/GalleryComponent";

//images
import elfThumb from "../../img/portfolio/thumbnails/Patti Adams - elf.thumb.jpg";
import elf from "../../img/portfolio/Patti Adams - elf.jpg";
import folkThumb from "../../img/portfolio/thumbnails/Patti Adams - me folk.thumb.jpg";
import folk from "../../img/portfolio/Patti Adams - me folk.jpg";
import selfportraitThumb from "../../img/portfolio/thumbnails/Patti Adams - selfportrait.thumb.jpg";
import selfportrait from "../../img/portfolio/Patti Adams - selfportrait.jpg";
import smileThumb from "../../img/portfolio/thumbnails/Patti Adams - smile.thumb.jpg";
import smile from "../../img/portfolio/Patti Adams - smile.jpg";
import eyesThumb from "../../img/portfolio/thumbnails/Patti Adams - crazy eyes.thumb.jpg";
import eyes from "../../img/portfolio/Patti Adams - crazy eyes.jpg";

const images = [
  {
    src: elf,
    thumbnail: elfThumb,
    thumbnailWidth: 250,
    thumbnailHeight: 200,
    title: "Elf",
    description: "guash, 21cm x 29cm",
    number: 1
  },
  {
    src: folk,
    thumbnail: folkThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Me folk",
    description: "oils, 21cm x 29cm",
    number: 2
  },
  {
    src: selfportrait,
    thumbnail: selfportraitThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Selfportrait",
    description: "ink, 21cm x 29cm",
    number: 3
  },
  {
    src: smile,
    thumbnail: smileThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    title: "Smile",
    description: "charcoal, 21cm x 29cm",
    number: 4
  },
  {
    src: eyes,
    thumbnail: eyesThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 280,
    title: "Crazy eyes",
    description: "charcoal, 21cm x 29cm",
    number: 5
  }
];

export default class GalleryPortraits extends Component {
  render() {
    return (
      <div className="text-center">
        <h2 className="font-normal uppercase text-3xl p-4">Portraits</h2>

        <GalleryComponent images={images} />
      </div>
    );
  }
}
