import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Form from "./form";
import RecipeList from "../../../common/recipes/recipeList";

export class RecipeByIngredientsIndex extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    recipesFetched: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Fragment>
        <Form />
        {this.props.recipesFetched && (
          <RecipeList recipes={this.props.recipes} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.apiRecipes.ingredientRecipes,
  recipesFetched: state.apiRecipes.recipesFetched,
});

export default connect(mapStateToProps, {})(RecipeByIngredientsIndex);
