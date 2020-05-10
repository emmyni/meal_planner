import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deletePantry } from "../../../actions/pantry";
import { deleteShoppingList } from "../../../actions/shoppingList";
import UpdateModal from "./updateModal";

export class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    isPantry: PropTypes.bool.isRequired,
    deletePantry: PropTypes.func.isRequired,
    deleteShoppingList: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <li className="list-group-item">
          <div className="row">
            <div className="col-sm">{this.props.item.name}</div>
            <div className="col-sm">{this.props.item.quantity}</div>
            <div className="col-sm">{this.props.item.details}</div>
            <div className="col-sm">
              <button
                type="button"
                className="btn btn-warning btn-sm float-right mx-2"
                data-toggle="modal"
                data-target={"#saveModal" + this.props.item.id}
                ref={(input) => (this.inputElement = input)}
              >
                Update
              </button>
              <button
                onClick={
                  this.props.isPantry
                    ? this.props.deletePantry.bind(this, this.props.item.id)
                    : this.props.deleteShoppingList.bind(
                        this,
                        this.props.item.id
                      )
                }
                className="btn btn-danger btn-sm mx-2 float-right"
              >
                Delete
              </button>
            </div>
          </div>
          <UpdateModal item={this.props.item} isPantry={this.props.isPantry} />
        </li>
      </Fragment>
    );
  }
}
export default connect(null, { deletePantry, deleteShoppingList })(Item);
