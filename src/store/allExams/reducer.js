let defaultState = {
    exams: [
        {
            id: 0,
            discription: '题目一的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 2,
            discription: '题目二的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 3,
            discription: '题目三的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 4,
            discription: '题目四的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 5,
            discription: '题目五的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 6,
            discription: '题目六的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 7,
            discription: '题目七的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 8,
            discription: '题目八的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 9,
            discription: '题目九的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
        {
            id: 10,
            discription: '题目十的描述',
            option: ['aaa(正确答案)', 'bbb', 'ccc', 'ddd'],
            answer: 0
        },
    ]
}
export const allExams = (state=defaultState, action = {}) => {
    switch (action.type){
        default:
            return state;
    }
}