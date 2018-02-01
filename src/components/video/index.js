import React, {Component} from 'react'

import './style.css';
import VideoControls from "./controls";

class Video extends Component{
    constructor(props){
        super(props);
        console.log("Constructed")
    }

    componentWillUpdate(next){
        //debugger
        let playPromise = null;
        if( next.isPlaying && this.videoElementReference.paused){
            playPromise = this.videoElementReference.play();
        }else if(!playPromise && !this.videoElementReference.paused && !next.isPlaying && this.props.isPlaying){
            this.videoElementReference.pause();
        }
    }


    render(){
        const {
            videoSource,
            isPlaying,
            type,
            onStart,
            onStop,
            onPause,
            dispatch,
            showControls,
            loop
        } = this.props;

        return (
            <section className="VideoContainer" >
                <video className="Video" loop={loop} ref={(videoEl) => { this.videoElementReference = videoEl; }}>
                    <source src={videoSource} type={type} />
                    Your browser does not support the video tag.
                </video>
                {showControls && <VideoControls onStart={onStart} onStop={onStop} isPlaying={isPlaying} onPause={onPause} dispatch={dispatch}/>}
            </section>
        )
    }
}

export default Video