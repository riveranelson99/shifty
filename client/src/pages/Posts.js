import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';

import { QUERY_POSTS } from '../utils/queries';

const Posts = () => {
    const { loading, data } = useQuery( QUERY_POSTS );

    const posts = data?.posts || [];
    console.log(posts);
    return (
      <div>
      <h2>
        Read what people have been saying!
      </h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PostList
            posts={posts}
            title="Some posts"
          />
        )}
      </div>
    </div>
    );
};

export default Posts;

