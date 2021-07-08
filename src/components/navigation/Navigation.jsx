import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Icon } from 'rsuite';
import { authSelector } from '../../redux/selectors/auth-selectors';
import { navRoutes } from '../../Routes';
import styles from './Navigation.module.css';

function Navigation() {
  const authData = useSelector(authSelector);
  console.log(authData);
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
              Feed
            </Nav.Item>
          ))}
        </Nav>
        {authData.isAuthenticated && (
          <Nav pullRight>
            <Nav.Item
              icon={<Icon icon="user" />}
              componentClass={NavLink}
              to="/profile">
              {authData.userData.email}
            </Nav.Item>
          </Nav>
        )}
      </Navbar>
    </>
  );
}

export default Navigation;
