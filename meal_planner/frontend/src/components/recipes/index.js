import React, { Fragment } from "react";

export default function SearchRecipes() {
  return (
    <Fragment>
      <div className="container-full-bg my-5">
        <div className="jumbotron bg-light">
          <h1 className="display-4">Welcome to Meal Planner</h1>
          <p className="lead">
            Start exploring a variety of new and interesting recipes and
            generate your own meal plan.
          </p>
          <hr className="my-4" />
          <p>Explore recipes...</p>
          <a
            className="btn btn-secondary btn-lg m-2"
            href="#/search-by-ingredients"
            role="button"
          >
            By Ingredients
          </a>
          <a
            className="btn btn-success btn-lg m-2"
            href="#/search-by-type"
            role="button"
          >
            By Type
          </a>
          <a
            className="btn btn-info btn-lg m-2"
            href="#/search-random"
            role="button"
          >
            Random
          </a>
        </div>
      </div>
    </Fragment>
  );
}
