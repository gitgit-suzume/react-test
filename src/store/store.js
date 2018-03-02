import {createStore, combineReducers} from 'redux'
import * as turnPage from './turnPage/reducer'
import * as answer from './answer/reducer'
import * as allExams from './allExams/reducer'

// let allExams = {
//     exams: [
//         {
//             id: 1,
//             discription: '题目一的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 2,
//             discription: '题目二的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 3,
//             discription: '题目三的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 4,
//             discription: '题目四的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 5,
//             discription: '题目五的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 6,
//             discription: '题目六的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 7,
//             discription: '题目七的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 8,
//             discription: '题目八的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 9,
//             discription: '题目九的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//         {
//             id: 10,
//             discription: '题目十的描述',
//             option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
//             answer: 1
//         },
//     ]
// }
let store = createStore(
    combineReducers({...turnPage, ...answer, ...allExams})
)
export default store