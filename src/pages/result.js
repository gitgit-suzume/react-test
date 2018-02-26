import React,{ Component } from 'react'
import List from '../components/ResultList/ResultList'

class ResultList extends Component{
    constructor(){
        super()
        this.state = {
            len: 10,
            groupCount: 5
        }
    }
    render(){
        return(
            <div className="exam-list">
                <List groupCount={this.state.groupCount}
                      len={this.state.len}></List>
            </div>
        )
    }
}
export default ResultList