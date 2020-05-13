import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipe } from "../../actions/recipes";

export class SearchRecipes extends Component {
  static propTypes = {
    getRecipe: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    if (this.props.isAuthenticated) this.props.getRecipe();
  }

  render() {
    return (
      <Fragment>
        <div className="container-full-bg my-5">
          <div className="jumbotron bg-light">
            <h1 className="display-4">Welcome to Spoonalicious</h1>
            <p className="lead">
              Start exploring a variety of new and interesting recipes and
              generate your own meal plan.
            </p>
            <hr className="my-4" />
            <p>Explore recipes...</p>
            <a
              className="btn btn-secondary btn-lg m-2"
              href="#/search-by-ingredients"
              role="button"
            >
              By Ingredients
            </a>
            <a
              className="btn btn-success btn-lg m-2"
              href="#/search-by-type"
              role="button"
            >
              By Type
            </a>
            <a
              className="btn btn-info btn-lg m-2"
              href="#/search-random"
              role="button"
            >
              Random
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  myRecipes: state.recipes.myRecipes,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getRecipe })(SearchRecipes);
