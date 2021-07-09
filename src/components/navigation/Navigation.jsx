import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, Nav, Icon, Button } from 'rsuite';
import { authSelector } from '../../redux/selectors/auth-selectors';
import { navRoutes } from '../../Routes';
import styles from './Navigation.module.css';
import { routePaths, AUTH_TOKEN, USER_DATA } from '../../utils/constants';
import { setAuthUserAction } from '../../redux/actions';
import { AUTHORIZATION } from '../../services/api';

function Navigation() {
  const authData = useSelector(authSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = async () => {
    await AUTHORIZATION.Signout();
    console.log(1);
    dispatch(
      setAuthUserAction({
        isAuthenticated: false,
        userData: {},
      }),
    );
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USER_DATA);
    history.replace(routePaths.SIGN_IN_PATH);
  };

  return (
    <>
      <Navbar>
        <Nav>
          {navRoutes.map((route) => (
            <Nav.Item
              key={route.path}
              to={route.path}
              activeClassName={styles.active}
              componentClass={NavLink}>
              {route.title}
            </Nav.Item>
          ))}
        </Nav>
        {authData.isAuthenticated && (
          <Nav pullRight>
            <Nav.Item
              icon={<Icon icon="user" />}
              componentClass={NavLink}
              to={routePaths.PROFILE_PATH}>
              {authData.userData.email}
            </Nav.Item>
            <Nav.Item
              componentClass={Button}
              appearance="link"
              onClick={logout}>
              Logout
            </Nav.Item>
          </Nav>
        )}
      </Navbar>
    </>
  );
}

export default Navigation;
