import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipe } from "../../../actions/recipes";
import { getShoppingList } from "../../../actions/shoppingList";
import RecipeList from "../../common/recipes/recipeList";
import { Pagination } from "../../common/pagination";

export class My_Recipes extends Component {
  state = {
    pageNum: 0,
    perPage: 10,
  };

  static propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipe: PropTypes.func.isRequired,
    getShoppingList: PropTypes.func.isRequired,
  };

  updatePage = (pageNum) => {
    const totalPages = Math.ceil(
      this.props.recipes.length / this.state.perPage
    );
    if (pageNum < totalPages && pageNum >= 0)
      this.setState({ pageNum: pageNum });
  };

  componentDidMount() {
    this.props.getRecipe();
    this.props.getShoppingList();
  }

  render() {
    let offset = this.state.pageNum * this.state.perPage;
    return (
      <Fragment>
        <div className="my-4">
          {this.props.recipes.length > 0 && (
            <Pagination
              pageNum={this.state.pageNum}
              total={this.props.recipes.length}
              updatePage={this.updatePage}
              isEnd={false}
              perPage={this.state.perPage}
            />
          )}
          <h2>My Saved Recipes</h2>
        </div>

        <RecipeList
          recipes={this.props.recipes.slice(
            offset,
            offset + this.state.perPage
          )}
        />
        {this.props.recipes.length > 0 && (
          <Pagination
            pageNum={this.state.pageNum}
            total={this.props.recipes.length}
            updatePage={this.updatePage}
            isEnd={true}
            perPage={this.state.perPage}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { getRecipe, getShoppingList })(
  My_Recipes
);
