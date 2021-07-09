import { useContext } from 'react';
import { Button } from 'rsuite';
import PostItem from './PostItem';
import { PostsContext } from '../../contexts/PostsProvider';
import styles from './PostsList.module.css';
import { POST_PER_LOAD } from '../../utils/constants';

function PostsList() {
  const { posts, updatePage, totalCount } = useContext(PostsContext);

  const showMore = () => {
    updatePage();
  };

  return (
    <>
      {!posts.length && <h2>No Posts</h2>}
      {posts.length !== 0 && (
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
          {totalCount > POST_PER_LOAD && posts.length <= POST_PER_LOAD && (
            <div className={styles.ShowMoreButton}>
              <Button appearance="ghost" onClick={showMore} block>
                Show More
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default PostsList;
