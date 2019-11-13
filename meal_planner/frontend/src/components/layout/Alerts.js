import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.errr) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.quantity)
        alert.error(`Quantity: ${error.msg.quantity.join()}`);
      if (error.msg.details)
        alert.error(`Details: ${error.msg.details.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.deleteItem) alert.success(message.deleteItem);
      if (message.addItem) alert.success(message.addItem);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});
export default connect(mapStateToProps)(withAlert()(Alerts));
