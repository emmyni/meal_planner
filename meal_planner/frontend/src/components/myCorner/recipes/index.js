import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipe } from "../../../actions/recipes";
import { getShoppingList } from "../../../actions/shoppingList";
import RecipeList from "../../common/recipes/recipeList";

export class My_Recipes extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipe: PropTypes.func.isRequired,
    getShoppingList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getRecipe();
    this.props.getShoppingList();
  }

  render() {
    return (
      <Fragment>
        <div className="my-4">
          <h2>My Saved Recipes</h2>
        </div>
        <RecipeList recipes={this.props.recipes} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { getRecipe, getShoppingList })(
  My_Recipes
);
