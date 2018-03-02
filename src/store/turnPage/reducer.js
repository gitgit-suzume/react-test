import * as actionType from './action-type.js'

let defaultState = {
    curIdx: 0
}
export const turnPage = (state = defaultState, action = {}) => {
    let curIdx = state.curIdx
    switch (action.type){
        case actionType.NEXTTILE:
            return Object.assign({}, state, {curIdx: curIdx + 1})
        case actionType.LASTTILE:
            console.log('last')
            return Object.assign({}, state, {curIdx: curIdx - 1})
        case actionType.SOMETITLE:
        default:
            return state;
    }
}

export default turnPage
