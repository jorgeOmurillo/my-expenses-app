import React from 'react';
import { connect } from 'react-redux';
import {
  startLoginGoogle,
  startLoginFacebook,
  startLoginTwitter,
  startLoginWithEmail
} from '../actions/auth.js';
import AuthEmailForm from './AuthEmailForm';
import SignUpPage from './SignUpPage';
import { Link } from 'react-router-dom';

export const LoginPage = ({
  startLoginGoogle,
  startLoginFacebook,
  startLoginTwitter,
  startLoginWithEmail
}) => (
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
      <button className="button button__login" onClick={startLoginGoogle}>
        Login with Google
      </button>
      <br />
      <button className="button button__login" onClick={startLoginFacebook}>
        Login with Facebook
      </button>
      <br />
      <button className="button" onClick={startLoginTwitter}>
        Login with Twitter
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
  startLoginFacebook: () => dispatch(startLoginFacebook()),
  startLoginTwitter: () => dispatch(startLoginTwitter()),
  startLoginWithEmail: (email, password) =>
    dispatch(startLoginWithEmail(email, password))
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
