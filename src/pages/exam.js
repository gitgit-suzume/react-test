import React,{ Component } from 'react'
import Header from '../components/Header/Header'
import Discription from '../components/Discription/Discription'
import Option from '../components/Option/Option'
import * as answerAction from '../store/answer/action'
import * as turnPageAction from '../store/turnPage/action'
import {connect} from 'react-redux'
import Foot from '../components/Foot/Foot'
import {SELECTANSWER} from '../store/answer/action-type'
class Exam extends Component{
    constructor(){
        super()
    }
    onOptionClick = (index) => {
        this.props.selectAnswer(index, this.props.turnPage.curIdx)
    }
    render(){
        let answerList = this.props.answer.answerList
        let index = this.props.turnPage.curIdx
        return(
            <div className="exam">
                <Header index={this.props.turnPage.curIdx}
                        examsLen={this.props.allExams.exams.length}/>
                <Discription discription={this.props.allExams.exams[index].discription}/>
                <Option  originAnswer={answerList[index]}
                         correctAnswer={this.props.allExams.exams[index].answer}
                         hasPush={this.props.answer.hasPush}
                         examsLen={this.props.allExams.exams.length}
                         autoNext={this.props.autoNext}
                         examOption={this.props.allExams.exams[index].option}
                         onOptionClick={this.onOptionClick}/>
                {!this.props.answer.hasPush ? <Foot></Foot> : ''}
            </div>
        )
    }
}
export default connect(state => ({
    answer: state.answer,
    turnPage: state.turnPage,
    allExams: state.allExams,
}), {
    selectAnswer: answerAction.selectAnswer,
    autoNext: turnPageAction.nextTitle
})(Exam)
// export default Exam