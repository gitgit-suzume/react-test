import React,{Component} from 'react'
import './ResultHeadPush.less'

class ResultHeadPush extends Component{
    static defaultProps = {
        finish: 0,
        count: 10
    }
    render(){
        return (
            <div className="result-head-push">
                <div className="left">
                    <span>答题卡</span>
                </div>
                <div className="right">
                    已完成({this.props.finish}/{this.props.count})
                </div>
            </div>
        )
    }
}

export default ResultHeadPush