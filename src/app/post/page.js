import React from 'react';
import Link from 'next/link';
const PostPage = () => {
      const posts = [
            { id: 1, title: 'hello nextJs', content: 'nextJs is a great work', slug: 'About next Js1' },
            { id: 2, title: 'hello nextJs', content: 'nextJs is a great framework', slug: 'About next Js22' },
            { id: 3, title: 'hello nextJs', content: 'nextJs is a great work to framework', slug: 'About next Js333' },
      ];
      return (
            <div>
                  <h1>Post Page</h1>
                  <Link href={'/'}>Home PAge</Link>
                  <div>
                        {posts.map((post) => (
                              <li style={{ listStyle: 'none' }} key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                    <Link href={/post/ + post.slug}>Info about</Link>
                              </li>
                        ))}
                  </div>
            </div>
      );
};

export default PostPage;
