import React from "react";
import { Link } from "react-router-dom";
import elf from "../../img/portfolio/thumbnails/Patti Adams - elf.thumb.jpg";
import elfWebp from "../../img/portfolio/thumbnails/PattiAdams-elf.thumb.webp";
import link from "../../img/portfolio/thumbnails/Patti Adams - link.thumb.jpg";
import linkWebp from "../../img/portfolio/thumbnails/PattiAdams-link.thumb.webp";
import vanGogh from "../../img/portfolio/thumbnails/Patti Adams - van gogh.thumb.jpg";
import vanGoghWebp from "../../img/portfolio/thumbnails/PattiAdams-vangogh.thumb.webp";
import "../../styles/gallery.css";

const Gallery = () => (
  <section className="text-center">
    <h2 className="uppercase text-3xl font-normal p-4">Portfolio</h2>

    <div className="flex flex-col md:flex-row justify-center">
      <div id="gallery_portraits " className="gallery_item m-6 ">
        <h3 className="font-normal text-2xl mb-4">Portraits</h3>

        <Link to="gallery_portraits">
          <picture>
            <source srcset={elfWebp} type="image/webp" />
            <source srcset={elf} type="image/jpg" />
            <img src={elf} alt="portrait gallery" className="mx-auto" />
          </picture>
        </Link>
      </div>

      <div id="gallery_fanart" className="gallery_item m-6">
        <h3 className="font-normal text-2xl mb-4">Fanart</h3>
        <Link to="gallery_fanart">
          <picture>
            <source srcset={linkWebp} type="image/webp" />
            <source srcset={link} type="image/jpg" />
            <img src={link} alt="fanart gallery" className="mx-auto" />
          </picture>
        </Link>
      </div>

      <div id="gallery_other" className="gallery_item m-6">
        <h3 className="font-normal text-2xl mb-4">Other</h3>
        <Link to="gallery_other">
          <picture>
            <source srcset={vanGoghWebp} type="image/webp" />
            <source srcset={vanGogh} type="image/jpg" />
            <img src={vanGogh} alt="other gallery" className="mx-auto" />
          </picture>
        </Link>
      </div>
    </div>
  </section>
);

export default Gallery;
