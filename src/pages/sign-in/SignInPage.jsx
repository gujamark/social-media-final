import { Button } from 'rsuite';
import { NavLink } from 'react-router-dom';
import SignInForm from '../../components/forms/sign-in';
import styles from './SignInPage.module.css';

function SignInPage() {
  return (
    <div className={styles.SignInFormWrapper}>
      <SignInForm />
      <NavLink to="/register">Create Account</NavLink>
    </div>
  );
}

export default SignInPage;
