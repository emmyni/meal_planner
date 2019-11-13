import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPantry, deletePantry } from "../../actions/pantry";

export class Items extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    getPantry: PropTypes.func.isRequired,
    deletePantry: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPantry();
  }
  render() {
    return (
      <Fragment>
        <h2>Pantry List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.details}</td>
                <td>
                  <button
                    onClick={this.props.deletePantry.bind(this, item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.pantry.items
});
export default connect(
  mapStateToProps,
  { getPantry, deletePantry }
)(Items);
