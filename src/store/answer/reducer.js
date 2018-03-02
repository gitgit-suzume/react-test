import * as actionType from './action-type'

let defaultState = {
    answerList: [],
}

export const answer = (state=defaultState, action = {}, ... rest) => {
    switch (action.type){
        case actionType.SELECTANSWER:
            let temp = state.answerList.slice()
            temp[action.curIdx] = action.index
            return {...state, ...{answerList: temp}}
            // return state.answerList.splice(index, 1, userOptionAnswer)
        default:
            return state;
    }
}