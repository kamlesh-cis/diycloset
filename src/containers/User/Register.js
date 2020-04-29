import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { register } from '../../actions/user'
import { Register } from '../../components/User/Register'

class RegisterContainer extends React.Component {

  render() {
    return <Register {...this.props} />
  }
}


const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      register
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
