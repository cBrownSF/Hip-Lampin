import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions'
import Welcome from './welcome_page';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.sessions.currentUser],
  // demoUser: state.entities.users[state.entities.users.id = 71]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) =>dispatch(logout(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
