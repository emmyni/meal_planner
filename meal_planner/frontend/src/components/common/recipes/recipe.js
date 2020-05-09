import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Markup } from "interweave";
import { addRecipe, deleteRecipe } from "../../../actions/recipes";
import { getRecipeInfo } from "../../../actions/spoonacular/recipes";
import { addShoppingList } from "../../../actions/shoppingList";

export class Recipe extends Component {
  state = {
    isSaved: this.props.recipes.some((meal) => meal.id == this.props.meal.id)
      ? true
      : false,
    isDB: this.props.meal.hasOwnProperty("recipe_id"),
  };

  static propTypes = {
    addRecipe: PropTypes.func.isRequired,
    deleteRecipe: PropTypes.func.isRequired,
    getRecipeInfo: PropTypes.func.isRequired,
    addShoppingList: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
    recipesExtended: PropTypes.array,
    shoppingList: PropTypes.array.isRequired,
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
    // from database
    if (this.state.isDB) this.props.deleteRecipe(this.props.meal.id);
    // from spoonacular API
    else {
      const mealDB = this.props.recipes.find((obj) => {
        return obj.recipe_id == this.props.meal.id;
      });
      this.props.deleteRecipe(mealDB.id);
    }
  };

  toggleButton = (e) => {
    this.state.isSaved ? this.deleteRecipe() : this.saveRecipe();

    this.setState((prevState) => ({
      isSaved: !prevState.isSaved,
    }));
  };

  addIngredients = () => {
    const recipe_id = this.state.isDB
      ? this.props.meal.recipe_id
      : this.props.meal.id;
    this.props.getRecipeInfo(recipe_id);
    // find a better solution to setTimeout
    setTimeout(() => {
      const ingredients = this.props.recipesExtended[0].extendedIngredients;
      ingredients.forEach((item) => {
        const info = {
          ingredient_id: item.id,
          name: item.name,
          quantity: Math.ceil(item.amount),
          units: item.unit,
          details: item.meta.join(),
        };
        // update existing
        if (
          this.props.shoppingList.some(
            (item) =>
              item.name === info.name ||
              item.ingredient_id == info.ingredient_id
          )
        ) {
          console.log("update");
        }
        // create new
        else this.props.addShoppingList(info);
      });
    }, 500);
  };

  render() {
    const meal = this.props.meal;
    return (
      <Fragment>
        <li style={{ marginBottom: 30 }}>
          <div className="container">
            <div className="row">
              <div className="col col-4">
                <img
                  src={meal.image}
                  className="m-2 img-fluid"
                  alt={meal.title}
                  style={{ maxWidth: 300, maxHeight: 300 }}
                />
                <button
                  type="button"
                  className="btn btn-primary btn-sm m-2"
                  onClick={this.addIngredients}
                >
                  Add Ingredients to Shopping List
                </button>
              </div>
              <div className="col col-8">
                <h5 className="mt-0 mb-1">
                  <a href={meal.sourceUrl}>{meal.title}</a>
                  {this.state.isDB && meal.inMealplan && (
                    <span class="badge badge-pill badge-secondary mx-2">
                      In Mealplan
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={this.toggleButton}
                    className={
                      this.state.isSaved
                        ? this.state.isDB
                          ? "btn float-right btn-danger"
                          : "btn float-right btn-info"
                        : "btn float-right btn-primary"
                    }
                  >
                    {this.state.isSaved
                      ? this.state.isDB
                        ? "Delete"
                        : "Saved"
                      : "Save"}
                  </button>
                </h5>
                Ready in {meal.readyInMinutes} minutes. {meal.servings}{" "}
                Servings.
                <Markup content={meal.summary} />
              </div>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.myRecipes,
  recipesExtended: state.apiRecipes.recipesExtended,
  shoppingList: state.shoppingList.items,
});

export default connect(mapStateToProps, {
  addRecipe,
  deleteRecipe,
  getRecipeInfo,
  addShoppingList,
})(Recipe);
