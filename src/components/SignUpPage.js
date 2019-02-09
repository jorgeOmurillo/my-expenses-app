import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startCreateLoginEmail } from '../actions/auth';
import SignUpForm from './SignUpForm';

export const SignUpPage = ({ startCreateLoginEmail }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <Link className="header__signup" to="/">
        <h1>My Expenses</h1>
      </Link>
      <SignUpForm onSubmit={startCreateLoginEmail} />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startCreateLoginEmail: (email, password) =>
    dispatch(startCreateLoginEmail(email, password))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SignUpPage);
