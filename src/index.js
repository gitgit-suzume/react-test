import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index'
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
