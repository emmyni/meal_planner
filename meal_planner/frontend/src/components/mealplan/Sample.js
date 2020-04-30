import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class Sample extends Component {
  render() {
    return (
      <Fragment>
        <h2>Meal Plan</h2>
        <h5>Nutrients</h5>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <h5>Recipes</h5>
        <ul className="list-unstyled">
          <li className="media">
            <img src="..." className="mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li className="media my-4">
            <img src="..." className="mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li className="media">
            <img src="..." className="mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default connect(null, {})(Sample);
