import React,{ Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Result from '../pages/result'
import Exam from '../pages/exam'

export default class RouteConfig extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/result/:hasPush" component={Result}></Route>
                    <Route path="/exam/:id" component={Exam}></Route>
                    <Redirect to="/exam/0"></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}
