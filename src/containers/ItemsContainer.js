import { connect } from 'react-redux';
import Items from '../components/Items';
import { isMobileDevice } from '../utils/detect';

const mapStateToProps = state => ({
  items: state.items.data,
  isMobileDevice: isMobileDevice()
});

export default connect(mapStateToProps)(Items);
