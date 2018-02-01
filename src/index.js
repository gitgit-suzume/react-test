import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'
import Header from './components/Header/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));

registerServiceWorker();
