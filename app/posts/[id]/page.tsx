import React from 'react';
import DetailsPage from '../../components/details';

const PostDetails = ({ params }: { params: { id: number } }) => {
  return <DetailsPage title={`Post ID: ${params.id}`} />;
};

export default PostDetails;
