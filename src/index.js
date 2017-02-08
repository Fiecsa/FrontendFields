import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import promise from 'redux-promise';
import routes from './routes';
import App from './pages/user/Home';
import reducers from './reducers';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//
// ReactDOM.render(
//    <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//    </Provider>
//   , document.querySelector('.container'));

const logger = createLogger();
const store = createStore(
    reducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.querySelector('.container')
);