import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteMealplan } from "../../../actions/mealplans";
import RecipeCard from "./recipeCard";

export class MealplanCard extends Component {
  static propTypes = {
    deleteMealplan: PropTypes.func.isRequired,
    mealplan: PropTypes.object.isRequired,
    recipes: PropTypes.array.isRequired,
  };

  render() {
    const recipes = this.props.recipes;
    console.log("recipes");
    console.log(recipes);
    recipes.map((recipe) => {
      console.log(recipe);
    });
    return (
      <Fragment>
        <div className="card-deck">
          <p>Hello</p>
          {recipes.map(function (recipe) {
            // <RecipeCard recipe={recipe} key={recipe.recipe_id} />;
            return (
              <div className="card" key={recipe.recipe_id}>
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">Ready in {recipe.readyInMinutes}</p>
                  <p className="card-text">Serves {recipe.servings}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { deleteMealplan })(MealplanCard);
