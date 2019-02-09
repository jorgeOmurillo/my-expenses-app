import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { start } from '../actions/auth';

class SignUpForm extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  };

  onEmailChange = e => {
    let email = e.target.value;
    this.setState(() => ({ email }));
  };

  onPasswordChange = e => {
    let password = e.target.value;
    this.setState(() => ({ password }));
  };

  onConfirmPasswordChange = e => {
    let confirmPassword = e.target.value;
    this.setState(() => ({ confirmPassword }));
  };

  onSubmit = e => {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;

    if (!email || !password) {
      this.setState(() => ({
        error: 'Please provide an email and password.'
      }));
      return 'Please provide an email address and password.';
    } else if (password !== confirmPassword) {
      this.setState(() => ({
        error: "Passwords don't match!"
      }));
      return "Passwords don't match!";
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit(email, password);
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <form className="form__auth" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="email"
          placeholder="Email Address"
          autoFocus
          className="text-input"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="none"
          className="text-input"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          autoComplete="none"
          className="text-input"
          value={this.state.confirmPassword}
          onChange={this.onConfirmPasswordChange}
        />
        <div>
          <button className="button">Create Account</button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignUpForm);
