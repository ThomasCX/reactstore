import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { PersistGate} from "redux-persist/integration/react";

import {store, persistor} from './redux/store';
import * as serviceWorker from './serviceWorkerRegistration';

import './index.css';
import App from './App';
import ReactGA from 'react-ga';
ReactGA.initialize('G-60WYT46HBV'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
         <Provider store={store}>
          <BrowserRouter>
              <PersistGate persistor={persistor}>
                  <App />
              </PersistGate>
          </BrowserRouter>
        </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
