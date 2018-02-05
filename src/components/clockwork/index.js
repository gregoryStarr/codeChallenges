import React,{Component} from 'react'
import Grid from '../com.starrit/layout/Grid/'
import SideBar from '../com.starrit/layout/SideBar/'
import GameEngine from './GameEngine'
import "./ClockWorkApp.css"
import {getNumFromRange} from './utilities'
class ClockWork extends Component{
    constructor(props){
        super(props);
        this.engine =  new GameEngine(8,8);
        this.tiles = this.engine.createGridTiles()
    }
    render(){
        const {dispatch} = this.props;
        const points = this.props.store.getState().pointReducers.points;
        return(
            <div className="ClockWorkApp">
            <Grid dispatch={dispatch} tiles = {this.tiles} width="80%" height="600px" cols={8} rows={8} className="Grid" />
            <SideBar  points={points} width={25} nextTile={getNumFromRange(0,5)} />
        </div>)
    }
};

export default ClockWork