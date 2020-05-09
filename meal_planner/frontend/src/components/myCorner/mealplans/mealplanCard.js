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
    return (
      <Fragment>
        <div className="card-deck">
          <p>Hello</p>
          {this.props.recipes.map((recipe) => {
            <RecipeCard recipe={recipe} key={recipe.recipe_id} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { deleteMealplan })(MealplanCard);
