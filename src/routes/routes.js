
import Home from '../components/Home';
import LoginContainer from '../containers/User/Login';
import Profile from '../components/Profile';
import RegisterContainer from '../containers/User/Register';

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/login",
    component: LoginContainer
  },
  {
    path: "/register",
    component: RegisterContainer
  }
];

