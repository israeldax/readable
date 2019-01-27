import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, compose} from 'redux'
import middleware from './middleware'
import {Provider} from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
