import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions'
import {login} from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';
import Welcome from './welcome_page';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.sessions.currentUser]
})

const mapDispatchToProps = dispatch => (
  
  {
  logout: () => dispatch(logout()),
  login: () => dispatch(login({
    email: 'demo@email',
    password: 123456
  })),
    openModal: modal => dispatch(openModal(modal))
}
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
