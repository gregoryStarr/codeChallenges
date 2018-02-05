import "./tile.css"
import React from 'react'
//
import {Horizontal,
    TopRightCurve,
    TopLeftCurve,
    ThreeWayLeft,
    ThreeWayRight,
    Vertical} from "../../media/icons/paths/";
import {getNumFromRange} from "../../../clockwork/utilities";

const icons = [
    Horizontal    ,
    Vertical      ,
    TopRightCurve ,
    TopLeftCurve  ,
    ThreeWayLeft  ,
    ThreeWayRight
];

// A HOC to wrapp the icons that get passed in dynamically and apply the appropriate props to them when instantiated.
const WrappedIcon = (PassedComponent,props) => {
    const Cmpt = icons[props.icon];
    return <Cmpt/>
};


const Tile=(props)=>(
            <div className="Grid-tile custom-cursor">
                { props.faceUp && WrappedIcon(icons[props.icon],props)}
            </div>
);

Tile.defaultProps = {
    icon:getNumFromRange(0,5),
    faceUp:false,
}


export default Tile;
