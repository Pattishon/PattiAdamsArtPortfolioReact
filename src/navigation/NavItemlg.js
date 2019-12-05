import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const Submenu = ({ subpages }) => {
  return (
    <React.Fragment>
      {subpages.map(subpage => (
        <NavItemlg key={subpage.name} page={subpage} />
      ))}
    </React.Fragment>
  );
};

const NavItemlg = ({ page }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <li
      className="mr-3 text-center"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className="link-tailwind link">
        <NavLink
          to={page.path}
          exact={true}
          className="link-tailwind link text-lg"
        >
          {page.display}
        </NavLink>
        {page.subpages && <Icon className="pt-1 text-sm">expand_more</Icon>}
      </div>
      {page.subpages && (
        <ul
          className={
            isOpen
              ? "absolute bg-main rounded flex flex-col justify-center content-center items-center p-2"
              : "hidden"
          }
        >
          <Submenu subpages={page.subpages} />
        </ul>
      )}
    </li>
  );
};

export default NavItemlg;
