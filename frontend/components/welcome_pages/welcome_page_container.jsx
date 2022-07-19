import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {logout} from '../../actions/session_actions'
import {login} from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';
import Welcome from './welcome_page';

const mapStateToProps = (state,ownProps) => {
  console.log(ownProps)
  return{
    listings:Object.values(state.entities.listings),
    currentUser: state.entities.users[state.sessions.currentUser],
    bounds:state.ui.filters.bounds
  }
}

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome));
