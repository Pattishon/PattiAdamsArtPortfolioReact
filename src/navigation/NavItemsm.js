import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//component Submenu calls for NavItemsm but adds additionall classes - text is smaller
//props.close - is needed to close the menu after menu option is clicked
const Submenu = props => {
  return (
    <React.Fragment>
      <ul>
        {props.subpages.map(subpage => (
          <NavItemsm
            key={subpage.name}
            page={subpage}
            subpageClass={true}
            close={props.close}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

class NavItemsm extends Component {
  closeMenu = () => {
    this.props.close();
  };
  render() {
    const { page, subpageClass, close } = this.props;
    return (
      <li className="text-center">
        <NavLink
          to={page.path}
          exact={true}
          className={`link-tailwind link ${subpageClass && `text-lg`}`}
          onClick={this.closeMenu}
        >
          {page.display}
        </NavLink>

        {page.subpages && <Submenu subpages={page.subpages} close={close} />}
      </li>
    );
  }
}

export default NavItemsm;
