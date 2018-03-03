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
    render(){
        let optionItems = this.props.examOption.map((val, index) => {
            let ch = String.fromCharCode('A'.charCodeAt(0) + index)
            let aClassName = this.aClassName(index)
            return (
                <a className={aClassName}
                   key={index}>
                    <label className='single-option'
                       htmlFor={'option-' + index}>
                        <input type="radio"
                               id={'option-' + index}
                               onChange={() => {this.props.onOptionClick(index); this.autoNext()}}
                               checked={this.props.originAnswer === index}
                               value={ch}/>
                        {/*<span className={`item ${(this.props.originAnswer === index) ? 'checked' : ''}`}>{ch}</span>*/}
                        {/*<span className={`discription ${(this.props.originAnswer === index) ? 'checked' : ''}`}>{val}</span>*/}
                        <span className={`item option-item`}>{ch}</span>
                        <span>{val}</span>
                    </label>
                </a>
            )
        })
        return(
            <div className="option">
                {optionItems}
            </div>
        )
    }
}
export default Option
