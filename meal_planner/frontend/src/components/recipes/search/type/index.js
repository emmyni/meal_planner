import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipeByType } from "../../../../actions/spoonacular/recipes";
import Form from "./form";
import RecipeList from "../../../common/recipes/recipeList";
import Pagination from "../../../common/pagination";

export class RecipeByTypeIndex extends Component {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    recipesFetched: PropTypes.bool.isRequired,
    totalRecipes: PropTypes.number.isRequired,
    getRecipeByType: PropTypes.func.isRequired,
  };

  state = {
    pageNum: 0,
    query: "",
    cuisine: "",
    diet: "",
    excludeIngredients: "",
    intolerances: "",
    offset: 0,
    number: 10,
  };

  updatePage = (pageNum) => {
    const totalPages = Math.ceil(this.props.totalRecipes / this.state.number);
    if (pageNum < totalPages && pageNum >= 0) {
      this.setState(
        { pageNum: pageNum, offset: this.state.number * pageNum },
        this.callGetRecipeByType()
      );
    }
  };

  setQuery = (obj) => {
    this.setState(obj);
  };

  callGetRecipeByType = () => {
    let {
      query,
      cuisine,
      diet,
      excludeIngredients,
      intolerances,
      offset,
      number,
    } = this.state;
    let info = {
      query,
      cuisine,
      diet,
      excludeIngredients,
      intolerances,
      offset,
      number,
    };
    this.props.getRecipeByType(info);
  };

  render() {
    let totalPages = Math.ceil(this.props.recipes.length / this.state.number);
    return (
      <Fragment>
        <Form setQuery={this.setQuery} />
        {this.props.recipes.length > 0 && totalPages > 1 && (
          <Pagination
            pageNum={this.state.pageNum}
            total={this.props.totalRecipes}
            updatePage={this.updatePage}
            isEnd={false}
            perPage={this.state.number}
          />
        )}
        {this.props.recipesFetched && (
          <RecipeList recipes={this.props.recipes} />
        )}
        {this.props.recipes.length > 0 && totalPages > 1 && (
          <Pagination
            pageNum={this.state.pageNum}
            total={this.props.totalRecipes}
            updatePage={this.updatePage}
            isEnd={true}
            perPage={this.state.number}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.apiRecipes.recipes,
  recipesFetched: state.apiRecipes.recipesFetched,
  totalRecipes: state.apiRecipes.totalRecipes,
});

export default connect(mapStateToProps, { getRecipeByType })(RecipeByTypeIndex);
