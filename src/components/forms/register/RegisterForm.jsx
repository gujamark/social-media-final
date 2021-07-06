import { Form, ControlLabel, FormGroup, FormControl, Button } from 'rsuite';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  return (
    <Form className={styles.RegisterForm}>
      <FormGroup>
        <ControlLabel>Username</ControlLabel>
        <FormControl name="username" type="text" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Password</ControlLabel>
        <FormControl name="username" type="password" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl name="username" type="password" />
      </FormGroup>
      <Button appearance="primary" className={styles.ActionButton}>
        Register
      </Button>
    </Form>
  );
}

export default RegisterForm;
