import React from "react";
import Map from "./components/Map";
import {HomeWithConnect} from "./components/Home";
import Header from "./components/Header";
import {connect} from 'react-redux';
import {ProfileWithConnect} from "./components/Profile"
import PropTypes from "prop-types";
import {PrivateRoute} from './components/PrivateRoute'
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header>
        </Header>
        <main>
          <section>
            <Switch>
              <Route  exact path='/' component={HomeWithConnect} />
              <PrivateRoute  exact path='/map' component={Map} />
              <PrivateRoute  exact path='/profile' component={ProfileWithConnect} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
