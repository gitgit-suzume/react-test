import React,{Component} from 'react'
import './ResultHeadPush.less'

class ResultHeadPush extends Component{
    static defaultProps = {
        answer: new Array(10),
        allExams: new Array(10)
    }
    finishExams = () => {
        let count = 0
        for(let i of this.props.answer){
            if(i !== undefined){
                count ++
            }
        }
        return count
    }
    render(){
        return (
            <div className="result-head-push">
                <div className="left">
                    <span>答题卡</span>
                </div>
                <div className="right">
                    已完成({this.finishExams()}/{this.props.allExams.length})
                </div>
            </div>
        )
    }
}

export default ResultHeadPush