import React, { Fragment } from "react";
import Recipe from "./recipe";

export default function RecipeList(props) {
  return (
    <Fragment>
      <ul className="list-unstyled">
        {props.recipes.map((meal) => (
          <Recipe meal={meal} key={meal.id} />
        ))}
      </ul>
    </Fragment>
  );
}
