import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index'
import Foot from './components/Foot/Foot'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store/store'
import './index.less'
import './style/init.css'


const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <div className="app-container">
                <Component></Component>
                <Foot></Foot>
            </div>
        </Provider>
        , document.getElementById('root')
    )
}
store.subscribe(() => {
    render(Route)
})
render(Route)


registerServiceWorker();
