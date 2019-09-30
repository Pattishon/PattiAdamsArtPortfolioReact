import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../styles/gallery.css";

import Icon from "@material-ui/core/Icon";

// let lightboxHeight = document.documentElement.scrollHeight;

export default class GalleryComponent extends Component {
  state = {
    lightboxOpen: false,
    slideNum: 1
    // lightboxHeight: document.documentElement.scrollHeight
  };
  openLightbox = (e, number) => {
    this.setState({
      lightboxOpen: true
    });
    this.showSlides(number);
  };

  closeLightbox = () => {
    this.setState({
      lightboxOpen: false,
      slideNum: 1
    });
  };

  handleLightboxClick = e => {
    const { id } = e.target;
    if (id === "lightbox" || id === "inner-lightbox" || id === "image-div") {
      this.closeLightbox();
    }
  };

  showSlides = n => {
    let num = n;
    if (n > this.props.images.length) {
      num = 1;
    }
    if (n < 1) {
      num = this.props.images.length;
    }
    this.setState({
      slideNum: num
    });
  };

  changeSlide = n => {
    const num = this.state.slideNum + n;
    this.showSlides(num);
  };

  handleKey = e => {
    if (e.keyCode === 27) {
      this.closeLightbox();
    }
    if (e.keyCode === 39) {
      this.changeSlide(1);
    }
    if (e.keyCode === 37) {
      this.changeSlide(-1);
    }
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
    // window.addEventListener("resize", this.resize);
    // this.setState({
    //   lightboxHeight: document.documentElement.scrollHeight
    // });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
    // window.removeEventListener("resize", this.resize);
  }
  // resize = () => {
  //   //chce ustawić wysokość dla konkretnego elementu
  //   // lightboxHeight
  //   const docHeight = document.documentElement.scrollHeight;
  //   this.setState({
  //     lightboxHeight: docHeight
  //   });
  //   // return document.documentElement.scrollHeight;
  // };

  render() {
    const { images } = this.props;
    const { slideNum } = this.state;

    return (
      <div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center content-center max-w-5xl mx-auto">
          {images.map(image => {
            return (
              <div key={image.src} className="gallery_item m-2 lg:m-6">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  onClick={e => this.openLightbox(e, image.number)}
                  className="object-cover w-full h-64"
                />
              </div>
            );
          })}
        </div>
        <div
          id="lightbox"
          className={`w-full absolute z-30 left-0 top-0 ${
            this.state.lightboxOpen ? "flex flex-col" : "hidden"
          }`}
          style={{
            backgroundColor: "rgba(0,0,0,70%",
            minHeight: document.documentElement.scrollHeight
          }}
          onClick={this.handleLightboxClick}
        >
          <Icon
            onClick={this.closeLightbox}
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
                    onClick={() => this.changeSlide(-1)}
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
                    onClick={() => this.changeSlide(1)}
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
  }
}
