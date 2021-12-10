const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User { 
    _id: ID!
    username: String!
    email: String 
    workplaces: String
    rate: Int!
    posts: [Post]
    jobs: [Job]
  }


type Post {
    _id: ID!
    title: String!
    content: String! 
    date: String
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
    user(username: String!): User
    posts: [Post]!
    post(postId: ID!): Post
    jobs: [Job]!
    job(jobId: ID!): Job
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postId: ID!, postTitle: String!, postContent: String!): User
    addJob(jobId: ID!, jobTitle: String!, jobDescription: String!, jobRate: Int!, jobStartDate: String!, jobEndDate: String!): User
    editPost(postId: ID!, content: String!): Post
    editJob(jobId: ID!): Job
    deletePost(postId: ID!): Post
    deleteJob(jobId: ID!): Job
  }
`;

module.exports = typeDefs