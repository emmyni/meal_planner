import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMealplan } from "../../actions/mealplans";

export class Modal extends Component {
  state = {
    name: "",
    date: "",
    details: "",
  };
  static propTypes = {
    addMealplan: PropTypes.func.isRequired,
    mealplanShort: PropTypes.object.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveMealplan = () => {
    console.log("save");
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
    console.log(info);
    this.props.addMealplan(info);
  };

  render() {
    const { name, date, details } = this.state;
    return (
      <Fragment>
        <div
          className="modal fade"
          id="saveModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="saveModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="saveModalLabel">
                  Save Mealplan
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
                  onClick={this.saveMealplan}
                  data-dismiss="modal"
                >
                  Save
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
});

export default connect(mapStateToProps, { addMealplan })(Modal);
