const { gql } = require('apollo-server-express');
// brings in graph ql 
const typeDefs = gql`
type User { 
    _id: ID!
    username: String!
    email: String 
    workplaces: String
    rate: Integer! 
}


type Post {
    _id: ID!
    title: String!
    content: String! 
    date: String!
}

type Job {
    _id: ID!
    jobTitle: String!
    description: String! 
    rate: Number!
    startDate: String!
    endDate: String!
}

type Auth {
    token: ID! 
    user: User
}


type Query {
    me: User
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
    addJob(jobId: ID!, jobTitle: String!, jobDescription: String!, jobRate: Number!, jobStartDate: String!, jobEndDate: String!): User
    editPost()
    editJob()
    deletePost()
    deleteJob()
}

`;

module.exports = typeDefs