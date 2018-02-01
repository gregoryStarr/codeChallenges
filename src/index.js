import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import {playerReducers} from "./components/video/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom'
const initialState = {
    videoSource:'',
    isPlaying:false,
    isPaused:false,
    showControls:true
}


const logger = store => dispatch => action => {
    return dispatch(action)
}

const store = createStore(
    playerReducers,
    initialState,composeWithDevTools(
        applyMiddleware(logger),
        // other store enhancers if any
    ))

ReactDOM.render(

        <BrowserRouter>
            <Provider store={store} >
            <App />
            </Provider>
        </BrowserRouter>
   ,
    document.getElementById('root'));
registerServiceWorker();
