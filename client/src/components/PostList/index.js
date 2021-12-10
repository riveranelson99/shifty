import React from 'react';

const PostList = ({ posts }) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>
    }

    return (
        <div>
          <h3 className="text-primary">{title}</h3>
          <div className="flex-row justify-space-between my-4">
            {posts &&
              posts.map((post) => (
                <div key={post._id} className="col-12 col-xl-6">
                  <div className="card mb-3">
                    <h4 className="card-header bg-dark text-light p-2 m-0">
                      {post.title} <br />
                      <span className="text-white" style={{ fontSize: '1rem' }}>
                        Content:
                        {post.content}
                      </span>
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
    );
};

export default PostList;