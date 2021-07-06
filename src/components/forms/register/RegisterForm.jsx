import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  HelpBlock,
} from 'rsuite';
import { AUTHORIZATION } from '../../../services/api';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(AUTHORIZATION.Register(data.username, data.password));
  };

  return (
    <Form className={styles.RegisterForm} onSubmit={handleSubmit(onSubmit)}>
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
      <FormGroup>
        <ControlLabel>Confirm Password</ControlLabel>
        <Controller
          name="ConfirmPassword"
          control={control}
          defaultValue="guja"
          rules={{
            validate: (value) =>
              value === watch('password') || 'passwords must be the same',
            required: true,
          }}
          render={({ field }) => (
            <FormControl
              type="password"
              {...field}
              errorMessage={
                errors.ConfirmPassword && errors.ConfirmPassword.message
              }
            />
          )}
        />
        {errors.ConfirmPassword &&
          errors.ConfirmPassword.type === 'required' && (
            <HelpBlock className={styles.HelpBlockRed}>Required</HelpBlock>
          )}
      </FormGroup>
      <Button
        appearance="primary"
        type="submit"
        className={styles.ActionButton}>
        Register
      </Button>
    </Form>
  );
}

export default RegisterForm;
