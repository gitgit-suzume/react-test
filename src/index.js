import React from 'react';
import ReactDOM from 'react-dom';
import './style/init.css'
import Exam from './pages/exam';
import Route from './router/index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Route />, document.getElementById('root'));


registerServiceWorker();
