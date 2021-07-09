import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  HelpBlock,
  Alert,
} from 'rsuite';
import { setAuthUserAction } from '../../../redux/actions';
import { AUTH_TOKEN, USER_DATA, routePaths } from '../../../utils/constants';
import { AUTHORIZATION } from '../../../services/api';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await AUTHORIZATION.Register(data);
    if (result.success) {
      Alert.success('Registered Successfully', 5000);
      localStorage.setItem(AUTH_TOKEN, result.data.uid);
      localStorage.setItem(USER_DATA, JSON.stringify(result.data));
      dispatch(
        setAuthUserAction({
          isAuthenticated: result.success,
          userData: result.data,
        }),
      );
      history.replace(routePaths.POSTS_PATH);
    } else {
      Alert.error(result.message, 5000);
    }
  };

  return (
    <Form className={styles.RegisterForm} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <Controller
          name="email"
          control={control}
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
