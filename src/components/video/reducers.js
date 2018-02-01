import {PLAY, PAUSE, STOP, SETSOURCE, GETSOURCE} from "./actionTypes";


export const playerReducers = (state = {}, action) => {
    const newState = {...state};
    let src = state.videoSource;
    console.log(JSON.stringify(action));
    switch (action.type) {
        case SETSOURCE:
            src = action.videoSource;
            newState.videoSource = src;
            return newState;
        case GETSOURCE:
            src = action.videoSource;
            newState.videoSource = src;
            return newState;
        case PAUSE:
            newState.isPlaying = false;
            return newState
        case STOP:
            newState.isPlaying = false;
            return newState;
        case PLAY:
            newState.isPlaying = true;
            return newState;
        default:
            return state
    }
}