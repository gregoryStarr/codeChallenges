import React from 'react'
import "./sidebar.css"
import Input from '../../Form/inputs/Input'
import Tile from "../../controls/Tile";
const SideBar = (props) => (
    <div className="Sidebar" style={{"maxWidth":`${props.width}%`}}>
        <h1>PathFinder</h1>
        <em>A Quick UI Prototype</em>
        <Input id="points" label="Points" value={props.points} />
        <Input id="wager" label="Wager" value="1" />
        <Input id="strikes" label="Strikes" value="0" />
        <fieldset className="Input-fieldset">
            <span className="input-label">Next Tile</span>
            <Tile icon={0} faceUp={true}  style={{width:"50px", height:"50px"}}/>
        </fieldset>
    </div>
)

SideBar.defaultProps = {
    nextTile: 1
};

export default SideBar;