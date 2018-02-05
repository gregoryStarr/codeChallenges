import React, { Component } from 'react';
import './App.css';
import { Link, } from 'react-router-dom'
import {pauseVideo, playVideo, stopVideo} from "./components/video/actions";
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import ViewContainer from './components/ViewContainer';


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
                <Link className="nav-link"  to='/'>Home</Link>
                <Link className="nav-link" to='/video'>VIDEO</Link>
                <Link className="nav-link" to='/clockwork'>CLOCKWORK</Link>
                <Link className="nav-link" to='/goldenfrog'>GOLDENFROG</Link>
            </nav>
        </header>
          <ViewContainer {...this.props}/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
