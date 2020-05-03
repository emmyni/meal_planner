import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Markup } from "interweave";

export class Sample extends Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
    nutrients: PropTypes.object.isRequired,
  };

  render() {
    const max = Math.max(
      this.props.nutrients.protein,
      this.props.nutrients.fat,
      this.props.nutrients.carbohydrates
    );

    const nutrientPercents = {
      protein: ((this.props.nutrients.protein / max) * 100).toString(),
      fat: ((this.props.nutrients.fat / max) * 100).toString(),
      carbohydrates: (
        (this.props.nutrients.carbohydrates / max) *
        100
      ).toString(),
    };

    const nutrientColours = {
      protein: "bg-info",
      fat: "bg-warning",
      carbohydrates: "bg-danger",
    };

    return (
      <Fragment>
        <h2>Meal Plan</h2>
        <h5>Nutrients: {this.props.nutrients.calories} Calories</h5>
        {Object.keys(nutrientPercents).map((name) => (
          <div className="progress" key={name} style={{ marginBottom: "3%" }}>
            <div
              className="progress-bar"
              className={nutrientColours[name]}
              role="progressbar"
              style={{ width: nutrientPercents[name] + "%" }}
              aria-valuenow={nutrientPercents[name]}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>
                <div style={{ color: "white", textAlign: "center" }}>
                  {name}: {this.props.nutrients[name]}g
                </div>
              </strong>
            </div>
          </div>
        ))}
        <h5>Recipes</h5>
        <ul className="list-unstyled">
          {this.props.meals.map((meal) => (
            <li className="media" key={meal.id} style={{ marginBottom: 30 }}>
              <img
                src={meal.image}
                className="mr-3 img-fluid"
                alt={meal.title}
                style={{ maxWidth: 256, maxHeight: 256 }}
              />
              <div className="media-body">
                <h5 className="mt-0 mb-1">
                  <a href={meal.sourceUrl}>{meal.title}</a>
                </h5>
                Ready in {meal.readyInMinutes} minutes. {meal.servings}{" "}
                Servings.
                <Markup content={meal.summary} />
              </div>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.mealplan.mealplanExtended,
  nutrients: state.mealplan.mealplanShort.nutrients,
});
export default connect(mapStateToProps, {})(Sample);
