import { AuthProtected } from '../../hocs';
import PostsProvider from '../../contexts/PostsProvider';
import PostsList from '../../components/posts';
import styles from './PostsPage.module.css';

function PostsPage() {
  return (
    <PostsProvider>
      <div className={styles.PostsPage}>
        <PostsList />
      </div>
    </PostsProvider>
  );
}

export default AuthProtected(PostsPage);
