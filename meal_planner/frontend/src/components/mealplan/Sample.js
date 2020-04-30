import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class Sample extends Component {
  render() {
    return (
      <Fragment>
        <h2>Meal Plan</h2>
        <ul class="list-unstyled">
          <li class="media">
            <img src="..." class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li class="media my-4">
            <img src="..." class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li class="media">
            <img src="..." class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0 mb-1">List-based media object</h5>
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
