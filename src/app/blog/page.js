import React from 'react';
import Link from 'next/link';
const BlogPage = () => {
      const blogs = [
            { id: 1, title: 'hello nextJs', content: 'nextJs is a great work', slug: 'BLogs nextJS Js1' },
            { id: 2, title: 'hello nextJs', content: 'nextJs is a great framework', slug: 'BLogs nextJS Js22' },
            { id: 3, title: 'hello nextJs', content: 'great work to framework', slug: 'BLogs nextJS Js333' },
      ];
      return (
            <div>
                  {blogs.map((blog) => (
                        <li style={{ listStyle: 'none' }} key={blog.id}>
                              <h2>{blog.title}</h2>
                              <p>{blog.content}</p>
                              <Link href={'/post/detail' + blog.slug}>Info about</Link>
                        </li>
                  ))}
            </div>
      );
};

export default BlogPage;
