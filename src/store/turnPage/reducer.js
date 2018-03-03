import * as actionType from './action-type.js'

let defaultState = {
    curIdx: 0
}
export const turnPage = (state = defaultState, action = {}) => {
    let curIdx = state.curIdx
    switch (action.type){
        case actionType.NEXTTILE:
            if(curIdx + 1 === action.examsLen){
                action.history.push('/result')
            }
            return {...state, ...{curIdx: curIdx + 1}}
        case actionType.LASTTILE:
            return {...state, ...{curIdx: curIdx - 1}}
        case actionType.SOMETITLE:
            action.history.push('/exam')
            return {...state, ...{curIdx: action.index}}
        default:
            return state;
    }
}

export default turnPage
