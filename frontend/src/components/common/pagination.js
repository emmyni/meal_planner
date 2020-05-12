import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Pagination extends Component {
  static propTypes = {
    pageNum: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    isEnd: PropTypes.bool.isRequired,
    perPage: PropTypes.number.isRequired,
  };
  render() {
    const numPages = Math.ceil(this.props.total / this.props.perPage);
    return (
      <Fragment>
        <nav aria-label="Page navigation">
          <ul
            className={
              this.props.isEnd
                ? "pagination pagination-sm justify-content-center"
                : "pagination pagination-sm justify-content-end"
            }
          >
            <li
              className={
                this.props.pageNum === 0 ? "page-item disabled" : "page-item"
              }
              onClick={() => this.props.updatePage(this.props.pageNum - 1)}
            >
              <a className="page-link text-light" tabIndex="-1">
                Previous
              </a>
            </li>
            {[...Array(numPages).keys()].map(function (option) {
              return (
                <li
                  className={
                    this.props.pageNum === option
                      ? "page-item active"
                      : "page-item"
                  }
                  key={option + 1}
                  onClick={() => this.props.updatePage(option)}
                >
                  <a
                    className={
                      this.props.pageNum === option
                        ? "page-link bg-light border-light text-muted"
                        : "page-link text-light"
                    }
                  >
                    {option + 1}
                  </a>
                </li>
              );
            }, this)}
            <li
              className={
                this.props.pageNum === numPages - 1
                  ? "page-item disabled"
                  : "page-item"
              }
              onClick={() => this.props.updatePage(this.props.pageNum + 1)}
            >
              <a className="page-link text-light">Next</a>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
export default connect(null, {})(Pagination);
