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
    rate: Int! 
}

type Auth {
    token: ID! 
    user: User
}


type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(username: String! )
    addJob()
    editPost()
    editJob()
    deletePost()
    deleteJob()
}

`;

module.exports = typeDefs