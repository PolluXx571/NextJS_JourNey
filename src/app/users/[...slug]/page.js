'use client';
import React from 'react';
import { useParams } from 'next/navigation';
const UsersSlug = () => {
      const myParams = useParams();
      console.log(myParams);
      return <div>{myParams.slug[0] + ' ' + myParams.slug[1] + ' ' + myParams.slug[2]}</div>;
};

export default UsersSlug;
