import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMealplan } from "../../../actions/mealplans";
import { getRecipe } from "../../../actions/recipes";
import MealplanList from "./mealplan";

export class MealplanIndex extends Component {
  static propTypes = {
    getMealplan: PropTypes.func.isRequired,
    getRecipe: PropTypes.func.isRequired,
    mealplans: PropTypes.array.isRequired,
    myRecipes: PropTypes.array.isRequired,
  };

  state = {
    loaded: false,
  };
  componentDidMount() {
    this.props.getRecipe();
    this.props.getMealplan();
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <div className="my-4">
          <h2>My Saved Mealplans</h2>
          {this.state.loaded && <MealplanList />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mealplans: state.mealplans.myMealplans,
  myRecipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { getMealplan, getRecipe })(
  MealplanIndex
);
