import * as actionType from './action-type'

export const answer = (newAnswer = [], answer=[], action = {}) => {
    switch (action.type){
        case actionType.PUSHONE:
            return [...answer, newAnswer];
        default:
            return answer;
    }
}