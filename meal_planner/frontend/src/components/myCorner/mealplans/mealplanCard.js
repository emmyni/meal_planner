import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteMealplan } from "../../../actions/mealplans";
import RecipeCard from "./recipeCard";

export class MealplanCard extends Component {
  static propTypes = {
    deleteMealplan: PropTypes.func.isRequired,
    mealplan: PropTypes.object.isRequired,
    stateRecipes: PropTypes.array.isRequired,
  };

  state = {
    recipes: [],
  };

  static getDerivedStateFromProps(props, state) {
    setTimeout(() => {
      console.log(props.mealplan);
      console.log(props.stateRecipes);
    }, 1000);

    return {
      recipes: [
        props.stateRecipes.find((recipe) => {
          return recipe.recipe_id == props.mealplan.recipe_id1;
        }),
        props.stateRecipes.find((recipe) => {
          return recipe.recipe_id == props.mealplan.recipe_id2;
        }),
        props.stateRecipes.find((recipe) => {
          return recipe.recipe_id == props.mealplan.recipe_id3;
        }),
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <div className="card-deck">
          {this.state.recipes.map((recipe) => {
            <RecipeCard recipe={recipe} key={recipe.recipe_id} />;
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  stateRecipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { deleteMealplan })(MealplanCard);
