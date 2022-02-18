import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { clearListings } from '../../actions/filter_actions';
import HomePage from './home_page';
const mapDispatchToProps = (dispatch) => {
  return{
    clearListings:() => dispatch(clearListings())
  }
}
export default withRouter(connect(null,mapDispatchToProps)(HomePage))