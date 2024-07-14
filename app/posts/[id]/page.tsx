import React from 'react';
import DetailsPage from '../../components/details';
import fetchPosts from '@/app/services/fetch-posts';

const PostDetails = ({ params }: { params: { id: number } }) => {
  return <DetailsPage title={`Post ID: ${params.id}`} />;
};

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default PostDetails;
