import React, { useEffect, useState } from 'react';

export const PostsContext = React.createContext();

function PostsProviderComponent({ children }) {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);

  const loadPosts = async (newPage) => {
    const postsData = [];
    for (let i = newPage * 15; i < (newPage + 1) * 15; i += 1)
      postsData.push({ id: i, title: `rame ${i}` });
    setPosts([...posts, ...postsData]);
  };

  const updatePage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    loadPosts(page);
  }, [page]);

  return (
    <PostsContext.Provider value={{ posts, updatePage }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProviderComponent;
