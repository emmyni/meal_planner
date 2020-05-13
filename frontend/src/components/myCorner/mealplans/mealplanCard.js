import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteMealplan } from "../../../actions/mealplans";
import { deleteRecipe } from "../../../actions/recipes";
import {
  addShoppingList,
  updateShoppingList,
  deleteShoppingList,
} from "../../../actions/shoppingList";
import { getRecipeInfoBulk } from "../../../actions/spoonacular/recipes";
import RecipeCard from "./recipeCard";
import Modal from "../../common/mealplan/modal";

export class MealplanCard extends Component {
  static propTypes = {
    deleteMealplan: PropTypes.func.isRequired,
    deleteRecipe: PropTypes.func.isRequired,
    addShoppingList: PropTypes.func.isRequired,
    updateShoppingList: PropTypes.func.isRequired,
    deleteShoppingList: PropTypes.func.isRequired,
    getRecipeInfoBulk: PropTypes.func.isRequired,
    mealplan: PropTypes.object.isRequired,
    recipes: PropTypes.array.isRequired,
    recipesExtended: PropTypes.array,
    shoppingList: PropTypes.array.isRequired,
  };

  state = {
    ingredients_added: false,
  };

  delete = () => {
    this.props.deleteMealplan(this.props.mealplan.id);
    this.props.recipes.forEach((recipe) => {
      this.props.deleteRecipe(recipe.id);
    });
  };

  addIngredients = () => {
    const recipe_ids =
      this.props.mealplan.recipe_id1.toString() +
      "," +
      this.props.mealplan.recipe_id2.toString() +
      "," +
      this.props.mealplan.recipe_id3.toString();
    this.props.getRecipeInfoBulk({ ids: recipe_ids });

    // find a better solution to setTimeout
    setTimeout(() => {
      // 3 recipes
      for (let i = 0; i < 3; i++) {
        const ingredients = this.props.recipesExtended[i].extendedIngredients;
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
            const oldItem = this.props.shoppingList.find(
              (item) =>
                item.name === info.name ||
                item.ingredient_id == info.ingredient_id
            );
            this.props.updateShoppingList(oldItem.id, info);
          }
          // create new
          else this.props.addShoppingList(info);
        });
      }
      this.setState({ ingredients_added: true });
    }, 2000);
  };

  removeIngredients = () => {
    // 3 recipes
    for (let i = 0; i < 3; i++) {
      const ingredients = this.props.recipesExtended[i].extendedIngredients;
      ingredients.forEach((ingredient) => {
        // delete if existing
        if (
          this.props.shoppingList.some(
            (item) =>
              item.name === ingredient.name ||
              item.ingredient_id == ingredient.ingredient_id
          )
        ) {
          const oldItem = this.props.shoppingList.find(
            (item) =>
              item.name === ingredient.name ||
              item.ingredient_id == ingredient.ingredient_id
          );
          this.props.deleteShoppingList(oldItem.id);
        }
      });
    }

    this.setState({ ingredients_added: false });
  };

  render() {
    const recipes = this.props.recipes;
    return (
      <Fragment>
        <div className="card my-4">
          <h5 className="card-header">
            <div className="d-flex">
              <div>
                <strong>{this.props.mealplan.name}</strong>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  onClick={this.delete}
                  className="btn float-right btn-danger mx-2"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-warning float-right mx-2"
                  data-toggle="modal"
                  data-target={"#saveModal" + this.props.mealplan.id}
                >
                  Update
                </button>
              </div>
            </div>
          </h5>

          <div className="card-body">
            <h5 className="card-title">
              <strong>{this.props.mealplan.date}</strong>:{" "}
              {this.props.mealplan.details}
              <button
                type="button"
                onClick={
                  this.state.ingredients_added
                    ? this.removeIngredients
                    : this.addIngredients
                }
                className={
                  "btn btn-sm float-right mx-2 " +
                  (this.state.ingredients_added ? "btn-info" : "btn-primary")
                }
              >
                {this.state.ingredients_added
                  ? "Ingredients Added"
                  : "Add Ingredients to Shopping List"}
              </button>
            </h5>
            <div className="card-deck">
              {recipes.map(function (recipe) {
                return <RecipeCard recipe={recipe} key={recipe.recipe_id} />;
              })}
            </div>
          </div>
        </div>
        <Modal isUpdate={true} dbMealplan={this.props.mealplan} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipesExtended: state.apiRecipes.recipesExtended,
  shoppingList: state.shoppingList.items,
});

export default connect(mapStateToProps, {
  deleteMealplan,
  deleteRecipe,
  addShoppingList,
  updateShoppingList,
  deleteShoppingList,
  getRecipeInfoBulk,
})(MealplanCard);
