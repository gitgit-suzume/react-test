import React,{ Component } from 'react'
import 'src/components/Option/Option.css'

class Option extends Component{
    constructor(props){
        super(props)
        this.state={
            kind: '单选题',
            discription: '题目1',
            option:['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
        }
    }
    componentWillRecievePros(nextProps){
        if(nextProps.kind === '多选题'){
            this.setState({kind: '多选题'})
        }
    }
    createOption(){
        if(this.state.kind==='单选题'){
            return (
                <li></li>
            )
        }
    }
    render(){
        return(
            <div className="question">
                <div className="discription">
                    <span>({this.state.kind})</span>
                    <span>{this.state.discription}</span>
                </div>
                <div className="option">

                </div>
            </div>
        )
    }
}
export default Option