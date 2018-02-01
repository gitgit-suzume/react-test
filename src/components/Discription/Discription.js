import React,{ Component } from 'react'
import './Discription.css'

class Discription extends Component{
    constructor(props){
        super(pros);
        this.state={
            discription:'题目一',
            type: '单选题'
        }
    }
    render(){
        return (
            <div className="discription">
                <span>({this.state.type})</span>
                <span>{this.state.discription}</span>
            </div>
        )
    }
}
export default Discription