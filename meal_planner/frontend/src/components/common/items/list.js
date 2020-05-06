import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPantry, deletePantry } from "../../../actions/pantry";
import {
  getShoppingList,
  deleteShoppingList,
} from "../../../actions/shoppingList";

export class Items extends Component {
  static propTypes = {
    pantryItems: PropTypes.array,
    shoppingListItems: PropTypes.array,
    getPantry: PropTypes.func.isRequired,
    deletePantry: PropTypes.func.isRequired,
    getShoppingList: PropTypes.func.isRequired,
    deleteShoppingList: PropTypes.func.isRequired,
    isPantry: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.isPantry ? this.props.getPantry() : this.props.getShoppingList();
  }
  render() {
    const items = this.props.isPantry
      ? this.props.pantryItems
      : this.props.shoppingListItems;
    const title = this.props.isPantry ? "My Pantry" : "My Shopping List";
    return (
      <Fragment>
        <div className="my-4">
          <h2>{title}</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  {item.quantity} {item.units}
                </td>
                <td>{item.details}</td>
                <td>
                  <button
                    onClick={
                      this.props.isPantry
                        ? this.props.deletePantry.bind(this, item.id)
                        : this.props.deleteShoppingList.bind(this, item.id)
                    }
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

const mapStateToProps = (state) => ({
  pantryItems: state.pantry.items,
  shoppingListItems: state.shoppingList.items,
});
export default connect(mapStateToProps, {
  getPantry,
  deletePantry,
  getShoppingList,
  deleteShoppingList,
})(Items);
