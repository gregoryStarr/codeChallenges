import React from 'react'
import Tile from '../../controls/Tile/index'
import "./grid.css"
const Grid = (props) =>(
    <div className={props.className} style={{width:`${props.width}`, height:`${props.height}`}}>
        {
            props.tiles.map((tile) => (
                <Tile dispatch={props.dispatch} key={Math.random()*100} {...tile} />
            ))
        }
    </div>
);

export default Grid;