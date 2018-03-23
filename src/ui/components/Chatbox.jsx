import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Chatbox extends React.Component{
  
  render() {
    const style = {
      height: 800,
      width: 900,
      marginTop: "5%",
      marginBottom: "5%",
      marginLeft: "20%",
      textAlign: 'left',
      display: 'inline-block',
    }

    const style2 = {
      height: "80%",
      width: "95%",
      marginTop: "2.5%",
      marginLeft: "2.5%",
      marginRight: "2.5%",
      textAlign: 'center',
      display: 'inline-block',
    }

  const style3 = {
    marginTop: "2%",
    width: "70%",
    marginLeft: "4%"
  }

  const style4 = {
    marginLeft: "4.5%",
    width: 150
  }
    
    return (
      <div>
        {//<Paper className = "chatboxContainer" zDepth={5} />
        }
        <Paper style={style} zDepth={5}>
          <Paper style={style2} zDepth={1} />
          <TextField style={style3} hintText="Tell the Game Master !" floatingLabelText="What will you do next ?" />
          <RaisedButton label="Send" secondary={true} style={style4} />
        </Paper>
      </div>
    )
  }
}