import React,{ Component } from 'react'
import Header from '../components/Header/Header'
import Discription from '../components/Discription/Discription'
import Option from '../components/Option/Option'
import {Router, Route, Link} from 'react-router'

class Exam extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="exam">
                <Header />
                <Discription />
                <Option />
            </div>
        )
    }
}
export default Exam