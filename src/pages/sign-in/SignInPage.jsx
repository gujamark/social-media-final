import { NavLink } from 'react-router-dom';
import SignInForm from '../../components/forms/sign-in';
import styles from './SignInPage.module.css';
import { noAuthProtected } from '../../hocs';

function SignInPage() {
  return (
    <>
      <div className={styles.SignInFormWrapper}>
        <SignInForm />
        <NavLink to="/register">Create Account</NavLink>
      </div>
    </>
  );
}

export default noAuthProtected(SignInPage);
