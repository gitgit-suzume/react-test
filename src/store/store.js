import {createStore, combineReducers} from 'redux'
import * as turnPage from './turnPage/reducer'
import * as answer from './answer/reducer'

let defaultData = {
    curIndex: 0,
    len: 10,
    exams: [
        {
            id: 1,
            type: 'double',
            discription: '题目一的描述',
            option: ['aaa(正确答案)', 'bbb(正确答案)', 'ccc', 'ddd'],
            answer: [1, 2]
        },
        {
            id: 2,
            type: 'single',
            discription: '题目二的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
        {
            id: 3,
            type: 'single',
            discription: '题目三的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
        {
            id: 4,
            type: 'single',
            discription: '题目四的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
        {
            id: 5,
            type: 'single',
            discription: '题目五的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
        {
            id: 6,
            type: 'single',
            discription: '题目六的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
        {
            id: 7,
            type: 'single',
            discription: '题目七的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
        {
            id: 8,
            type: 'single',
            discription: '题目八的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
        {
            id: 9,
            type: 'single',
            discription: '题目九的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
        {
            id: 10,
            type: 'single',
            discription: '题目十的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: [1]
        },
    ]
}
let store = createStore(
    combineReducers({...turnPage, ...answer})
)
export default store