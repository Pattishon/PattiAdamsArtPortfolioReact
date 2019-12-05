import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import NavItemsm from "./NavItemsm";
import NavItemlg from "./NavItemlg";
import "../styles/navigation.css";

const pages = [
  { name: "home", path: "/", exact: true, display: "Home" },
  {
    name: "gallery",
    path: "/gallery/",
    display: "Gallery",
    subpages: [
      {
        name: "galleryPortraits",
        path: "/gallery/gallery_portraits",
        exact: true,
        display: "Portraits"
      },
      {
        name: "ggalleryFanart",
        path: "/gallery/gallery_fanart/",
        exact: true,
        display: "Fanart"
      },
      {
        name: "galleryOther",
        path: "/gallery/gallery_other",
        exact: true,
        display: "Other"
      }
    ]
  },
  { name: "bio", path: "/bio", display: "Bio" },
  { name: "contact", path: "/contact", display: "Contact" }
];

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="m-auto w-screen z-20">
      {/* menu for small screens */}
      <div
        className={`w-screen h-full fixed top-0 left-0 bg-main sm:hidden navigation ${!showMenu &&
          "hidden"}`}
      >
        <div className="flex justify-end p-4">
          <Button onClick={handleClick}>
            <Icon className="text-text" style={{ fontSize: 30 }}>
              close
            </Icon>
          </Button>
        </div>
        <nav id="navigation" className="">
          <ul className="flex bg-main flex-col content-center" id="nav-main">
            {pages.map(page => (
              <NavItemsm key={page.name} page={page} close={handleClick} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex justify-center sm:hidden p-3">
        <Button onClick={handleClick}>
          <Icon className="text-text" style={{ fontSize: 30 }}>
            view_headline
          </Icon>
        </Button>
      </div>

      {/* navigation for larger screens */}
      <nav id="navigation" className="hidden sm:block pt-2 ">
        <ul className="flex justify-center bg-main" id="nav-main">
          {pages.map(page => (
            <NavItemlg key={page.name} page={page} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
