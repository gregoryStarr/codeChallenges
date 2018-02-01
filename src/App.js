import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import {pauseVideo, playVideo, stopVideo} from "./components/video/actions";
import ViewContainer from './components/ViewContainer'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        videoSource: state.videoSource,
        isPlaying: state.isPlaying,
        isPaused: state.isPaused,
        showControls:state.showControls
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        onStart: playVideo,
        onStop: stopVideo,
        onPause:pauseVideo
        }
    };

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>A Collection of Code Challenges</p>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/video'>VIDEO</Link></li>
                    <li><Link to='/clockwork'>CLOCKWORK</Link></li>
                    <li><Link to='/goldenfrog'>GOLDENFROG</Link></li>
                </ul>
            </nav>
        </header>
         <ViewContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
