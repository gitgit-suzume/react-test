import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { someTitle } from '../store/turnPage/action'
import List from '../components/ResultList/ResultList'
import ResultHeadPush from '../components/ResultHeadPush/ResultHeadPush'
import ResultHeadPushed from '../components/ResultHeadPushed/ResultHeadPushed'
import Foot from '../components/Foot/Foot'

class ResultList extends Component{
    constructor(props){
        super(props)
        this.state = {
            len: 10,
            groupCount: 5,
        }
    }
    render(){
        let ResultHead = this.props.hasPush ? ResultHeadPushed : ResultHeadPush
        return(
            <div className="exam-list">
                <ResultHead></ResultHead>
                <List groupCount={this.state.groupCount}
                      someTitle={this.props.someTitle}
                      answer={this.props.answer}
                      allExams={this.props.allExams}
                      hasPush={this.props.hasPush}
                      len={this.props.len}>
                </List>
                {!this.props.hasPush ? <Foot></Foot> : ''}
            </div>
        )
    }
}
export default connect(state => ({
    len: state.allExams.exams.length,
    hasPush: state.answer.hasPush,
    allExams: state.allExams.exams,
    answer: state.answer.answerList
}),{
    someTitle
})(ResultList)