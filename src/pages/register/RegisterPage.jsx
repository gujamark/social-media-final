import { NavLink } from 'react-router-dom';
import RegisterForm from '../../components/forms/register';
import styles from './RegisterPage.module.css';
import { noAuthProtected } from '../../hocs';
import { routePaths } from '../../utils/constants';

function RegisterPage() {
  return (
    <div className={styles.RegisterFormWrapper}>
      <RegisterForm />
      <NavLink to={routePaths.SIGN_IN_PATH}>Sign In</NavLink>
    </div>
  );
}

export default noAuthProtected(RegisterPage);
