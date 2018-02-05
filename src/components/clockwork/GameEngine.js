import {getNumFromRange} from "./utilities";

class GameEngine{
    constructor(gridColumns,
                gridRows,){
        this.gridColumns = gridColumns;
        this.gridRows = gridRows;
        
        this.tiles = [];
    }

    createGridTiles(){
        // Create the tiles
        for (let i = 0; i < this.gridColumns; i++) {
            for (let j = 0; j < this.gridRows; j++) {
                this.tiles.push({width:'100', height:"100", faceUp:true, icon:getNumFromRange(0,5)});
            }
        }

        return this.tiles;
    }
}

export default GameEngine