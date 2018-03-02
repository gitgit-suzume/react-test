import React,{ Component } from 'react'
import List from '../components/ResultList/ResultList'
import ResultHeadPush from '../components/ResultHeadPush/ResultHeadPush'
import ResultHeadPushed from '../components/ResultHeadPushed/ResultHeadPushed'

class ResultList extends Component{
    constructor(props){
        super(props)
        this.state = {
            len: 10,
            groupCount: 5,
            hasPush: false,
        }
    }
    render(){
        console.log(23333, this.props)
        let ResultHead = !this.state.hasPush ? ResultHeadPushed : ResultHeadPush
        return(
            <div className="exam-list">
                <ResultHead></ResultHead>
                <List groupCount={this.state.groupCount}
                      len={this.state.len}>
                </List>
            </div>
        )
    }
}
export default ResultList