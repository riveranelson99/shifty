import React from 'react';

import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';

import { QUERY_POSTS } from '../utils/queries';

const Posts = () => {
    const { loading, data } = useQuery( QUERY_POSTS );
    const posts = data?.profiles || [];

    return (
        <main>
            <div className="col-12 col-md-10 my-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList
                  posts={posts}
                />
              )}
            </div>
        </main>
    );
};

export default Posts;

