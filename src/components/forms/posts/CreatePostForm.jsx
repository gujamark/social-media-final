import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import {
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  HelpBlock,
  Button,
  Alert,
} from 'rsuite';
import { POSTS } from '../../../services/api';
import styles from './CreatePostForm.module.css';
import { routePaths } from '../../../utils/constants';

function CreatePostForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = async (data) => {
    const result = await POSTS.createPost(data);
    if (result.success) {
      Alert.success(result.message, 5000);
      history.replace(routePaths.POSTS_PATH);
    } else {
      Alert.error(result.message, 5000);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => <FormControl type="text" {...field} />}
        />
        {errors.title && errors.title.type === 'required' && (
          <HelpBlock>Required</HelpBlock>
        )}
      </FormGroup>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <FormControl componentClass="textarea" rows={7} {...field} />
          )}
        />
        {errors.description && errors.description.type === 'required' && (
          <HelpBlock>Required</HelpBlock>
        )}
      </FormGroup>
      <Button appearance="primary" type="submit" block>
        Post
      </Button>
    </Form>
  );
}

export default CreatePostForm;
