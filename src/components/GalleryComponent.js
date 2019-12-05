import React, { useState, useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import "../styles/gallery.css";

const GalleryComponent = ({ images }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slideNum, setSlideNum] = useState(1);

  const openLightbox = number => {
    setLightboxOpen(true);
    showSlides(number);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSlideNum(1);
  };

  const handleLightboxClick = e => {
    const { id } = e.target;
    if (id === "lightbox" || id === "inner-lightbox" || id === "image-div") {
      closeLightbox();
    }
  };

  const showSlides = n => {
    let num = n;
    if (n > images.length) {
      num = 1;
    } else if (n < 1) {
      num = images.length;
    }
    setSlideNum(num);
  };

  const changeSlide = n => {
    const num = slideNum + n;
    showSlides(num);
  };

  const handleKey = e => {
    if (e.keyCode === 27) {
      closeLightbox();
    }
    if (e.keyCode === 39) {
      changeSlide(1);
    }
    if (e.keyCode === 37) {
      changeSlide(-1);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center content-center max-w-5xl mx-auto">
        {images.map(image => {
          return (
            <div key={image.src} className="gallery_item m-2 lg:m-6">
              <img
                src={image.thumbnail}
                alt={image.title}
                onClick={e => openLightbox(image.number)}
                className="object-cover w-full h-64"
              />
            </div>
          );
        })}
      </div>
      <div
        id="lightbox"
        className={`w-full absolute z-30 left-0 top-0 ${
          lightboxOpen ? "flex flex-col" : "hidden"
        }`}
        style={{
          backgroundColor: "rgba(0,0,0,70%",
          minHeight: document.documentElement.scrollHeight
        }}
        onClick={handleLightboxClick}
      >
        <Icon
          onClick={closeLightbox}
          className="self-end m-2 cursor-pointer opacity-50 hover:opacity-100"
          style={{
            transition: "opacity 0.6s ease",
            fontSize: "2rem",
            fontWeight: 500
          }}
        >
          close
        </Icon>
        <div id="inner-lightbox">
          <div className="text-center relative" id="image-div">
            {images.length > 1 && (
              <React.Fragment>
                <Icon
                  className="absolute top-1/2 left-0 opacity-50 hover:opacity-100 text-bold cursor-pointer"
                  style={{
                    transition: "opacity 0.6s ease",
                    fontSize: "3rem",
                    fontWeight: 700
                  }}
                  onClick={() => changeSlide(-1)}
                >
                  chevron_left
                </Icon>

                <Icon
                  className="absolute top-1/2 right-0 opacity-50 hover:opacity-100 text-bold cursor-pointer"
                  style={{
                    transition: "opacity 0.6s ease",
                    fontSize: "3rem",
                    fontWeight: 700
                  }}
                  onClick={() => changeSlide(1)}
                >
                  chevron_right
                </Icon>
              </React.Fragment>
            )}

            <img
              src={images[slideNum - 1].src}
              alt={images[slideNum - 1].title}
              className="my-5 mx-auto h-screen  rounded-lg animate object-cover w-9/12 sm:w-auto"
              style={{ border: "4px solid white" }}
              id="test"
            />
            <p className=" mb-0">{images[slideNum - 1].title}</p>
            <p className="font-light italic ">
              {images[slideNum - 1].description}
            </p>
            <p className="font-light text-right p-2 text-xs">
              {images[slideNum - 1].number} / {images.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
