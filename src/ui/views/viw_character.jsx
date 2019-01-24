import React from "react"
import { Segment, List, Popup, Label } from "semantic-ui-react"

const Character = props => (
  <Segment raised className="characters">
    {Object.keys(props.characters).map(i => (
      <div raised className="character" key={i}>
        <h2 className="character-header">{props.characters[i].name}</h2>
        <div className="character-attributes">
          <Segment className="character-stats">
            {renderStats(props.characters[i].stats)}
          </Segment>

          <Segment className="character-stuff">
            <h2>Items</h2>
            <List
              items={props.characters[i].items.map(item => (
                // item.name
                <Popup
                  key={item.name}
                  trigger={<Label className="item-label">{item.name}</Label>}
                  content={renderStats(item.stats)}
                />
              ))}
            />
          </Segment>
        </div>
      </div>
    ))}
  </Segment>
)

const renderStats = stats => (
  <div className="stats-segment">
    <h2 className="stats-header">Stats</h2>
    <List items={stats.map(stat => stat.name + " : " + stat.value)} />
  </div>
)

export default Character
