import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteMealplan } from "../../../actions/mealplans";
import { deleteRecipe } from "../../../actions/recipes";
import RecipeCard from "./recipeCard";
import Modal from "../../common/mealplan/modal";

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
              <div>
                <strong>{this.props.mealplan.name}</strong>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  onClick={this.delete}
                  className="btn float-right btn-danger mx-2"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-warning float-right mx-2"
                  data-toggle="modal"
                  data-target="#saveModal"
                >
                  Update
                </button>
              </div>
            </div>
          </h5>

          <div className="card-body">
            <h5 className="card-title">
              <strong>{this.props.mealplan.date}</strong>:{" "}
              {this.props.mealplan.details}
            </h5>
            <div className="card-deck">
              {recipes.map(function (recipe) {
                return <RecipeCard recipe={recipe} key={recipe.recipe_id} />;
              })}
            </div>
          </div>
        </div>
        <Modal isUpdate={true} dbMealplan={this.props.mealplan} />
      </Fragment>
    );
  }
}

export default connect(null, { deleteMealplan, deleteRecipe })(MealplanCard);
