import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, startLogin, startLogout } from '../../actions/auth';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should generate login action object', () => {
  const uid = 'asdad';
  const action = login(uid);

  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout action object', () => {
  const action = logout();

  expect(action).toEqual({ type: 'LOGOUT' });
});
