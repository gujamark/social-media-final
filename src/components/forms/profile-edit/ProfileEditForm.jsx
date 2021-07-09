import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  HelpBlock,
  DatePicker,
  Button,
  Alert,
} from 'rsuite';
import { AUTHORIZATION } from '../../../services/api';
import { AUTH_TOKEN } from '../../../utils/constants';

function ProfileEditForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(async () => {
    const currentUser = localStorage.getItem(AUTH_TOKEN);
    const result = await AUTHORIZATION.getUserData(currentUser);
    reset(result.data);
  }, []);

  const onSubmit = async (data) => {
    const result = await AUTHORIZATION.updateUser(data);

    if (result.success) Alert.success('Updates Successfully');
    else Alert.Error('Error occured');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <ControlLabel>Name</ControlLabel>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => <FormControl type="text" {...field} />}
        />
        {errors.name && errors.name.type === 'required' && (
          <HelpBlock className={styles.HelpBlockRed}>Required</HelpBlock>
        )}
      </FormGroup>
      <FormGroup>
        <ControlLabel>Birth Date</ControlLabel>
        <Controller
          name="birthdate"
          control={control}
          rules={{ required: true }}
          defaultValue={new Date(Date.now())}
          render={({ field }) => <DatePicker {...field} oneTap />}
        />
        {errors.birthdate && errors.birthdate.type === 'required' && (
          <HelpBlock className={styles.HelpBlockRed}>Required</HelpBlock>
        )}
      </FormGroup>
      <Button appearance="primary" type="submit">
        Update
      </Button>
    </Form>
  );
}

export default ProfileEditForm;
