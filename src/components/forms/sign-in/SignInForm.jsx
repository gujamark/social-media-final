import {
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  HelpBlock,
} from 'rsuite';
import { useForm, Controller } from 'react-hook-form';
import { AUTHORIZATION } from '../../../services/api';
import styles from './SignInForm.module.css';

function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(AUTHORIZATION.SignIn(data.username, data.password));
  };

  return (
    <Form className={styles.SigninForm} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <ControlLabel>Username</ControlLabel>
        <Controller
          name="username"
          control={control}
          defaultValue="guja"
          rules={{ required: true }}
          render={({ field }) => <FormControl type="text" {...field} />}
        />
        {errors.username && errors.username.type === 'required' && (
          <HelpBlock className={styles.HelpBlockRed}>Required</HelpBlock>
        )}
      </FormGroup>
      <FormGroup>
        <ControlLabel>Password</ControlLabel>
        <Controller
          name="password"
          control={control}
          defaultValue="guja"
          rules={{ required: true }}
          render={({ field }) => <FormControl type="password" {...field} />}
        />
        {errors.password && errors.password.type === 'required' && (
          <HelpBlock className={styles.HelpBlockRed}>Required</HelpBlock>
        )}
      </FormGroup>
      <Button
        appearance="primary"
        className={styles.ActionButton}
        type="submit">
        Sign In
      </Button>
    </Form>
  );
}

export default SignInForm;
