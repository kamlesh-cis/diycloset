import agent from '../agent';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED,
  REGISTER
} from '../constants/actionTypes';

export const login = (email, password) => dispatch => {
  dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) })
};

export const register = (username, email, password) => dispatch => {
  const payload = agent.Auth.register(username, email, password);
  dispatch({ type: REGISTER, payload })
};