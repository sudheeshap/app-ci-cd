export type PostType = { id: number; title: string };

const fetchPosts = async () => {
  const posts: PostType[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
  )
    .then((response) => response.json())
    .then((data) => data);

  return posts;
};

export default fetchPosts;
