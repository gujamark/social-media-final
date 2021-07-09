import React, { useEffect, useState } from 'react';
import { POSTS } from '../services/api';

export const PostsContext = React.createContext();

function PostsProviderComponent({ children }) {
  const [lastDoc, setLastDoc] = useState();
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState();

  const loadPosts = async () => {
    const response = await POSTS.getPosts(lastDoc);
    setPosts([...posts, ...response.data]);
    setLastDoc(response.lastDoc);
    setTotalCount(response.total_count);
  };

  const updatePage = () => {
    loadPosts();
  };

  const deletePost = async (postid) => {
    await POSTS.deletePost(postid);
    const response = await POSTS.getPosts();
    console.log([...response.data]);
    setPosts([...response.data]);
    setLastDoc(response.lastDoc);
    setTotalCount(response.total_count);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{ posts, updatePage, deletePost, totalCount }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProviderComponent;
