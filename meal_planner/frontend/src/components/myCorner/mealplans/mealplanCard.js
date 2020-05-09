import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteMealplan } from "../../../actions/mealplans";
import { deleteRecipe } from "../../../actions/recipes";
import RecipeCard from "./recipeCard";

export class MealplanCard extends Component {
  static propTypes = {
    deleteMealplan: PropTypes.func.isRequired,
    deleteRecipe: PropTypes.func.isRequired,
    mealplan: PropTypes.object.isRequired,
    recipes: PropTypes.array.isRequired,
  };

  delete = () => {
    this.props.deleteMealplan(this.props.mealplan.id);
    this.props.recipes.forEach((recipe) => {
      this.props.deleteRecipe(recipe.id);
    });
  };

  render() {
    const recipes = this.props.recipes;
    return (
      <Fragment>
        <div className="card my-4">
          <h5 className="card-header">
            <div className="d-flex">
              <div>{this.props.mealplan.name}</div>
              <div className="ml-auto">
                <button
                  type="button"
                  onClick={this.delete}
                  className="btn float-right btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </h5>

          <div className="card-body">
            <h5 className="card-title">
              {this.props.mealplan.date}: {this.props.mealplan.details}
            </h5>
            <div className="card-deck">
              {recipes.map(function (recipe) {
                return <RecipeCard recipe={recipe} key={recipe.recipe_id} />;
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { deleteMealplan, deleteRecipe })(MealplanCard);
