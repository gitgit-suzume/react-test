import React,{ Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'

export default class Route extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/page1" component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
// render((
//     <Router history={hashHistory}>
//         <Route path="/page1" component={Page1} />
//         <Route path="/page2" component={Page2} />
//     </Router>
// ),document.getElementById('root'))