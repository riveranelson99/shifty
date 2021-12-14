const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User { 
      _id: ID!
      username: String!
      email: String!
      password: String!
      bio: String!
      employer: Boolean
      workplaces: [String]
      rate: Int!
      posts: [Post]
      jobs: [Job]
  }

  type Post {
    _id: ID!
    title: String
    datePosted: String
    content: String!
    author: String,
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Job {
    _id: ID!
    jobTitle: String!
    description: String! 
    rate: Int!
    startDate: String!
    endDate: String!
  }

  type Auth {
    token: ID! 
    user: User
  }

  type Query {
    me: User
    users: [User]!
    user(userId: ID!): User
    posts: [Post]!
    post(postId: ID!): Post
    jobs: [Job]!
    job(jobId: ID!): Job
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(title: String, content: String!): Post
    addJob(jobTitle: String!, jobDescription: String!, rate: Int!, startDate: String!, endDate: String!): Job
    editPost(postId: ID!, content: String!): Post
    editJob(jobId: ID!): Job
    deletePost(postId: ID!): Post
    deleteJob(jobId: ID!): Job
  }
`;

module.exports = typeDefs;