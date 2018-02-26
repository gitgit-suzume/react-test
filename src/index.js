import React from 'react';
import ReactDOM from 'react-dom';
import './style/init.css'
import Route from './router/index'
import Foot from './components/Foot/Foot'
import registerServiceWorker from './registerServiceWorker';
import './index.less'

const render = Component => {
    ReactDOM.render(
        <div className="app-container">
            <Component></Component>
            <Foot></Foot>
        </div>
        , document.getElementById('root')
    )
}
render(Route)


registerServiceWorker();
