import React, {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import NavigationComponent from "./NavigationComponent";
import FoldableTree from "./Foldabletree";
import Tasks from "./Tasks";
import 'bootstrap/dist/css/bootstrap.css';
import Spyral from "./Spyral";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <NavigationComponent/>
                <Switch>
                    <Route path='/tasks' component={() => <Tasks/>}/>
                    <Route path='/foldableTree' component={() => <FoldableTree/>}/>
                    <Route path='/spyral' component={() => <Spyral/>}/>
                    <Redirect to='/tasks'/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;