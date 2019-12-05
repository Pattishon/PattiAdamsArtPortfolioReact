import React from "react";
import { NavLink } from "react-router-dom";

//component Submenu calls for NavItemsm but adds additionall classes - text is smaller
//props.close - is needed to close the menu after menu option is clicked
const Submenu = ({ close, subpages }) => {
  return (
    <React.Fragment>
      <ul>
        {subpages.map(subpage => (
          <NavItemsm
            key={subpage.name}
            page={subpage}
            subpageClass={true}
            close={close}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

const NavItemsm = ({ page, subpageClass, close }) => {
  const closeMenu = () => {
    close();
  };

  return (
    <li className="text-center">
      <NavLink
        to={page.path}
        exact={true}
        className={`link-tailwind link ${subpageClass && `text-lg`}`}
        onClick={closeMenu}
      >
        {page.display}
      </NavLink>

      {page.subpages && <Submenu subpages={page.subpages} close={close} />}
    </li>
  );
};

export default NavItemsm;
