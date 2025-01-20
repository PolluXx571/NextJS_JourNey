'use client';
import React from 'react';
import { useParams } from 'next/navigation';
const BlogSlug = () => {
      const blog = useParams();

      return <div>{params === undefined && null ? 'not found items' : blog.slug}</div>;
};
export default BlogSlug;
