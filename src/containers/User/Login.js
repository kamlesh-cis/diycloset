import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { login } from '../../actions/user'
import { Login } from '../../components/User/Login'

class LoginContainer extends React.Component {

  render() {
    return <Login {...this.props} />
  }
}


const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
