import { Panel, Button, Badge } from 'rsuite';
import { useState, useContext } from 'react';
import styles from './PostItem.module.css';
import { POSTS } from '../../services/api';
import { PostsContext } from '../../contexts/PostsProvider';

function PostItem({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.like_count);

  const { deletePost } = useContext(PostsContext);

  const onLikeClick = () => {
    POSTS.like(post.id);
    setLiked(true);
    setLikeCount(likeCount + 1);
  };

  const onUnlikeClick = () => {
    POSTS.unlike(post.id);
    setLiked(false);
    setLikeCount(likeCount - 1);
  };

  const onDelete = async () => {
    deletePost(post.id);
  };

  const PanelHeader = (
    <div className={styles.PostItemHeader}>
      <span className={styles.TitleBlue}>
        {post.title}
        {post.canDelete && (
          <Button
            color="red"
            appearance="ghost"
            style={{ marginLeft: '20px' }}
            onClick={onDelete}>
            DELETE
          </Button>
        )}
      </span>
      <Badge content={likeCount}>
        <Button
          appearance={liked ? 'primary' : 'ghost'}
          color="blue"
          onClick={liked ? onUnlikeClick : onLikeClick}>
          {liked ? 'Liked' : 'Like'}
        </Button>
      </Badge>
    </div>
  );

  return (
    <Panel header={PanelHeader} className={styles.PostCard} bordered>
      <p>{post.description}</p>
      <div className={styles.timestamp}>{post.created_on}</div>
      <p>Author:{post.created_by}</p>
      <br />
      {/* {post.canDelete && (
        
      )} */}
    </Panel>
  );
}

export default PostItem;
