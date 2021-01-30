import React, { useEffect } from "react";
import Map from "./components/Map";
import {HomeWithConnect} from "./components/Home";
import {createBrowserHistory} from 'history'
import Header from "./components/Header";
import {connect} from 'react-redux';
import {ProfileWithConnect} from "./components/Profile";
import PropTypes from "prop-types";
import {PrivateRoute} from './components/PrivateRoute';
import "./App.css";
import { Switch, Route, Router } from "react-router";
import s from './components/main.module.scss'
import Order from "./components/Order";



export const history = createBrowserHistory();

function App(props) {

  useEffect(() => props.isLoggedIn && history.push('/'), [props.isLoggedIn])

    return (
      <Router history={history}>
      {
        props.isLoggedIn ? (
          <>
            <Header>
            </Header>
            <main>
              <section>
              <Map>
                <Switch>
                  <Route  exact path='/order' component={Order} />
                  <PrivateRoute  exact path='/map' component={Map} />
                  <PrivateRoute  exact path='/profile' component={ProfileWithConnect} />
                </Switch>
              </Map>
              </section>
            </main>
          </>
        ) : (
          <main className={s.main}>
            <Map>
              <Switch>
                <Route  exact path='/' component={HomeWithConnect} />
              </Switch>
            </Map>
          </main>
        )
      }
      </Router>
    );
  }

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
