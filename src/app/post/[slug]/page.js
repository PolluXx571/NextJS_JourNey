'use client';
import React from 'react';
import { useParams } from 'next/navigation';
const PostSlug = () => {
      const params = useParams();
      const decodedInfo = decodeURIComponent(params.slug);

      return <div>{params === undefined && null ? 'not found items' : decodedInfo}</div>;
};

export default PostSlug;
