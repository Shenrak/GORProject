import * as React from "react"
import { connect } from "react-redux"

import ReduxToastr from "react-redux-toastr"
import Loader from "./com_loader"

const Overlay = ({ loading }) => (
  <div>
    <ReduxToastr progressBar={true} />
    {loading.isLoading ? <Loader message={loading.message} /> : null}
  </div>
)

const mapStateToProps = ({ loading }) => ({
  loading
})

export default connect(
  mapStateToProps,
  null
)(Overlay)
