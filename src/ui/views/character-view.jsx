import React from "react"
import { Segment, Grid } from "semantic-ui-react"

const Character = props => (
  <Segment raised className="characters">
    {Object.keys(props.characters).map(i => (
      <Segment raised className="character">
        <h2 className="character-header">{props.characters[i].name}</h2>
        {renderStats(props.characters[i].stats)}

        <h2>Items</h2>
        {props.characters[i].items.map(item => (
          <Grid className="character-stuff">
            <Grid.Column>
              <Segment>
                <h2 className="item-header">{item.name}</h2>
                {renderStats(item.stats)}
              </Segment>
            </Grid.Column>
          </Grid>
        ))}
      </Segment>
    ))}
  </Segment>
)

const renderStats = stats => (
  <Segment className="stats-segment">
    <h2 className="stats-header">Stats</h2>
    <Grid columns={2}>
      {stats.map(stat => (
        <Grid.Column>
          <Segment>{stat.name + " : " + stat.value}</Segment>
        </Grid.Column>
      ))}
    </Grid>
  </Segment>
)

export default Character
