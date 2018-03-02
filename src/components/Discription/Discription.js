import React,{ Component } from 'react'
import './Discription.less'

class Discription extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="discription">
                <span className="type">(单选题)</span>
                <span className="title-discription">{this.props.discription}</span>
            </div>
        )
    }
}
export default Discription