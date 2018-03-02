import React,{ Component } from 'react'
import Header from '../components/Header/Header'
import Discription from '../components/Discription/Discription'
import Option from '../components/Option/Option'
import * as action from '../store/answer/action'
import {connect} from 'react-redux'
import {SELECTANSWER} from '../store/answer/action-type'
class Exam extends Component{
    constructor(){
        super()
        // this.onOptionClick.bind(this)
    }
    onOptionClick = (index) => {
        this.props.selectAnswer(index, this.props.turnPage.curIdx)
    }
    render(){
        let answerList = this.props.answer.answerList
        let index = this.props.turnPage.curIdx
        return(
            <div className="exam">
                <Header index={this.props.turnPage.curIdx} />
                <Discription discription={this.props.allExams.exams[index].discription}/>
                <Option  originAnswer={answerList[index]}
                         examOption={this.props.allExams.exams[index].option}
                         onOptionClick={this.onOptionClick}/>
            </div>
        )
    }
}
export default connect(state => {
    return {
        answer: state.answer,
        turnPage: state.turnPage,
        allExams: state.allExams
    }
}, {
   selectAnswer: action.selectAnswer
})(Exam)
// export default Exam