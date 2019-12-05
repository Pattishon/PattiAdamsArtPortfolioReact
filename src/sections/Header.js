import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import "../styles/header.css";

const styles = {
  transition: {
    transition: "color .5s"
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="pt-6 sm:pt-20 pb-3 m-auto w-1/2 sm:w-full">
        <h1 className="text-center">
          <Link
            to="/"
            className={
              "title text-text hover:text-text sm:hover:text-dark hover:no-underline text-4xl md:text-6xl " +
              classes.transition
            }
          >
            Patti Adams Fine Art
          </Link>
        </h1>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
