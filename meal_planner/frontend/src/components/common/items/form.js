import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPantry } from "../../../actions/pantry";
import { addShoppingList } from "../../../actions/shoppingList";

export class Form extends Component {
  state = {
    name: "",
    quantity: 0,
    units: "",
    details: "",
  };

  static propTypes = {
    isPantry: PropTypes.bool.isRequired,
    addPantry: PropTypes.func.isRequired,
    addShoppingList: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, quantity, units, details } = this.state;
    const item = { name, quantity, units, details };
    this.props.isPantry
      ? this.props.addPantry(item)
      : this.props.addShoppingList(item);
    this.setState({
      name: "",
      quantity: 0,
      units: "",
      details: "",
    });
  };
  render() {
    const { name, quantity, units, details } = this.state;
    const title = this.props.isPantry
      ? "Add Pantry Item"
      : "Add Shopping List Item";
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>{title}</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="col-md-3 mb-3">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div className="col-md-1 mb-3">
              <label>Quantity</label>
              <input
                className="form-control"
                type="number"
                name="quantity"
                onChange={this.onChange}
                value={quantity}
              />
            </div>
            <div className="col-md-1 mb-3">
              <label>Units</label>
              <input
                className="form-control"
                type="text"
                name="units"
                onChange={this.onChange}
                value={units}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Details</label>
              <input
                className="form-control"
                type="text"
                name="details"
                onChange={this.onChange}
                value={details}
              />
            </div>
            <div className="col-md-1 mb-3">
              <label style={{ visibility: "hidden" }}>Submit</label>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPantry, addShoppingList })(Form);
