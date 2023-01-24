import React from "react";
import Tile from "./Tile";
import dataSet from "../assets/data";

export default function Content () {
    const TileComponent = dataSet.map( data => {
        return (
            <Tile 
                key= { data.id }
                { ...data }
            />
        )
    } );
    return (
        <div className="main">
            {TileComponent}
        </div>
    );
}