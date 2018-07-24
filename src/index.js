import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'

import reducers from 'reducers'

import Table from 'components/Table'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<Table />
	</Provider>,
	document.getElementById('root')
);