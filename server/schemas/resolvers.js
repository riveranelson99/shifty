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
    users: async () => {
      return await User.find();
    },
    user: async (parents, { userId }) => {
      return await User.findOne({ _id: userId });
    },
    posts: async () => {
      return await Post.find();
    },
    post: async (parents, { postId }) => {
      return await Post.findOne({ _id: postId });
    },
    jobs: async () => {
      return await Job.find();
    },
    job: async (parent, { jobId }) => {
      return await Job.findOne({ _id: jobId });
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
    addUser: async (parent, { username, email, password, bio, workplaces, rate }) => {
      const user = await User.create({ username, email, password, bio, workplaces, rate });
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { title, content }, context) => {
      if (context.user) {
        console.log('Before post creation.')
        const post = await Post.create({
          title,
          content,
          author: context.user.username,
        });
        console.log('Post post post creation');
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );
        console.log('Updated user');
        return post;
      }
      console.log('addPost resolver hit');
      throw new Error('Add post failed.');
    },
    addJob: async (parent, args, context) => {
      if (context.user) {
        return await Job.create(args)
      }
    },
    editPost: async (parent, { postId, content, date }, context) => {
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        {
          $set: {
            content: content,
            date: date
          },
        },
      );
      return updatedPost;
      // throw new AuthenticationError('You need to be logged in!');
    },
    editJob: async (parent, { jobId, description, date }, context) => {
      const updatedJob = await Post.findByIdAndUpdate(
        jobId,
        {
          $set: {
            description: description,
            date: date
          },
        },
      );
      return updatedJob;
      // throw new AuthenticationError('You need to be logged in!');
    },
    deletePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
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
          { $pull: { jobs: job._id } }
        );

        return job;

      }
      throw new AuthenticationError('You need to be logged in.');
    }
  },
};

module.exports = resolvers;