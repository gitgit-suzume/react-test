import * as actionType from './action-type'

export const lastTitle = () => {
    return {
        type: actionType.LASTTILE,
    }
}
export const nextTitle = (examsLen, history) => {
    return {
        type: actionType.NEXTTILE,
        examsLen,
        history,
    }
}
export const someTitle = (index, history) => {
    return {
        type: actionType.SOMETITLE,
        index,
        history
    }
}