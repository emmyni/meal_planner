import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipe } from "../../actions/recipes";
import Recipe from "./recipe";

export class Recipes_index extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipe: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getRecipe();
  }
  render() {
    return (
      <Fragment>
        <ul className="list-unstyled">
          {this.props.recipes.map((meal) => (
            <Recipe meal={meal} key={meal.id} />
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { getRecipe })(Recipes_index);
