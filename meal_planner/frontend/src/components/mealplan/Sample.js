import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipe } from "../../actions/recipes";
import RecipeList from "../common/recipes/recipeList";
import Modal from "./modal";

export class Sample extends Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
    nutrients: PropTypes.object.isRequired,
    recipes: PropTypes.array.isRequired,
    getRecipe: PropTypes.func.isRequired,
    isMealplanSaved: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getRecipe();
  }

  render() {
    const max = Math.max(
      this.props.nutrients.protein,
      this.props.nutrients.fat,
      this.props.nutrients.carbohydrates
    );

    const getPercents = (name) => {
      return name == "calories"
        ? "100"
        : ((this.props.nutrients[name] / max) * 100).toString();
    };

    const nutrientColours = {
      calories: "bg-success",
      protein: "bg-info",
      fat: "bg-warning",
      carbohydrates: "bg-danger",
    };

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col col-12 px-0">
              <h2>
                <span>Meal Plan</span>
                <button
                  type="button"
                  className={
                    this.props.isMealplanSaved
                      ? "btn btn-info float-right"
                      : "btn btn-secondary float-right"
                  }
                  data-toggle="modal"
                  data-target="#saveModal"
                >
                  {this.props.isMealplanSaved
                    ? "Mealplan Saved"
                    : "Save Mealplan"}
                </button>
              </h2>
            </div>
          </div>
        </div>
        <h5>Nutrients:</h5>
        {Object.keys(this.props.nutrients).map((name) => (
          <div className="progress" key={name} style={{ marginBottom: "1%" }}>
            <div
              className="progress-bar"
              className={nutrientColours[name]}
              role="progressbar"
              style={{ width: getPercents(name) + "%" }}
              aria-valuenow={getPercents(name)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>
                <div style={{ textAlign: "center" }}>
                  {name}: {this.props.nutrients[name]}
                </div>
              </strong>
            </div>
          </div>
        ))}
        <h5>Recipes</h5>
        <RecipeList recipes={this.props.meals} />
        <Modal />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.apiMealplans.mealplanExtended,
  nutrients: state.apiMealplans.mealplanShort.nutrients,
  recipes: state.recipes.myRecipes,
  isMealplanSaved: state.mealplans.isMealplanSaved,
});

export default connect(mapStateToProps, { getRecipe })(Sample);
