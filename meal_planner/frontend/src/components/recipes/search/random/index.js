import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Form from "./form";
import RecipeList from "../../../common/recipeList";

export class RandomRecipeIndex extends Component {
  static propTypes = {
    randomRecipes: PropTypes.array.isRequired,
    randomRecipesFetched: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Fragment>
        <Form />
        {this.props.randomRecipesFetched && (
          <RecipeList recipes={this.props.randomRecipes} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  randomRecipes: state.apiRecipes.randomRecipes,
  randomRecipesFetched: state.apiRecipes.randomRecipesFetched,
});

export default connect(mapStateToProps, {})(RandomRecipeIndex);
