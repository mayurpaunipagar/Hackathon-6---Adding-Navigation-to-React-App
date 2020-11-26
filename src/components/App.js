import React, { Component, useState } from "react";
import { BrowserRouter, Link, Route, Switch, useLocation } from "react-router-dom"
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div id="main">
                <BrowserRouter>
                <LocationDisplay />
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Switch>
                        <Route exact path="/about">
                            <div>You are on the about page</div>
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="*">No match</Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export function LocationDisplay(){
    const {pathname}=useLocation();
    return <div data-testid="location-display">{pathname}</div>;
}

function Home(){
    return <div>You are home</div>
}

export default App;
