import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMealplan } from "../../actions/mealplans";

export class Modal extends Component {
  static propTypes = {
    addMealplan: PropTypes.func.isRequired,
  };

  saveMealplan = () => {
    console.log("save");
    this.props.addMealplan({
        
    });
  };

  render() {
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
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Date:</label>
                    <input type="date" className="form-control" id="date" />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Details:</label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      placeholder="optional"
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

export default connect(null, {})(Modal);
