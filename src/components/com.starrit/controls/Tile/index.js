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
import {addPoint} from "../../../clockwork/actions";


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


class Tile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            faceUp:this.props.faceUp | false,
            icon:props.icon,
        }
    }

    componentDidMount(){

    }

    onClick(e){
        this.setState({faceUp: this.state.faceUp ? false : true})
        this.props.dispatch(addPoint())
    }


    render(){
        const {style, ...props} = this.props;
        console.log("rendering ::" + this.state.faceUp)
        return (
            <div className="Grid-tile custom-cursor" onClick={(e)=>this.onClick(e)} style={{...style}}>
                { this.state.faceUp && WrappedIcon(icons[props.icon],props)}
            </div>
        )
    }
}

Tile.defaultProps = {
    icon:getNumFromRange(0,5),
    faceUp:false,
}


export default Tile;
