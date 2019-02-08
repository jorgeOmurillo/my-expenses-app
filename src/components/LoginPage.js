import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginWithEmail } from '../actions/auth.js';
import AuthEmailForm from './AuthEmailForm';
import SignUpPage from './SignUpPage';
import { Link } from 'react-router-dom';

export const LoginPage = ({ startLogin, startLoginWithEmail }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">My Expenses</h1>
      <p>Get your expenses in order!</p>
      <div className="box-layout__signup">
        <Link className="box-layout__link" to="/signup">
          Sign Up!
        </Link>
      </div>
      <AuthEmailForm onSubmit={startLoginWithEmail} />
      <div className="box-layout__title">Or</div>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startLoginWithEmail: (email, password) =>
    dispatch(startLoginWithEmail(email, password))
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
