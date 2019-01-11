import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';


import App from './App'

import carousel from './store/reducers/carouselReducer'
//import carouselData from './data/data'
// make first index activeimport rootReducer from './reducers'


//export default combineReducers({ carousel })

// carouselData[0].active = true;

// const initialState = carouselData;
const rootReducer = combineReducers({ carousel });

const store = createStore(rootReducer, applyMiddleware(thunk))




const app = (
  <Provider store={store}>      
          <App />      
  </Provider>
);


render( app, document.getElementById( 'root' ) );


//serviceWorker.unregister();