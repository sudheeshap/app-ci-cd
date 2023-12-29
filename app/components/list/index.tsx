'use client';

import React from 'react';

import { usePosts } from '@/app/hooks/use-posts';

const List = () => {
  const { posts } = usePosts();

  return (
    <div
      className="bg-slate-400 py-5 w-full text-center m-0"
      data-testid="list"
    >
      {posts.map((post) => (
        <div key={post.id} data-testid="post">
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default List;
