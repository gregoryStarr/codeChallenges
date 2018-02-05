import React from 'react'
import "./sidebar.css"
import Input from '../../Form/inputs/Input'
import Tile from "../../controls/Tile";
const SideBar = (props) => (
    <div className="Sidebar" style={{"maxWidth":`${props.width}%`}}>
        <h1>SideBar</h1>
        <Input id="wager" label="Wager" value="1" />
        <Input id="strikes" label="Strikes" value="0" />
        <fieldset>
            <span className="input-label">Next Tile</span>
            <Tile icon={props.nextTile}/>
        </fieldset>
    </div>
)

SideBar.defaultProps = {
    nextTile: 1
};

export default SideBar;