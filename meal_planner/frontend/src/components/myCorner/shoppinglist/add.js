import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Form from "../../common/items/form";

export class AddShoppingList extends Component {
  state = {
    displayOriginal: true,
  };
  displayManual = () => {
    this.setState({ displayOriginal: false });
  };

  render() {
    return (
      <Fragment>
        <div
          className="container-full-bg"
          style={this.state.displayOriginal ? {} : { display: "none" }}
        >
          <div className="jumbotron bg-light">
            <h2 className="display-4">Add to Shopping List</h2>
            <p className="lead">
              You can add additionally shopping list items manually or by
              selecting a saved recipe or mealplan.
            </p>
            <button
              type="button"
              className="btn btn-danger btn-lg m-2"
              onClick={this.displayManual}
            >
              Manually
            </button>
            <button
              type="button"
              className="btn btn-warning btn-lg m-2"
              onClick={this.displayManual}
            >
              By Recipe
            </button>
            <button
              type="button"
              className="btn btn-info btn-lg m-2"
              onClick={this.displayManual}
            >
              By Mealplan
            </button>
          </div>
        </div>
        {!this.state.displayOriginal && <Form isPantry={false} />}
      </Fragment>
    );
  }
}

export default connect(null, {})(AddShoppingList);
