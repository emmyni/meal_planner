import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Login from "./accounts/login";
import Register from "./accounts/register";
import PrivateRoute from "./common/privateRoute";

import Pantry_Dashboard from "./myCorner/pantry/Dashboard";
import ShoppingList_index from "./myCorner/shoppinglist";
import MealPlan_index from "./mealplan";
import Recipes_index from "./myCorner/recipes";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/" component={Pantry_Dashboard} />
                  <PrivateRoute
                    exact
                    path="/pantry"
                    component={Pantry_Dashboard}
                  />
                  <PrivateRoute
                    exact
                    path="/mealplan"
                    component={MealPlan_index}
                  />
                  <PrivateRoute
                    exact
                    path="/shopping-list"
                    component={ShoppingList_index}
                  />
                  <Route exact path="/recipes" component={Recipes_index} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
