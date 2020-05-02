import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sample from "./Sample";
import Form from "./Form";

export class GenerateMealplan extends Component {
  static propTypes = {
    mealplanFetched: PropTypes.bool,
  };

  render() {
    return (
      <Fragment>
        <Form />
        {this.props.mealplanFetched && <Sample />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mealplanFetched: state.mealplan.mealplanFetched,
});

export default connect(mapStateToProps, {})(GenerateMealplan);
