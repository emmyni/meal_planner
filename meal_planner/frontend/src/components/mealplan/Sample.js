import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Sample extends Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Fragment>
        <h2>Meal Plan</h2>
        <h5>Nutrients</h5>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <h5>Recipes</h5>
        <ul className="list-unstyled">
          {this.props.meals.map((meal) => (
            <li className="media" key={meal.id}>
              <img src="..." className="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0 mb-1">{meal.title}</h5>
                Ready in {meal.readyInMinutes} minutes. {meal.servings}{" "}
                Servings.
                <br />
                <a href={meal.sourceUrl}>{meal.sourceUrl}</a>
              </div>
              <br />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.mealplan.mealplanShort.meals,
});
export default connect(mapStateToProps, {})(Sample);
