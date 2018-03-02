import React,{ Component } from 'react'
import './Option.less'

class Option extends Component{
    constructor(){
        super()
    }
    render(){
        let optionItems = this.props.examOption.map((val, index) => {
            let ch = String.fromCharCode('A'.charCodeAt(0) + index)
            return (
                <a className="item"
                   key={index}>
                    <label className='single-option'
                       htmlFor={'option-' + index}>
                        <input type="radio"
                               id={'option-' + index}
                               onChange={() => {this.props.onOptionClick(index)}}
                               checked={this.props.originAnswer === index}
                               value={ch}/>
                        <span className={`item ${(this.props.originAnswer === index) ? 'checked' : ''}`}>{ch}</span>
                        <span className={`discription ${(this.props.originAnswer === index) ? 'checked' : ''}`}>{val}</span>
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
