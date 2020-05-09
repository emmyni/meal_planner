import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class RecipeCard extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
  };

  render() {
    recipe = this.props.recipe;
    return (
      <Fragment>
        <div className="card">
          <img src={recipe.image} className="card-img-top" alt={recipe.title} />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">Ready in {recipe.readyInMinutes}</p>
            <p className="card-text">Serves {recipe.servings}</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, {})(RecipeCard);
