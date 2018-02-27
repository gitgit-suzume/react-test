import * as actionType from './action-type.js'

let defaultIndex = 0
export const turnPage = (curIndex = defaultIndex, action = {}) => {
    switch (action.type){
        case actionType.NEXTTILE:
            return curIndex + 1;
        case actionType.LASTTILE:
            return curIndex - 1;
        case actionType.SOMETITLE:
        default:
            return curIndex;
    }
}

export default turnPage
