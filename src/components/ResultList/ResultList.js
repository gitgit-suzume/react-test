import React,{ Component } from 'react'
import './ResultList.less'

class ResultList extends Component{
    constructor(){
        super()
    }
    static defaultProps = {
        len: 10,
        groupCount: 5
    }
    listArr (){
        let result = []
        let temp = []
        let count = 0
        for(let i = 0; i < this.props.len; i ++){
            temp.push(
                <li key={i} className={''}>
                    <a href="javascript:;" type="button">{i + 1}</a>
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
        for(let i of result){
            console.log(i)
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