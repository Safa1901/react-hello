import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Order from "./Order";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home/order" component={Order} />
            </div>
        )
    }
}

export default Routes;