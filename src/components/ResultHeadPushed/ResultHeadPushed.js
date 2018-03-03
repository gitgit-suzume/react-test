import React, {Component} from 'react'
import './ResultHeadPushed.less'
import {answer} from "../../store/answer/reducer";
class ResultHeadPushed extends Component{
    static defaultProps = {
        name: '练习题名称',
        allExams: new Array(10),
        answer:[]
    }
    correctCount = () => {
        let count = 0
        if(this.props.answer.length !== 0) {
            for (let i in this.props.answer) {
                if (this.props.answer[i] == this.props.allExams[i].answer) {
                    count++
                }
            }
        }
        return count
    }
    render(){
        return (
            <div className="result-head-pushed">
                <span className="title">
                    {this.props.name}
                </span>
                <br/>
                <span className="correct-count">
                    正确{this.correctCount()}/{this.props.allExams.length}
                </span>
            </div>
        )
    }
}

export default ResultHeadPushed