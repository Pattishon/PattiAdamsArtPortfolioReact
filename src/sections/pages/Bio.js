import React from "react";
import portrait from "../../img/portrait.jpg";

const Bio = () => (
  <section className="flex flex-col content-center text-center">
    <h2 className="py-4 font-normal uppercase text-3xl">
      About <em>Patti Adams</em>
    </h2>
    <article className="flex flex-col sm:flex-row justify-center">
      <img
        src={portrait}
        alt="Patti Adams portrait"
        id="avatar"
        className="w-full h-64 object-cover sm:m-4 sm:h-auto sm:max-w-xs"
      />
      <div className="font-light p-4 sm:max-w-md my-auto">
        <p>Art is present in everything</p>
        <p>
          No formal art education should never stop anybody from creating. If
          your soul desires to make a world a more beautiful place - please keep
          on doing it. This can become the mission of your life.
        </p>
        <p>
          For Patti art is one of the ways to express herself. It makes it
          possible to share with people the way she sees world, without any
          words.
        </p>
      </div>
    </article>
  </section>
);

export default Bio;
