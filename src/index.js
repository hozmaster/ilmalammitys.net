import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import reducer from './reducers'
import 'semantic-ui-css/semantic.js';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

const middleware = []
if (process.env.NODE_ENV !== 'production') {
    const logger= require('redux-logger');
    middleware.push(logger.createLogger())
}

let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));


ReactDOM.render(
    <Provider
        store={store}>
        {' '}
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </Provider>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

unsubscribe()