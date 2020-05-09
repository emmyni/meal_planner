import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipeByType } from "../../../../actions/spoonacular/recipes";

export class Form extends Component {
  state = {
    query: "",
    cuisine: "",
    diet: "",
    excludeIngredients: "",
    intolerances: "",
    offset: 0,
    number: 2,
  };

  static propTypes = {
    getRecipeByType: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      query,
      cuisine,
      diet,
      excludeIngredients,
      intolerances,
      offset,
      number,
    } = this.state;
    const info = {
      query,
      cuisine,
      diet,
      excludeIngredients,
      intolerances,
      offset,
      number,
    };
    this.props.getRecipeByType(info);
    this.setState({
      query: "",
      cuisine: "",
      diet: "",
      excludeIngredients: "",
      intolerances: "",
      offset: 0,
      number: 2,
    });
  };
  render() {
    const {
      query,
      cuisine,
      diet,
      excludeIngredients,
      intolerances,
      offset,
      number,
    } = this.state;
    const cuisines = [
      "African",
      "American",
      "British",
      "Cajun",
      "Caribbean",
      "Chinese",
      "Eastern European",
      "European",
      "French",
      "German",
      "Greek",
      "Indian",
      "Irish",
      "Italian",
      "Japanese",
      "Jewish",
      "Korean",
      "Latin American",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "Southern",
      "Spanish",
      "Thai",
      "Vietnamese",
    ];
    const diets = [
      "Gluten Free",
      "Ketogenic",
      "Vegetarian",
      "Lacto-Vegetarian",
      "Ovo-Vegetarian",
      "Vegan",
      "Pescetarian",
      "Paleo",
      "Primal",
      "Whole30",
    ];
    const intoleranceList = [
      "Dairy",
      "Egg",
      "Gluten",
      "Grain",
      "Peanut",
      "Seafood",
      "Sesame",
      "Shellfish",
      "Soy",
      "Sulfite",
      "Tree Nut",
      "Wheat",
    ];
    return (
      <Fragment>
        <div className="container-full-bg">
          <div className="jumbotron">
            <h1 className="display-4">Search Recipes by Type</h1>
            <p className="lead">
              Looking for a specific type of recipe? Fill in some information to
              find the perfect recipe!
            </p>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col">
                  <label>Dish:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="query"
                    onChange={this.onChange}
                    value={query}
                  />
                </div>
                <div className="col">
                  <label>Cuisine:</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    name="cuisine"
                    onChange={this.onChange}
                    value={cuisine}
                  >
                    <option hidden>optional</option>
                    {cuisines.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <label>Diet:</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    name="diet"
                    onChange={this.onChange}
                    value={diet}
                  >
                    <option hidden>optional</option>
                    {diets.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <label>Exclude Ingredients:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="excludeIngredients"
                    placeholder="optional"
                    onChange={this.onChange}
                    value={excludeIngredients}
                  />
                </div>
                <div className="col">
                  <label>Intolerances:</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    name="intolerances"
                    onChange={this.onChange}
                    value={intolerances}
                  >
                    <option hidden>optional</option>
                    {intoleranceList.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-auto my-1">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { getRecipeByType })(Form);
