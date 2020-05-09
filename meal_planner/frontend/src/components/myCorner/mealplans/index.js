import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMealplan } from "../../../actions/mealplans";
import { getRecipe } from "../../../actions/recipes";
import MealplanCard from "./mealplanCard";

export class MealplanIndex extends Component {
  static propTypes = {
    getMealplan: PropTypes.func.isRequired,
    getRecipe: PropTypes.func.isRequired,
    mealplans: PropTypes.array.isRequired,
    myRecipes: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getRecipe();
    this.props.getMealplan();
  }

  render() {
    return (
      <Fragment>
        <div className="my-4">
          <h2>My Saved Mealplans</h2>
          {this.props.mealplans.map((mealplan) => (
            <div>
              <p>{mealplan.id}</p>
              <MealplanCard
                mealplan={mealplan}
                key={mealplan.id}
              />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mealplans: state.mealplans.myMealplans,
  myRecipes: state.recipes,
});

export default connect(mapStateToProps, { getMealplan, getRecipe })(
  MealplanIndex
);
