import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipeByIngredients } from "../../../../actions/spoonacular/recipes";

export class Form extends Component {
  state = {
    ingredients: "",
    number: 0,
    ranking: "",
  };

  static propTypes = {
    getRecipeByIngredients: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { ingredients, number, ranking } = this.state;
    // remove white splaces
    ingredients.trim();
    ingredients.split(" ,").join(",");
    ingredients.split(", ").join(",");
    const info = {
      ingredients,
      number,
      ranking,
    };
    this.props.getRecipeByIngredients(info);
    this.setState({
      ingredients: "",
      number: 0,
      ranking: 0,
    });
  };
  render() {
    const { ingredients, number, ranking } = this.state;
    return (
      <Fragment>
        <div className="container-full-bg">
          <div className="jumbotron">
            <h1 className="display-4">Find Recipes by Ingredients</h1>
            <p className="lead">Get some random new recipes to try!</p>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="ingredients"
                    placeholder="Ingredients"
                    onChange={this.onChange}
                    value={ingredients}
                  />
                </div>
                <div className="col">
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    name="number"
                    onChange={this.onChange}
                    value={number}
                  >
                    <option hidden>Number</option>
                    {[...Array(10).keys()].map((option) => (
                      <option key={option + 1} value={option + 1}>
                        {option + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    name="ranking"
                    onChange={this.onChange}
                    value={ranking}
                  >
                    <option hidden>Priority</option>
                    <option value={1}>Maximize used ingredients</option>
                    <option value={2}>Minimize missing ingredients</option>
                  </select>
                </div>
                <div className="col-auto my-1">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <p>Note: Ingredients need to be separated by a comma.</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { getRecipeByIngredients })(Form);
