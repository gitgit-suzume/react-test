import React, {Component} from 'react'
import './ResultHeadPushed.less'
class ResultHeadPushed extends Component{
    static defaultProps = {
        name: '练习题名称',
        rightCount: 0,
        allCount: 10
    }
    render(){
        console.log(this.props)
        return (
            <div className="result-head-pushed">
                <span className="title">
                    {this.props.name}
                </span>
                <br/>
                <span className="analysis">
                    正确{this.props.rightCount}/{this.props.allCount}
                </span>
            </div>
        )
    }
}

export default ResultHeadPushed