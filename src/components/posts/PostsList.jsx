import { useContext } from 'react';
import { Button } from 'rsuite';
import PostItem from './PostItem';
import { PostsContext } from '../../contexts/PostsProvider';

function PostsList() {
  const { posts, updatePage } = useContext(PostsContext);

  const showMore = () => {
    updatePage();
  };

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <Button appearance="ghost" onClick={showMore}>
        Show More
      </Button>
    </div>
  );
}

export default PostsList;
