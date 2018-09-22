import React from "react"
import Paper from "material-ui/Paper"
import { GridList, GridTile } from "material-ui/GridList"
import Subheader from "material-ui/Subheader"

const Character = props => (
  <div className="character">
    <Paper className="character-stats" zDepth={5}>
      <p>Name: {props.name}</p>
      <p>Level: {props.level}</p>
      <p>Life: {props.hitPoints} HP</p>
    </Paper>

    <GridList cellHeight={180} className="character-stuff">
      <Subheader>Stuff</Subheader>
      {props.stuff.map(tile => (
        <GridTile
          key={tile.name}
          title={tile.name}
          subtitle={"armor : " + tile.armor}
        />
      ))}
    </GridList>
  </div>
)

export default Character
