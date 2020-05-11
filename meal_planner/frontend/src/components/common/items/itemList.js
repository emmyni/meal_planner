import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPantry } from "../../../actions/pantry";
import { getShoppingList } from "../../../actions/shoppingList";
import Item from "./item";
import Pagination from "../pagination";

export class Items extends Component {
  state = {
    current: {},
    showModal: false,
    pageNum: 0,
    perPage: 10,
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

  updatePage = (pageNum) => {
    let items = this.props.isPantry
      ? this.props.pantryItems
      : this.props.shoppingListItems;
    const totalPages = Math.ceil(items.length / this.state.perPage);
    if (pageNum < totalPages && pageNum >= 0)
      this.setState({ pageNum: pageNum });
  };

  render() {
    const items = this.props.isPantry
      ? this.props.pantryItems
      : this.props.shoppingListItems;
    let offset = this.state.perPage * this.state.pageNum;
    let totalPages = Math.ceil(items.length / this.state.perPage);
    const title = this.props.isPantry ? "My Pantry" : "My Shopping List";

    return (
      <Fragment>
        <div className="my-4">
          {items.length > 0 && totalPages > 1 && (
            <Pagination
              pageNum={this.state.pageNum}
              total={items.length}
              updatePage={this.updatePage}
              isEnd={false}
              perPage={this.state.perPage}
            />
          )}
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
              {items.slice(offset, offset + this.state.perPage).map((item) => (
                <Item
                  item={item}
                  isPantry={this.props.isPantry}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
          {items.length > 0 && totalPages > 1 && (
            <Pagination
              pageNum={this.state.pageNum}
              total={items.length}
              updatePage={this.updatePage}
              isEnd={true}
              perPage={this.state.perPage}
            />
          )}
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
