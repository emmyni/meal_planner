import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class RecipeCard extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Fragment>
        <div className="card">
          <img
            src={this.props.recipe.image}
            className="card-img-top"
            alt={this.props.recipe.title}
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href={this.props.recipe.sourceUrl}>
                <strong>{this.props.recipe.title}</strong>
              </a>
            </h5>
            <p className="card-text">
              Ready in {this.props.recipe.readyInMinutes} Minutes.{" "}
              {this.props.recipe.servings} servings.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, {})(RecipeCard);
