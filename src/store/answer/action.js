import * as actionType from './action-type'

export const selectAnswer = (index, curIdx) => {
    return {
        type: actionType.SELECTANSWER,
        index,
        curIdx
    }
}
export const pushAnswer = () => {
    return {
        type: actionType.PUSHANSWER
    }
}