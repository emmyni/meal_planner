import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMealplan } from "../../../actions/mealplans";
import { getRecipe } from "../../../actions/recipes";
import MealplanList from "./mealplanList";
import { Pagination } from "../../common/pagination";

export class MealplanIndex extends Component {
  static propTypes = {
    getMealplan: PropTypes.func.isRequired,
    getRecipe: PropTypes.func.isRequired,
    mealplans: PropTypes.array.isRequired,
    myRecipes: PropTypes.array.isRequired,
  };

  state = {
    loaded: false,
    pageNum: 0,
    perPage: 5,
  };

  updatePage = (pageNum) => {
    const totalPages = Math.ceil(
      this.props.mealplans.length / this.state.perPage
    );
    if (pageNum < totalPages && pageNum >= 0)
      this.setState({ pageNum: pageNum });
  };

  componentDidMount() {
    this.props.getRecipe();
    this.props.getMealplan();
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 150);
  }

  render() {
    let totalPages = Math.ceil(this.props.mealplans.length / this.state.number);

    return (
      <Fragment>
        <div className="my-4">
          {this.props.mealplans.length > 0 && totalPages > 1 && (
            <Pagination
              pageNum={this.state.pageNum}
              total={this.props.mealplans.length}
              updatePage={this.updatePage}
              isEnd={false}
              perPage={this.state.perPage}
            />
          )}
          <h2>My Saved Mealplans</h2>
          {this.state.loaded && (
            <MealplanList
              pageNum={this.state.pageNum}
              perPage={this.state.perPage}
            />
          )}
          {this.props.mealplans.length > 0 && totalPages > 1 && (
            <Pagination
              pageNum={this.state.pageNum}
              total={this.props.mealplans.length}
              updatePage={this.updatePage}
              isEnd={true}
              perPage={this.state.perPage}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mealplans: state.mealplans.myMealplans,
  myRecipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, { getMealplan, getRecipe })(
  MealplanIndex
);
