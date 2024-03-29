import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleUser1Login = () => {
    const user1 = {
      email: 'user1@test.com',
      password: 'password'
    };

    this.props.signIn(user1);
  };


  render() {
    const { authError } = this.props;
    return (
      <div className='container'>
        <form className='white' onSubmit={this.handleSubmit}>
          <h5 className='grey-text text darken-3'>Sign In</h5>
          <br />
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1'>Login</button>

            <button className='btn teal lighten-1 right'
                    onClick={this.handleUser1Login}>Login as User1 for testing</button>
            <div className='red-text center'>
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
