import { connect } from 'react-redux'
import Character from '../views/character-view'
 
const mapStateToProps = state => ({
  id: state.characters[0].id,
  name: state.characters[0].name,
  level: state.characters[0].level,
  hitPoints: state.characters[0].hitPoints,
  stuff: state.characters[0].stuff
})
 
const mapDispatchToProps = dispatch => ({
  //toggleTodo: id => dispatch(addMessage(id))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character)