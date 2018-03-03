import React,{ Component } from 'react'
import {connect} from 'react-redux'
import {lastTitle, nextTitle} from '../../store/turnPage/action'
import {NEXTTILE, LASTTILE} from '../../store/turnPage/action-type'
import {pushAnswer} from '../../store/answer/action'
import './Foot.less'
import PropTypes from 'prop-types'

class Foot extends Component{
    constructor(){
        super()
        this.state = {
            index: 1,
            kind: 'done',
            len: 10
        }
    }
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    handleClick = (type) => {
        switch (type){
            case LASTTILE:
                this.props.lastTitle({type: type});
                break;
            case NEXTTILE:
                this.props.nextTitle(this.props.len, this.context.router.history);
        }
    }
    pushAnswer = () => {
        this.props.pushAnswer()
    }
    render(){
        let arr
        // if(!this.props.hasPush) {
            if (this.props.index === 0) {
                arr = [
                    <a href="javascript:;"
                       key='none'>无</a>,
                    <a href="javascript:;"
                       onClick={() => this.handleClick(NEXTTILE)}
                       key='next'>下一题</a>
                ]
            } else if (this.props.index >= this.props.len) {
                arr = [<a href="javascript:;"
                          onClick={this.pushAnswer}
                          key='submit'>提交并查看结果</a>]
            } else {
                arr = [
                    <a href="javascript:;"
                       onClick={() => this.handleClick(LASTTILE)}
                       key='last'>上一题</a>,
                    <a href="javascript:;"
                       onClick={() => this.handleClick(NEXTTILE)}
                       key='next'>下一题</a>
                ]
            }
        return(
            <ul className="foot">
                {arr.map((val, index) => {
                    return (
                        <li key={index}>{val}</li>
                    )
                })}
            </ul>
        )
    }
}
export default connect((state) => ({
    turnPage: state.turnPage,
    index: state.turnPage.curIdx,
    len: state.allExams.exams.length
}),{
    lastTitle,
    nextTitle,
    pushAnswer
})(Foot)
