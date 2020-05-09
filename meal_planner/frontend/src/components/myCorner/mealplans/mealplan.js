import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MealplanCard from "./mealplanCard";

export class MealplanList extends Component {
  static propTypes = {
    mealplans: PropTypes.array.isRequired,
    myRecipes: PropTypes.array.isRequired,
  };

  state

  render() {
    const findRecipes = (recipe_id) => {
      return this.props.myRecipes.find((recipe) => {
        return recipe.recipe_id == recipe_id;
      });
    };
    console.log(this.props.mealplans);
    return (
      <Fragment>
        {this.props.mealplans.map((mealplan) => (
          <div key={mealplan.id}>
            <p>{JSON.stringify(findRecipes(mealplan.recipe_id1))}</p>
          </div>
          //   <MealplanCard
          //     mealplan={mealplan}
          //     recipes={[
          //       findRecipes(mealplan.recipe_id1),
          //       findRecipes(mealplan.recipe_id2),
          //       findRecipes(mealplan.recipe_id3),
          //     ]}
          //     key={mealplan.id}
          //   />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mealplans: state.mealplans.myMealplans,
  myRecipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, {})(MealplanList);
