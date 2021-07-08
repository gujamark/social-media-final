import { Panel } from 'rsuite';
import styles from './PostItem.module.css';

function PostItem({ post }) {
  const PanelHeader = <p className={styles.TitleBlue}>{post.title}</p>;

  return (
    <Panel header={PanelHeader} className={styles.PostCard} bordered>
      Post Text
    </Panel>
  );
}

export default PostItem;
