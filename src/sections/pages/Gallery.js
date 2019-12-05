import React from "react";
import { Link } from "react-router-dom";
import elf from "../../img/portfolio/thumbnails/Patti Adams - elf.thumb.jpg";
import link from "../../img/portfolio/thumbnails/Patti Adams - link.thumb.jpg";
import vanGogh from "../../img/portfolio/thumbnails/Patti Adams - van gogh.thumb.jpg";
import "../../styles/gallery.css";

const Gallery = () => (
  <section className="text-center">
    <h2 className="uppercase text-3xl font-normal p-4">Portfolio</h2>

    <div className="flex flex-col md:flex-row justify-center">
      <div id="gallery_portraits " className="gallery_item m-6 ">
        <h3 className="font-normal text-2xl mb-4">Portraits</h3>

        <Link to="gallery_portraits">
          <img src={elf} alt="portrait gallery" className="mx-auto" />
        </Link>
      </div>

      <div id="gallery_fanart" className="gallery_item m-6">
        <h3 className="font-normal text-2xl mb-4">Fanart</h3>
        <Link to="gallery_fanart">
          <img src={link} alt="fanart gallery" className="mx-auto" />
        </Link>
      </div>

      <div id="gallery_other" className="gallery_item m-6">
        <h3 className="font-normal text-2xl mb-4">Other</h3>
        <Link to="gallery_other">
          <img src={vanGogh} alt="other gallery" className="mx-auto" />
        </Link>
      </div>
    </div>
  </section>
);

export default Gallery;
