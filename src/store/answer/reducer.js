import * as actionType from './action-type'

let defaultState = {
    answerList: [],
    hasPush: false
}

export const answer = (state=defaultState, action = {}, ... rest) => {
    switch (action.type){
        case actionType.SELECTANSWER:
            let temp = state.answerList.slice()
            temp[action.curIdx] = action.index
            return {...state, ...{answerList: temp}}
        case actionType.PUSHANSWER:
            return {...state, ...{hasPush: true}}
        default:
            return state;
    }
}