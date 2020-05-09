import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.err) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.quantity)
        alert.error(`Email: ${error.msg.quantity.join()}`);
      if (error.msg.details)
        alert.error(`Message: ${error.msg.details.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (message !== prevProps.message) {
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
      if (message.deleteItem) alert.success(message.deleteItem);
      if (message.addItem) alert.success(message.addItem);
      if (message.recipeAdded) alert.success(message.recipeAdded);
      if (message.recipeDeleted) alert.success(message.recipeDeleted);
      if (message.noResult) alert.error(message.noResult);
      if (message.updateItem) alert.success(message.updateItem);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});
export default connect(mapStateToProps)(withAlert()(Alerts));
