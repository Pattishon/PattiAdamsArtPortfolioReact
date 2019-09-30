import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/footer.css";

export default class Footer extends Component {
  handleToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <footer className="mx-auto mb-10 mt-12 flex flex-col content-center">
        <div className="flex justify-center">
          <div className="py-2">
            <a
              href="https://www.facebook.com/PattiAdamsArt/"
              className="text-text hover:text-dark transiton"
              title="facebook"
            >
              <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
              </svg>
            </a>
          </div>
          <div className="py-2">
            <a
              href="https://www.instagram.com/pattishon/"
              className="text-text hover:text-dark transiton"
              title="instagram"
            >
              <svg className="fill-current w-6 h-6" viewBox="0 0 24 24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-text font-light">
          Copyright
          <Link
            to="/"
            className="text-text hover:text-dark hover:no-underline transiton"
          >
            {" \u00A9"}Patti Adams
          </Link>
        </div>

        <div className="text-center pt-2">
          <Icon
            className="text-text hover:text-dark  cursor-pointer transiton"
            onClick={this.handleToTop}
          >
            keyboard_arrow_up
          </Icon>
        </div>
      </footer>
    );
  }
}
