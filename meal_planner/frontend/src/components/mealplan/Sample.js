import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Markup } from "interweave";
import { addRecipe, getRecipe } from "../../actions/recipes";

export class Sample extends Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
    nutrients: PropTypes.object.isRequired,
    addRecipe: PropTypes.func.isRequired,
    getRecipe: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
  };

  saveRecipe = (e) => {
    e.preventDefault();
    const id = e.target.id;
    let recipe_info = this.props.meals.find((meal) => {
      return meal.id == id;
    });

    const {
      title,
      readyInMinutes,
      servings,
      sourceUrl,
      image,
      summary,
    } = recipe_info;

    const recipe = {
      recipe_id: recipe_info.id,
      title,
      readyInMinutes,
      servings,
      sourceUrl,
      image,
      summary,
    };

    this.props.addRecipe(recipe);
  };

  componentDidMount() {
    this.props.getRecipe();
  }

  render() {
    const max = Math.max(
      this.props.nutrients.protein,
      this.props.nutrients.fat,
      this.props.nutrients.carbohydrates
    );

    const getPercents = (name) => {
      return name == "calories"
        ? "100"
        : ((this.props.nutrients[name] / max) * 100).toString();
    };

    const nutrientColours = {
      calories: "bg-success",
      protein: "bg-info",
      fat: "bg-warning",
      carbohydrates: "bg-danger",
    };

    const isSaved = (id) => {
      return this.props.recipes.some((meal) => meal.id == id) ? true : false;
    };

    const getText = (id) => {
      return this.props.recipes.some((meal) => meal.id == id)
        ? "Saved"
        : "Save";
    };

    return (
      <Fragment>
        <h2>Meal Plan</h2>
        <h5>Nutrients:</h5>
        {Object.keys(this.props.nutrients).map((name) => (
          <div className="progress" key={name} style={{ marginBottom: "1%" }}>
            <div
              className="progress-bar"
              className={nutrientColours[name]}
              role="progressbar"
              style={{ width: getPercents(name) + "%" }}
              aria-valuenow={getPercents(name)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <strong>
                <div style={{ textAlign: "center" }}>
                  {name}: {this.props.nutrients[name]}
                </div>
              </strong>
            </div>
          </div>
        ))}
        <h5>Recipes</h5>
        <ul className="list-unstyled">
          {this.props.meals.map((meal) => (
            <li className="media" key={meal.id} style={{ marginBottom: 30 }}>
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
                    onClick={this.saveRecipe}
                    id={meal.id}
                    className={
                      isSaved(meal.id)
                        ? "btn float-right btn-info"
                        : "btn float-right btn-primary"
                    }
                  >
                    {getText(meal.id)}
                  </button>
                </h5>
                Ready in {meal.readyInMinutes} minutes. {meal.servings}{" "}
                Servings.
                <Markup content={meal.summary} />
              </div>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: state.mealplan.mealplanExtended,
  nutrients: state.mealplan.mealplanShort.nutrients,
  recipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { addRecipe, getRecipe })(Sample);
