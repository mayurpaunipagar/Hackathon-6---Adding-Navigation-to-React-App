import React, {Component, useState} from "react";
import {BrowserRouter,Link,Route, Switch} from "react-router-dom"
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            
            <div id="main">
               <BrowserRouter>
                
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                
                </BrowserRouter>
            </div>
             
        )
    }
}


export default App;
