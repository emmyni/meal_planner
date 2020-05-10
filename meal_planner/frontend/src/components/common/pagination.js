import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Pagination extends Component {
  static propTypes = {
    offset: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
  };
  render() {
    const numPages = Math.ceil(this.props.total / 10.0);
    return (
      <Fragment>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li
              className={
                this.props.offset === 0 ? "page-item disabled" : "page-item"
              }
              onClick={() => this.props.updatePage(this.props.offset - 1)}
            >
              <a
                className="page-link bg-success border-success text-light"
                tabIndex="-1"
              >
                Previous
              </a>
            </li>
            {[...Array(numPages).keys()].map(function (option) {
              return (
                <li
                  className={
                    this.props.offset === option
                      ? "page-item active bg-info"
                      : "page-item bg-success"
                  }
                  key={option + 1}
                  onClick={() => this.props.updatePage(option)}
                >
                  <a
                    className={
                      this.props.offset === option
                        ? "page-link border-success bg-light text-muted"
                        : "page-link border-success bg-success text-light"
                    }
                  >
                    {option + 1}
                  </a>
                </li>
              );
            }, this)}
            <li
              className={
                this.props.offset === numPages - 1
                  ? "page-item disabled"
                  : "page-item"
              }
              onClick={() => this.props.updatePage(this.props.offset + 1)}
            >
              <a className="page-link bg-success border-success text-light">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
export default connect(null, {})(Pagination);
