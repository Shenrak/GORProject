import { connect } from 'react-redux'
import Character from '../views/viw_character'
 
const mapStateToProps = state => ({
  characters: state.characters
})
 
const mapDispatchToProps = dispatch => ({
  //toggleTodo: id => dispatch(addMessage(id))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character)