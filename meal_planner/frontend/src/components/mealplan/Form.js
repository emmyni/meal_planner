import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { generateMealplan } from "../../actions/mealplan";
import { SPOONACULAR_API_KEY } from "../../../../../apikey";

export class Form extends Component {
  state = {
    diet: "",
    exclude: "",
    targetCalories: 2000,
  };

  static propTypes = {
    generateMealplan: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { diet, exclude, targetCalories } = this.state;
    const mealplanForm = {
      diet,
      exclude,
      targetCalories,
      timeFrame: "day",
      apiKey: SPOONACULAR_API_KEY,
    };
    this.props.generateMealplan(mealplanForm);
    this.setState({
      diet: "",
      exclude: "",
      targetCalories: 2000,
    });
  };
  render() {
    const { diet, exclude, targetCalories } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Generate a Meal Plan</h2>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col">
              <label>Diet</label>
              <input
                className="form-control"
                type="text"
                name="diet"
                onChange={this.onChange}
                value={diet}
              />
            </div>
            <div className="col">
              <label>Exclude</label>
              <input
                className="form-control"
                type="text"
                name="exclude"
                onChange={this.onChange}
                value={exclude}
              />
            </div>
            <div className="col">
              <label>Target Calories</label>
              <input
                className="form-control"
                type="number"
                name="targetCalories"
                onChange={this.onChange}
                value={targetCalories}
              />
            </div>
            <div className="form-group">
              <label style={{ visibility: "hidden" }}>Submit</label>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { generateMealplan })(Form);
