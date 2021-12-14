import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>
  }
  console.log(posts);

  return (
    <div>
      {Auth.loggedIn() ? (
        <div className="flex-row justify-space-between my-4">
          {posts &&
            posts.map((post) => (
              <div key={post._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    {post.title}
                  </h4>
                  <Box component="span" sx={{ display: "block" }}>
                    Written by {post.author}.
                  </Box>
                  <Box component="span" sx={{ display: "block" }}>
                    {post.content}
                  </Box>
                  <Box component="span" sx={{ display: "block" }}>
                    Date Created: {post.datePosted}
                  </Box>
                  <br />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>
          You need to be logged in to see the talent on Shifty! {' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostList;