import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { generateMealplan } from "../../actions/spoonacular/mealplans";

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
      <div className="container-full-bg my-4">
        <div className="jumbotron">
          <h2 className="display-4">Generate a Meal Plan</h2>
          <p className="lead">
            Planning your meals can be hard. Use the form to quickly generate a
            mealplan for the day.
          </p>
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-4">
                <label>Diet</label>
                <input
                  className="form-control"
                  type="text"
                  name="diet"
                  onChange={this.onChange}
                  value={diet}
                />
              </div>
              <div className="col-4">
                <label>Exclude</label>
                <input
                  className="form-control"
                  type="text"
                  name="exclude"
                  onChange={this.onChange}
                  value={exclude}
                />
              </div>
              <div className="col-2">
                <label>Target Calories</label>
                <input
                  className="form-control"
                  type="number"
                  name="targetCalories"
                  onChange={this.onChange}
                  value={targetCalories}
                />
              </div>
              <div className="col-2">
                <label style={{ visibility: "hidden" }}>Submit</label>
                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { generateMealplan })(Form);
