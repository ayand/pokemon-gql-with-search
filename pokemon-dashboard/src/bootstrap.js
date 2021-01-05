import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/components/App';
import reducer from './components/reducers';

// Use Mount function to start up the app
const mount = (el) => {
    console.log("MOUNTING DASHBOARD");
    const store = createStore(reducer, applyMiddleware(thunk));

    ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>
      , el
    )
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#root');

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container and we should export the mount function
export { mount };
