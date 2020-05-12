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
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/privateRoute";

import PantryDashboard from "./myCorner/pantry/Dashboard";
import MyShoppingList from "./myCorner/shoppinglist";
import MyRecipes from "./myCorner/recipes";
import MyMealplans from "./myCorner/mealplans";

import ExploreMealPlan from "./mealplan";
import ExploreRecipes from "./recipes";
import SearchIngredient from "./recipes/search/ingredient";
import SearchRandom from "./recipes/search/random";
import SearchType from "./recipes/search/type";

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
                  <Route exact path="/" component={ExploreRecipes} />
                  <Route exact path="/mealplan" component={ExploreMealPlan} />
                  <Route
                    exact
                    path="/search-by-ingredients"
                    component={SearchIngredient}
                  />
                  <Route exact path="/search-random" component={SearchRandom} />
                  <Route exact path="/search-by-type" component={SearchType} />
                  <PrivateRoute
                    exact
                    path="/pantry"
                    component={PantryDashboard}
                  />
                  <PrivateRoute
                    exact
                    path="/shopping-list"
                    component={MyShoppingList}
                  />
                  <PrivateRoute
                    exact
                    path="/my-recipes"
                    component={MyRecipes}
                  />
                  <PrivateRoute
                    exact
                    path="/my-mealplans"
                    component={MyMealplans}
                  />
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
