import React,{ Component } from 'react'
import {connect} from 'react-redux'
import {lastTitle, nextTitle} from '../../store/turnPage/action'
import {NEXTTILE, LASTTILE} from '../../store/turnPage/action-type'
import './Foot.less'

class Foot extends Component{
    constructor(){
        super()
        this.state = {
            index: 1,
            kind: 'done',
            len: 10
        }
    }
    handleClick = (type) => {
        switch (type){
            case LASTTILE:
                this.props.lastTitle(this.props.turnPage, {type: type});
            case NEXTTILE:
                if(this.props.index >= this.props.len - 1){
                    this.props.history
                } else {
                    this.props.nextTitle(this.props.turnPage, {type: type});
                }
        }
    }
    render(){
        let arr
        if(this.state.kind !== 'result') {
            if (this.props.index === 0) {
                arr = [
                    <a href="javascript:;"
                       key='none'>无</a>,
                    <a href="javascript:;"
                       onClick={() => this.handleClick(NEXTTILE)}
                       key='next'>下一题</a>
                ]
            } else if (this.props.index >= this.props.len) {
                arr = [<a href="javascript:;" key='submit'>提交并查看结果</a>]
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
        }
        return(
            <div className="foot">
                {arr}
            </div>
        )
    }
}
export default connect((state) => ({
    turnPage: state.turnPage,
    index: state.turnPage.curIdx,
    len: state.allExams.exams.length
}),{
    lastTitle,
    nextTitle
})(Foot)
