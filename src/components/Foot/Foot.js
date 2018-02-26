import React,{ Component } from 'react'
import './Foot.less'

class Foot extends Component{
    constructor(){
        super()
        this.state = {
            index: 9,
            kind: 'done',
            len: 10
        }
    }
    render(){
        let result, arr = []
        //不是分析结果报告
        if(this.state.kind !== 'result') {
            if (this.state.index === 0) {
                arr = ['无', '下一题']
            } else if (this.state.index >= this.state.len - 1) {
                arr = ['提交并查看结果']
            } else {
                arr = ['上一题', '下一题']
            }
        } else {
            //是结果分析报告
            arr = ['全部解析']
        }
        console.log(arr)
        result = arr.map((val, i) => {
            return (
                <a href="javascript:;"
                   key = {i}
                   type="button">
                    {val}
                    </a>
            )
        })
        return(
            <div className="foot">
                {result}
            </div>
        )
    }
}
export default Foot