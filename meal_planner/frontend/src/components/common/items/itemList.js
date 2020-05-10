import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPantry } from "../../../actions/pantry";
import { getShoppingList } from "../../../actions/shoppingList";
import Item from "./item";

export class Items extends Component {
  state = {
    current: {},
    showModal: false,
  };
  static propTypes = {
    pantryItems: PropTypes.array,
    shoppingListItems: PropTypes.array,
    getPantry: PropTypes.func.isRequired,
    getShoppingList: PropTypes.func.isRequired,
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
        <div className="container">
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col-sm">Name</div>
                <div className="col-sm">Quantity</div>
                <div className="col-sm">Details</div>
                <div className="col-sm"></div>
              </div>
            </div>
          </div>
          <div className="card">
            <ul className="list-group list-group-flush">
              {items.map((item) => (
                <Item
                  item={item}
                  isPantry={this.props.isPantry}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
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
  getShoppingList,
})(Items);
