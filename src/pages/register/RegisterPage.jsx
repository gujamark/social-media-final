import { NavLink } from 'react-router-dom';
import RegisterForm from '../../components/forms/register';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <div className={styles.RegisterFormWrapper}>
      <RegisterForm />
      <NavLink to="/sign-in">Sign In</NavLink>
    </div>
  );
  // TODO
}

export default RegisterPage;
