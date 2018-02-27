import * as actionType from './action-type'

export const lastTitle = index => {
    return {
        type: actionType.NEXTTILE,
        index
    }
}
export const nextTitle = index => {
    return {
        type: actionType.LASTTILE,
        index
    }
}
export const someTitle = index => {
    return {
        type: actionType.SOMETITLE,
        index
    }
}