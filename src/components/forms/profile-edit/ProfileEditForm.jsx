import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  HelpBlock,
  DatePicker,
  Alert,
} from 'rsuite';

function ProfileEditForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          // defaultValue=""
          render={({ field }) => <DatePicker {...field} oneTap />}
        />
        {errors.birthdate && errors.birthdate.type === 'required' && (
          <HelpBlock className={styles.HelpBlockRed}>Required</HelpBlock>
        )}
      </FormGroup>
    </Form>
  );
}

export default ProfileEditForm;
