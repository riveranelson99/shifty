const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Job } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parents, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('Cannot find a user with this id!');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Cannot find this user');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong password!');
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // editPost: async (parent, { postId }, context) => {
    //   if (context.user) {
    //     const updatedPost = await Post.findByIdAndUpdate(
    //       { _id: context.post._id },
    //       {
    //         $set: {
    //           description: postId
    //         },
    //       },
    //     );
    //     return updatedPost;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    deletePost: async (parent, { postId }, context) => {
        if (context.user) {
            const post = await Post.findOneAndDelete({
                _id: postId,
                postAuthor: context.user.username,
            });

            await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { posts: post._id }}
            );

            return post;
            
        }
        throw new AuthenticationError('You need to be logged in.');
    },
    deleteJob: async (parent, { jobId }, context) => {
        if (context.user) {
            const job = await Job.findOneAndDelete({
                _id: jobId,
                jobAuthor: context.user.username,
            });

            await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { jobs: job._id }}
            );

            return job;
            
        }
        throw new AuthenticationError('You need to be logged in.');
    }
  },
};

module.exports = resolvers;