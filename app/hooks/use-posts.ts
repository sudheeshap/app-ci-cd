import { useEffect, useState } from 'react';
import fetchPosts, { PostType } from '../services/fetch-posts';

export function usePosts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return { posts };
}
