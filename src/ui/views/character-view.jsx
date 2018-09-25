import React from "react"
import { Segment, Grid } from "semantic-ui-react"

const Character = props => (
  <div className="character">
    {Object.keys(props.characters).map(i => (
      <div>
        <Segment className="character-stats" zDepth={5}>
          {Object.keys(props.characters[i].stats).map(u => (
            <p>{u + " : " + props.characters[i].stats[u]}</p>
          ))}
        </Segment>

        <Grid className="character-stuff">
          <h2>Items</h2>
          {props.characters[i].items.map(tile =>
            Object.keys(tile).map(u =>
              Object.keys(tile[u].stats).map(o => (
                <p>{o + " : " + tile[u].stats[o]}</p>
              ))
            )
          )}
        </Grid>
      </div>
    ))}
  </div>
)

export default Character
