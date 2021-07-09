import { AuthProtected } from '../../hocs';
import CreatePostForm from '../../components/forms/posts';
import styles from './CreatePostPage.module.css';

function CreatePostPage() {
  return (
    <div className={styles.PostFormWrapper}>
      <CreatePostForm />
    </div>
  );
}

export default AuthProtected(CreatePostPage);
