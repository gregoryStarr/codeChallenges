import {PLAY, PAUSE, STOP, SETSOURCE, GETSOURCE} from "./actionTypes";

export const playVideo = ()  => {
    return {
        type: PLAY,
        isPlaying: true
    }
}

export const pauseVideo = (pauseBool) =>  {
    return {
        type: PAUSE,
        isPaused: pauseBool
    }
}

export const stopVideo = () => {
    return {
        type: STOP,
        isPlaying: false
    }
}

export const setSource = (source)  =>  {
    return {
        type: SETSOURCE,
        videoSource: source
    }
}

export const getSource = (source)  =>  {
    return {
        type: GETSOURCE,
        videoSource: source
    }
}