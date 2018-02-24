import React,{ Component } from 'react'
import './Discription.less'

class Discription extends Component{
    constructor(){
        super();
        this.state={
            discription:'题目一题目一题目一题目一题目一题目一题目一题目一题目一题目一题目一',
            type: '单选题'
        }
    }
    render(){
        return (
            <div className="discription">
                <span className="type">({this.state.type})</span>
                <span className="title-discription">{this.state.discription}</span>
            </div>
        )
    }
}
export default Discription