import { useEffect, useState } from 'react';

type PostType = { id: number; title: string };

export function usePosts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    const posts: PostType[] = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    )
      .then((response) => response.json())
      .then((data) => data);
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts };
}
