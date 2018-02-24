import React from 'react';
import ReactDOM from 'react-dom';
import './style/init.css'
import Exam from './pages/exam';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Exam />, document.getElementById('root'));

registerServiceWorker();
