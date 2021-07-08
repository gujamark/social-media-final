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
import { useHistory } from 'react-router-dom';
import { AUTHORIZATION } from '../../../services/api';
import styles from './SignInForm.module.css';
import { setAuthUserAction } from '../../../redux/actions';
import { AUTH_TOKEN, USER_DATA, routePaths } from '../../../utils/constants';

function SignInForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await AUTHORIZATION.SignIn(data);
    console.log(result);
    if (result.success) {
      localStorage.setItem(AUTH_TOKEN, result.data.uid);
      localStorage.setItem(USER_DATA, JSON.stringify(result.data));
      dispatch(
        setAuthUserAction({
          isAuthenticated: result.success,
          userData: result.data,
        }),
      );
      Alert.success('Authenticated successfully');
      history.replace(routePaths.FEED_PATH);
    } else {
      console.log(result.message);
      Alert.warning(result.message, 5000);
    }
  };

  return (
    <Form className={styles.SigninForm} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <ControlLabel>Username</ControlLabel>
        <Controller
          name="email"
          control={control}
          defaultValue="guja"
          rules={{ required: true }}
          render={({ field }) => <FormControl type="email" {...field} />}
        />
        {errors.email && errors.email.type === 'required' && (
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
