import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import './Option.less'

class Option extends Component{
    constructor(){
        super()
    }
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    autoNext = () => {
        this.props.autoNext(this.props.examsLen, this.context.router.history)
    }
    aClassName = (idx) => {
        if(!this.props.hasPush && this.props.originAnswer === idx){
            return 'selected-item'
        }
        if(this.props.hasPush){
            if(idx === this.props.correctAnswer){
                return 'correct-item'
            }
            if(this.props.originAnswer === idx){
                return 'error-item'
            }
        }
    }
    selectAnswer(index) {
        this.props.onOptionClick(index);
        this.autoNext()
    }
    optionCh(index){
        if(index !== undefined) {
            return String.fromCharCode('A'.charCodeAt(0) + index)
        }
    }
    analysis = () => {
        let ch = this.optionCh(this.props.correctAnswer)
        let origin = this.optionCh(this.props.originAnswer)
        let result = ch === origin ? '正确': '错误'
        let resultClass = ch === origin ? 'correct-span': 'error-span'
        if(this.props.hasPush){
            return (
                <div className="analysis">
                    <span className="normal">正确答案:</span>
                    <span className="correct-span">{ch}</span>
                    <span className="normal">你的答案:</span>
                    <span className={resultClass}>{origin}({result})</span>
                </div>
            )
        }
    }
    render(){
        let optionItems = this.props.examOption.map((val, index) => {
            let ch = this.optionCh(index)
            let aClassName = this.aClassName(index)
            return (
                <a className={aClassName}
                   key={index}>
                    <label className={`single-option ${this.props.hasPush ? '': 'label-hover'}`}
                       htmlFor={'option-' + index}>
                        <input type="radio"
                               id={'option-' + index}
                               disabled={this.props.hasPush}
                               onChange={() => {this.selectAnswer(index)}}
                               checked={this.props.originAnswer === index}
                               value={ch}/>
                        <span className={`item option-item`}>{ch}</span>
                        <span>{val}</span>
                    </label>
                </a>
            )
        })
        return(
            <div className="option">
                {optionItems}
                {this.analysis()}
            </div>
        )
    }
}
export default Option
