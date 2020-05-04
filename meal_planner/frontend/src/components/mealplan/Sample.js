import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipe } from "../../actions/recipes";
import Recipe from "../myCorner/recipes/recipe";

export class Sample extends Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
    nutrients: PropTypes.object.isRequired,
    getRecipe: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
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
        <h2>Meal Plan</h2>
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
        <ul className="list-unstyled">
          {this.props.meals.map((meal) => (
            <Recipe meal={meal} key={meal.id} />
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.mealplan.mealplanExtended,
  nutrients: state.mealplan.mealplanShort.nutrients,
  recipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { getRecipe })(Sample);
