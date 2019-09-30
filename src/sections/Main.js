import React, { Component } from "react";
import { Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import GalleryPortraits from "./pages/GalleryPortraits";
import GalleryFanart from "./pages/GalleryFanart";
import GalleryOther from "./pages/GalleryOther";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/gallery/" exact component={Gallery} />
        <Route
          path="/gallery/gallery_portraits/"
          component={GalleryPortraits}
        />
        <Route path="/gallery/gallery_fanart/" component={GalleryFanart} />
        <Route path="/gallery/gallery_other/" component={GalleryOther} />
        <Route path="/bio/" component={Bio} />
        <Route path="/contact/" component={Contact} />
      </div>
    );
  }
}
