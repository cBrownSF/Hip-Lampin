import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import Greetings from './greetings'

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.sessions.currentUser]
})

const mapDispatchtoProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchtoProps)(Greetings)