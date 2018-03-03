import React,{ Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Result from '../pages/result'
import Exam from '../pages/exam'

export default class RouteConfig extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/result" component={Result}></Route>
                    <Route path="/exam" component={Exam}></Route>
                    <Redirect to="/exam"></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}
