import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { addMealplan, updateMealplan } from "../../../actions/mealplans";
import { addRecipe } from "../../../actions/recipes";

export class Modal extends Component {
  state = {
    name: this.props.dbMealplan ? this.props.dbMealplan.name : "",
    date: this.props.dbMealplan ? this.props.dbMealplan.date : "",
    details: this.props.dbMealplan ? this.props.dbMealplan.details : "",
    authReq: false,
  };

  static propTypes = {
    addMealplan: PropTypes.func.isRequired,
    updateMealplan: PropTypes.func.isRequired,
    addRecipe: PropTypes.func.isRequired,
    mealplanShort: PropTypes.object.isRequired,
    mealplanExtended: PropTypes.array.isRequired,
    myRecipes: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool,
    // for update
    isUpdate: PropTypes.bool.isRequired,
    dbMealplan: PropTypes.object,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveMealplan = () => {
    const info = {
      name: this.state.name,
      recipe_id1: this.props.mealplanShort.meals[0].id,
      recipe_id2: this.props.mealplanShort.meals[1].id,
      recipe_id3: this.props.mealplanShort.meals[2].id,
      details: this.state.details,
      date: this.state.date,
      calories: Math.ceil(this.props.mealplanShort.nutrients.calories),
      protein: Math.ceil(this.props.mealplanShort.nutrients.protein),
      fat: Math.ceil(this.props.mealplanShort.nutrients.fat),
      carbohydrates: Math.ceil(
        this.props.mealplanShort.nutrients.carbohydrates
      ),
    };
    this.props.addMealplan(info);
    if (info.name != "") this.saveRecipes();
  };

  saveRecipes = () => {
    this.props.mealplanExtended.forEach((recipe) => {
      let {
        title,
        readyInMinutes,
        servings,
        sourceUrl,
        image,
        summary,
      } = recipe;
      let recipeInfo = {
        title,
        readyInMinutes,
        servings,
        sourceUrl,
        image,
        summary,
      };
      recipeInfo.recipe_id = recipe.id;
      recipeInfo.inMealplan = true;
      if (
        !this.props.myRecipes.some(
          (item) => item.recipe_id === recipeInfo.recipe_id
        )
      )
        this.props.addRecipe(recipeInfo);
    });
  };

  updateCurrentMealplan = () => {
    const { name, date, details } = this.state;
    const info = { name, date, details };
    this.props.updateMealplan(this.props.dbMealplan.id, info);
  };

  clickSave = () => {
    if (this.props.isAuthenticated) {
      this.props.isUpdate ? this.updateCurrentMealplan() : this.saveMealplan();
    } else this.setState({ authReq: true });
  };

  render() {
    const { name, date, details } = this.state;
    return (
      <Fragment>
        {this.state.authReq && <Redirect to="/login" />}
        <div
          className="modal fade"
          id={
            this.props.isUpdate
              ? "saveModal" + this.props.dbMealplan.id
              : "saveModal"
          }
          tabIndex="-1"
          role="dialog"
          aria-labelledby="saveModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="saveModalLabel">
                  {this.props.isUpdate ? "Update Mealplan" : "Save Mealplan"}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Mealplan Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Date:</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      onChange={this.onChange}
                      value={date}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Details:</label>
                    <textarea
                      className="form-control"
                      placeholder="optional"
                      name="details"
                      onChange={this.onChange}
                      value={details}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.clickSave}
                  data-dismiss="modal"
                >
                  {this.props.isUpdate ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mealplanShort: state.apiMealplans.mealplanShort,
  mealplanExtended: state.apiMealplans.mealplanExtended,
  isAuthenticated: state.auth.isAuthenticated,
  myRecipes: state.recipes.myRecipes,
});

export default connect(mapStateToProps, {
  addMealplan,
  updateMealplan,
  addRecipe,
})(Modal);
