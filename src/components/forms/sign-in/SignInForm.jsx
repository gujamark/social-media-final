import {
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  HelpBlock,
  Alert,
} from 'rsuite';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AUTHORIZATION } from '../../../services/api';
import styles from './SignInForm.module.css';
import { setAuthUserAction } from '../../../redux/actions';
import { AUTH_TOKEN, AUTH_USERNAME } from '../../../utils/constants';

function SignInForm() {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const result = AUTHORIZATION.SignIn(data);
    if (result.success) {
      localStorage.setItem(AUTH_TOKEN, result.auth_token);
      localStorage.setItem(AUTH_USERNAME, result.user_data.username);
      dispatch(
        setAuthUserAction({
          isAuthenticated: result.success,
          userData: result.user_data,
        }),
      );
    } else {
      Alert.warning(result.details, 5000);
    }
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
