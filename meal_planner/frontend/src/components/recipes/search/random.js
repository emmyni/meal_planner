import React, { Fragment } from "react";

export default function Random() {
  return (
    <Fragment>
      <div className="container-full-bg">
        <div class="jumbotron">
          <h1 class="display-4">Feeling adventurous?</h1>
          <p class="lead">Get some random new recipes to try!</p>
          <form>
            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Tags" />
              </div>
              <div class="col">
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>Number</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
