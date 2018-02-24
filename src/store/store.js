// import React  from 'react'

console.log(2222222)

//Reducer
const counter = (state = {}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1}
        default:
            return state
    }
}
class Counter extends Comment{
    //State
    constructor(){
        super()
        this.state = counter(undefined, {})
    }
}
export default Counter