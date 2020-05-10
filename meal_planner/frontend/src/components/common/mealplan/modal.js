import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMealplan, updateMealplan } from "../../../actions/mealplans";
import { addRecipe } from "../../../actions/recipes";

export class Modal extends Component {
  state = {
    name: this.props.dbMealplan ? this.props.dbMealplan.name : "",
    date: this.props.dbMealplan ? this.props.dbMealplan.date : "",
    details: this.props.dbMealplan ? this.props.dbMealplan.details : "",
  };

  static propTypes = {
    addMealplan: PropTypes.func.isRequired,
    updateMealplan: PropTypes.func.isRequired,
    addRecipe: PropTypes.func.isRequired,
    mealplanShort: PropTypes.object.isRequired,
    mealplanExtended: PropTypes.array.isRequired,
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
    this.saveRecipes();
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
      this.props.addRecipe(recipeInfo);
    });
  };

  updateMealplan = () => {
    const { name, date, details } = this.state;
    const info = { name, date, details };
    this.props.updateMealplan(this.props.dbMealplan.id, info);
  };

  render() {
    const { name, date, details } = this.state;
    return (
      <Fragment>
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
                  onClick={
                    this.props.isUpdate
                      ? this.updateMealplan
                      : this.saveMealplan
                  }
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
});

export default connect(mapStateToProps, {
  addMealplan,
  updateMealplan,
  addRecipe,
})(Modal);
