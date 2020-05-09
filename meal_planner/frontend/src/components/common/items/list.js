import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPantry, deletePantry } from "../../../actions/pantry";
import {
  getShoppingList,
  deleteShoppingList,
} from "../../../actions/shoppingList";
import UpdateModal from "./updateModal";

export class Items extends Component {
  state = {
    current: {},
  };
  static propTypes = {
    pantryItems: PropTypes.array,
    shoppingListItems: PropTypes.array,
    getPantry: PropTypes.func.isRequired,
    deletePantry: PropTypes.func.isRequired,
    getShoppingList: PropTypes.func.isRequired,
    deleteShoppingList: PropTypes.func.isRequired,
    isPantry: PropTypes.bool.isRequired,
  };

  update = (item) => {
    this.setState({ current: item });
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
              <th style={{ width: "25%" }}>Name</th>
              <th style={{ width: "15%" }}>Quantity</th>
              <th style={{ width: "35%" }}>Details</th>
              <th style={{ width: "25%" }}></th>
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
                    className="btn btn-danger btn-sm mx-2 float-right"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm float-right mx-2"
                    onclick={this.update(item)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm float-right mx-2"
                    data-toggle="modal"
                    data-target="#saveModal"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <UpdateModal isPantry={this.props.isPantry} />
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
