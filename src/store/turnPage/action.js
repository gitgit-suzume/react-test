import * as actionType from './action-type'

export const lastTitle = state => {
    return {
        type: actionType.LASTTILE,
        state
    }
}
export const nextTitle = state => {
    return {
        type: actionType.NEXTTILE,
        state
    }
}
export const someTitle = state => {
    return {
        type: actionType.SOMETITLE,
        state
    }
}