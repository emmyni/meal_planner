import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPantry } from "../../actions/pantry";

export class Form extends Component {
  state = {
    name: "",
    quantity: 0,
    details: ""
  };

  static propTypes = {
    addPantry: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, quantity, details } = this.state;
    const item = { name, quantity, details };
    this.props.addPantry(item);
  };
  render() {
    const { name, quantity, details } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Pantry Item</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              className="form-control"
              type="number"
              name="quantity"
              onChange={this.onChange}
              value={quantity}
            />
          </div>
          <div className="form-group">
            <label>Details</label>
            <input
              className="form-control"
              type="text"
              name="details"
              onChange={this.onChange}
              value={details}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addPantry }
)(Form);
