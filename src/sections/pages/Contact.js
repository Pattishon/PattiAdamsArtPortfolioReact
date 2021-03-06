import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  transition: {
    transition: "background .5s"
  }
};

const Contact = ({ classes }) => (
  <section className="">
    <h1 className="py-4 text-center font-normal uppercase text-3xl">
      Contact form
    </h1>

    <form id="form" method="post" className="mx-auto max-w-md" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name: <span>(required)</span>
      </label>
      <br />
      <input
        type="text"
        name="name"
        placeholder="Enter your name here"
        required
        className={"input " + classes.transition}
      />
      <br />

      <label>
        E-mail: <span>(required)</span>
      </label>
      <br />
      <input
        type="text"
        name="email"
        placeholder="Enter your e-mail here"
        required
        className={"input " + classes.transition}
      />
      <br />
      <label>Phone: </label>
      <br />
      <input
        type="tel"
        name="phone"
        placeholder="Enter your phone number here"
        className={"input " + classes.transition}
      />
      <br />
      <label>
        Question: <span>(required)</span>
      </label>
      <br />

      <textarea
        name="message"
        placeholder="Enter your message here"
        required
        className={"input " + classes.transition}
      />
      <br />
      <button
        type="submit"
        className={
          "input hover:bg-main w-32 uppercase font-light " + classes.transition
        }
      >
        Submit
      </button>
    </form>

    <article id="contact" className="font-light text-s text-center my-8">
      <h4>e-mail</h4>
      <p>adamczyk.p@protonmail.com</p>
      <h4>phone</h4>
      <p>+48 721 329 128 </p>
    </article>
  </section>
);

export default withStyles(styles)(Contact);
