import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updatePantry } from "../../../actions/pantry";
import { updateShoppingList } from "../../../actions/shoppingList";

export class Modal extends Component {
  state = {
    name: this.props.item.name,
    quantity: this.props.item.quantity,
    units: this.props.item.units,
    details: this.props.item.details,
  };

  static propTypes = {
    updateShoppingList: PropTypes.func.isRequired,
    updatePantry: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isPantry: PropTypes.bool.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  update = () => {
    const { name, quantity, units, details } = this.state;
    const info = { name, quantity, units, details };
    this.props.isPantry
      ? this.props.updatePantry(this.props.item.id, info)
      : this.props.updateShoppingList(this.props.item.id, info);
  };

  render() {
    const { name, quantity, units, details } = this.state;
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
                  Update {this.props.isPantry ? "Pantry" : "Shopping List"} Item
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
                    <label className="col-form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className="form-row ml-1">
                    <div className="form-group mr-3">
                      <label className="col-form-label">Quantity:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        onChange={this.onChange}
                        value={quantity}
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Units:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="units"
                        onChange={this.onChange}
                        value={units}
                      />
                    </div>
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
                  onClick={this.update}
                  data-dismiss="modal"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, {
  updatePantry,
  updateShoppingList,
})(Modal);
