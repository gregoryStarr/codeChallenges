import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import {playerReducers} from "./components/video/reducers";
//import ViewContainer from './components/ViewContainer/index'
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
            <Provider store={store} >
                <BrowserRouter >
                    <App />
                </BrowserRouter>
            </Provider>
   ,
    document.getElementById('root'));
registerServiceWorker();

store.dispatch({type:"SET_VIDEO_SOURCE", videoSource:'http://localhost:3000/video'})
store.dispatch({type:"VIDEO_PLAY"})