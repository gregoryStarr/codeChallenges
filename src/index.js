import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from "redux";
import {playerReducers} from "./components/video/reducers";
//import ViewContainer from './components/ViewContainer/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom'
import {pointReducers} from "./components/clockwork/reducers";

const initialState = {
    playerReducers:{
        videoSource:'',
        isPlaying:false,
        isPaused:false,
        showControls:true,
    },
    pointReducers:{
        points:0
    }
}


const allReducers = combineReducers({playerReducers:playerReducers, pointReducers:pointReducers})

const logger = store => dispatch => action => {
    return dispatch(action)
}

const store = createStore(
    allReducers,
    initialState,composeWithDevTools(
        applyMiddleware(logger),
        // other store enhancers if any
    ))



ReactDOM.render(
            <Provider store={store} >
                <BrowserRouter >
                    <App store={store} />
                </BrowserRouter>
            </Provider>
   ,
    document.getElementById('root'));
registerServiceWorker();

store.dispatch({type:"SET_VIDEO_SOURCE", videoSource:'http://localhost:3000/video'})
store.dispatch({type:"VIDEO_PLAY"})