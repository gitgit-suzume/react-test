import React,{ Component } from 'react'
import './Option.less'

class Option extends Component{
    constructor(){
        super()
        this.state={
            kind: 'single',
            options:['aaa(正确答案)', 'bbb',
                '卢萨卡地方记录卡就送俄日，没能形成可厉害蓝思科技欧体无偶，名称内需；达科技股份',
                '索拉卡房间里萨科技的法律框架撒打开了飞机离开世纪东方据诶哦入了，东方美少女的疯狂临时文件肉武额，地方纳斯达克那份快乐就'],
            theRight: 1,
            single: 'single',
            plural: 'plural',
            checkClassName: 'checked',
            checked: []
        }
        this.checkPlural = this.checkPlural.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentWillRecievePros(nextProps){
        if(nextProps.kind === '多选题'){
            this.setState({kind: this.state.plural})
        } else{
            this.setState({kind: this.state.single})
        }
    }
    checkPlural(){
    }
    handleChange (e){
        let val = e.target.value
        let ary = this.state.checked
        if(!ary){
            ary = []
        }
        if(this.state.kind === this.state.single) {
            ary.splice(0, 1, val)
        } else {
            let index = ary.indexOf(val)

            if(index === -1){
                ary.push(val)
            } else {
                ary.splice(index, 1)
            }
        }
        this.setState({checked: ary})
    }
    render(){
        let optionItems = this.state.options.map((val, index) => {
            let ch = String.fromCharCode('A'.charCodeAt(0) + index)
            return (
                <a className="item"
                   key={index}>
                    <label className={ this.state.kind }
                       htmlFor={'option-' + index}>
                        <input type="radio"
                               id={'option-' + index}
                               onChange={this.handleChange}
                               checked={this.state.checked === ch}
                               value={ch}/>
                        <span className={`item ${this.state.kind} ${(this.state.checked.indexOf(ch) > -1) ? 'checked' : ''}`}>{ch}</span>
                        <span className={`discription ${(this.state.checked.indexOf(ch) > -1) ? 'checked' : ''}`}>{val}</span>
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
