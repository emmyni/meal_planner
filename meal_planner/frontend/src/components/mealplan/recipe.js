import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Markup } from "interweave";
import { addRecipe, getRecipe } from "../../actions/recipes";

export class Recipe extends Component {
  state = {
    isSaved: this.props.recipes.some((meal) => meal.id == this.props.meal.id)
      ? true
      : false,
  };

  static propTypes = {
    addRecipe: PropTypes.func.isRequired,
  };

  saveRecipe = () => {
    const {
      title,
      readyInMinutes,
      servings,
      sourceUrl,
      image,
      summary,
    } = this.props.meal;

    const recipe = {
      recipe_id: this.props.meal.id,
      title,
      readyInMinutes,
      servings,
      sourceUrl,
      image,
      summary,
    };

    this.props.addRecipe(recipe);
  };

  deleteRecipe = () => {
    console.log(this.props.meal.id);
  };

  toggleButton = (e) => {
    this.isSaved ? this.deleteRecipe() : this.saveRecipe();

    this.setState((prevState) => ({
      isSaved: !prevState.isSaved,
    }));
  };

  render() {
    const meal = this.props.meal;
    return (
      <Fragment>
        <li className="media" style={{ marginBottom: 30 }}>
          <img
            src={meal.image}
            className="mr-3 img-fluid"
            alt={meal.title}
            style={{ maxWidth: 256, maxHeight: 256 }}
          />
          <div className="media-body">
            <h5 className="mt-0 mb-1">
              <a href={meal.sourceUrl}>{meal.title}</a>
              <button
                type="button"
                onClick={this.toggleButton}
                className={
                  this.state.isSaved
                    ? "btn float-right btn-info"
                    : "btn float-right btn-primary"
                }
              >
                {this.state.isSaved ? "Saved" : "Save"}
              </button>
            </h5>
            Ready in {meal.readyInMinutes} minutes. {meal.servings} Servings.
            <Markup content={meal.summary} />
          </div>
        </li>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { addRecipe })(Recipe);
