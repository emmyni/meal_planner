import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipe } from "../../../actions/recipes";
import { getShoppingList } from "../../../actions/shoppingList";
import RecipeList from "../../common/recipes/recipeList";
import { Pagination } from "../../common/pagination";

export class My_Recipes extends Component {
  // constructor(props) {
  //   super(props);

  //   this.updatePage = this.updatePage.bind(this);
  // }

  state = {
    offset: 0,
    perPage: 10,
  };
  
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipe: PropTypes.func.isRequired,
    getShoppingList: PropTypes.func.isRequired,
  };

  updatePage = (pageNum) => {
    console.log("child:" + pageNum);
    this.setState({ offset: pageNum });
  };

  componentDidMount() {
    this.props.getRecipe();
    this.props.getShoppingList();
  }

  render() {
    console.log(this.props.recipes.length);
    return (
      <Fragment>
        <div className="my-4">
          <h2>My Saved Recipes</h2>
        </div>
        {this.props.recipes.length > 0 && (
          <Pagination
            offset={this.state.offset}
            total={this.props.recipes.length}
            updatePage={this.updatePage}
          />
        )}
        <RecipeList
          recipes={this.props.recipes.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
          )}
        />
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
