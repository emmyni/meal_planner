import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MealplanCard from "./mealplanCard";

export class MealplanList extends Component {
  static propTypes = {
    mealplans: PropTypes.array.isRequired,
    myRecipes: PropTypes.array.isRequired,
    pageNum: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
  };

  render() {
    const findRecipes = (recipe_id) => {
      return this.props.myRecipes.find((recipe) => {
        return recipe.recipe_id == recipe_id;
      });
    };
    let offset = this.props.pageNum * this.props.perPage;
    return (
      <Fragment>
        <div>
          {this.props.mealplans
            .slice(offset, offset + this.props.perPage)
            .map((mealplan) => (
              <MealplanCard
                mealplan={mealplan}
                recipes={[
                  findRecipes(mealplan.recipe_id1),
                  findRecipes(mealplan.recipe_id2),
                  findRecipes(mealplan.recipe_id3),
                ]}
                key={mealplan.id}
              />
            ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mealplans: state.mealplans.myMealplans,
  myRecipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, {})(MealplanList);
