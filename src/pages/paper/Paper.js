import React,{ Component } from 'react'
import Option from '../../components/Option/Option'
import Discription from '../../components/Discription/Discription'
import Header from '../../components/Header/Header'

class Page1 extends Component{
    constructor(){
        super()
        console.log(11111)
    }
    render(){
        return(
            <div className="page1">
                <Header></Header>
                <Discription></Discription>
                <Option></Option>
            </div>
        )
    }
}
export default Page1