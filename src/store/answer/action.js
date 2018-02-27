import * as actionType from './action-type'

/*
* answer= [[], [], []]
* */
export const pushOne = (newAnswer, answer) => {
    return {
        type: actionType.PUSHONE,
        newAnswer,
        answer
    }
}