import React, { Component } from "react";
import elf from "../../img/portfolio/thumbnails/Patti Adams - elf.thumb.jpg";
import link from "../../img/portfolio/thumbnails/Patti Adams - link.thumb.jpg";
import vanGogh from "../../img/portfolio/thumbnails/Patti Adams - van gogh.thumb.jpg";
import { Link } from "react-router-dom";
import "../../styles/gallery.css";

// import Gallery from "react-grid-gallery";

export default class Gallery1 extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="uppercase font-normal p-4">Portfolio</h1>

        <div className="flex flex-col md:flex-row justify-center">
          <div id="gallery_portraits " className="gallery_item m-6 ">
            <h2 className="font-normal text-2xl mb-4">Portraits</h2>

            <Link to="gallery_portraits">
              <img src={elf} alt="portrait gallery" className="mx-auto" />
            </Link>
          </div>

          <div id="gallery_fanart" className="gallery_item m-6">
            <h2 className="font-normal text-2xl mb-4">Fanart</h2>
            <Link to="gallery_fanart">
              <img src={link} alt="fanart gallery" className="mx-auto" />
            </Link>
          </div>

          <div id="gallery_other" className="gallery_item m-6">
            <h2 className="font-normal text-2xl mb-4">Other</h2>
            <Link to="gallery_other">
              <img src={vanGogh} alt="other gallery" className="mx-auto" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
