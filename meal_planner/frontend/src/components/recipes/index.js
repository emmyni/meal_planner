import React, { Fragment } from "react";

export default function GeneratePlan() {
  const button = {
    marginRight: "1vw",
  };
  return (
    <Fragment>
      <div className="container-full-bg">
        <div className="jumbotron bg-light">
          <h1 className="display-4">Welcome to Meal Planner</h1>
          <p className="lead">
            Start exploring a variety of new and interesting recipes and
            generate your own meal plan.
          </p>
          <hr className="my-4" />
          <p>Explore recipes...</p>
          <a
            className="btn btn-warning btn-lg"
            href="#/search-by-ingredients"
            role="button"
            style={button}
          >
            By Ingredients
          </a>
          <a
            className="btn btn-success btn-lg"
            href="#/search-by-type"
            role="button"
            style={button}
          >
            By Type
          </a>
          <a
            className="btn btn-info btn-lg"
            href="#/search-random"
            role="button"
            style={button}
          >
            Random
          </a>
        </div>
      </div>
    </Fragment>
  );
}
