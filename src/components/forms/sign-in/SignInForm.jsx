import { Form, ControlLabel, FormGroup, FormControl, Button } from 'rsuite';
import styles from './SignInForm.module.css';

function SignInForm() {
  return (
    <Form className={styles.SigninForm}>
      <FormGroup>
        <ControlLabel>Username</ControlLabel>
        <FormControl name="username" type="text" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Password</ControlLabel>
        <FormControl name="username" type="password" />
      </FormGroup>
      <Button appearance="primary" className={styles.ActionButton}>
        Sign In
      </Button>
    </Form>
  );
}

export default SignInForm;
