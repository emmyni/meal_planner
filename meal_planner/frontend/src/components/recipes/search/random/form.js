import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRandomRecipe } from "../../../../actions/spoonacular/recipes";

export class Form extends Component {
  state = {
    tags: "",
    number: 1,
  };

  static propTypes = {
    getRandomRecipe: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { tags, number } = this.state;
    const info = { tags, number, apiKey: process.env.REACT_APP_API_KEY };
    this.props.getRandomRecipe(info);
    this.setState({
      tags: "",
      number: 1,
    });
  };
  render() {
    const { tags, number } = this.state;
    return (
      <Fragment>
        <div className="container-full-bg">
          <div className="jumbotron">
            <h1 className="display-4">Feeling Adventurous?</h1>
            <p className="lead">Get some random new recipes to try!</p>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="tags"
                    placeholder="Tags"
                    onChange={this.onChange}
                    value={tags}
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
                    <option hidden>Number of Recipes</option>
                    {[...Array(10).keys()].map((option) => (
                      <option key={option + 1} value={option + 1}>
                        {option + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-auto my-1">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <p>
              Note: Tags can be diets, meal types, cuisines, or intolerances
              that the recipe must have. Tags need to be separated by a comma.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { getRandomRecipe })(Form);
