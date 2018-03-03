import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import './ResultList.less'
import exam from "../../pages/exam";

class ResultList extends Component{
    constructor(){
        super()
    }
    static defaultProps = {
        len: 10,
        groupCount: 5
    }
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    someTitle = (e) => {
        let index = (e.target.innerHTML - 1)
        this.props.someTitle(index, this.context.router.history)
    }
    liClassName = (idx) => {
        let answer = this.props.answer
        let exams = this.props.allExams
        if (!this.props.hasPush){
            if(answer[idx] !== undefined){
                return 'selected'
            }
        } else {
            if(answer[idx] !== exams[idx].answer){
                return 'error'
            } else {
                return 'correct'
            }
        }
        return ''
    }
    listArr (){
        let result = []
        let temp = []
        let count = 0
        for(let i = 0; i < this.props.len; i ++){
            let liClassName = this.liClassName(i)
            temp.push(
                <li key={i} className={liClassName}>
                    <a href="javascript:;"
                       onClick={(e) => {this.someTitle(e)}}
                       type="button">{i + 1}</a>
                </li>
            )
            count ++
            if(count % this.props.groupCount === 0){
                result.push(
                    <ul key={Math.floor(count / 5)}>
                        {temp}
                    </ul>
                )
                temp = []
            }
        }
        return result
    }
    render(){
        let arr = this.listArr()
        return(
            <div className="result-list">
                {arr}
            </div>
        )
    }
}
export default ResultList