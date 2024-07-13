'use client';

import React from 'react';

import { usePosts } from '@/app/hooks/use-posts';
import Link from 'next/link';

const List = () => {
  const { posts } = usePosts();

  return (
    <div
      className="w-full text-center m-0 bg-gray-100 px-3 py-2"
      data-testid="list"
    >
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div data-testid="post" className="p-20 bg-white m-2">
            {post.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
