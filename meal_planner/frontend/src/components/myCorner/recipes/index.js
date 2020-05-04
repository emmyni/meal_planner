import React, { Fragment } from "react";
import MyRecipes from "./myRecipes";

export default function GeneratePlan() {
  return (
    <Fragment>
      <h1>My Saved Recipes</h1>
      <MyRecipes />
    </Fragment>
  );
}
