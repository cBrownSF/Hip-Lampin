import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions'
import Welcome from './welcome_page';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.sessions.currentUser]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
