import * as React from "react"
import { Loader } from "semantic-ui-react"

const LoaderFrame = ({ message }) => (
  <div className="loadingDiv">
    <Loader active={true} inline="centered" size='massive' content={message} />
  </div>
)

export default LoaderFrame