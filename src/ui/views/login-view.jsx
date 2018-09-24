import React from "react"
import { Segment, Divider, Input, Button } from "semantic-ui-react"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: "",
      password: ""
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.login(this.state)
  }

  onChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="login-background">
        <Segment raised className="login-container">
          <strong> Welcome! Please sign in :) </strong>
          <Divider />
          <form
            className="input-login-container"
            onSubmit={this.onSubmit.bind(this)}
          >
            <Input
              onChange={this.onChange.bind(this)}
              name="login"
              className="input-login"
              placeholder="Login"
            />
            <Input
              onChange={this.onChange.bind(this)}
              name="password"
              className="input-login"
              placeholder="Password"
            />
            <Button style={{display: "none"}}/>
          </form>
        </Segment>
      </div>
    )
  }
}

export default Login
