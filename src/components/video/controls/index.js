import React from 'react'
import "./style.css"
const VideoControls = (props) => (
    <div  className="ButtonBar">
        <a className="ButtonBase"
            onClick={()=>{
            if(!props.isPlaying){
                props.dispatch(props.onStart())
            }

        }}>Play</a>
        <a className="ButtonBase" onClick={()=>{
            if(props.isPlaying){
                props.dispatch(props.onPause())
            }
        }}>Pause</a>
    </div>
);

export default VideoControls;