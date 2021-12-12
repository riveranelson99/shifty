import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`

  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        # email
        # bio
        # workplaces
        # rate
        # employer
      }
    }
  }
`;


// export const ADD_POST = gql`
//   mutation addPost(postId: ID!, postTitle: String!, postContent: String!) {

//   }
// `;

// export const ADD_JOB = gql`
//   mutation addJob(jobId: ID!, jobTitle: String!, jobDescription: String!, jobRate: Int!, jobStartDate: String!, jobEndDate: String!) {

//   }
// `;

// export const EDIT_POST = gql`
//   mutation editPost(postId: ID!, content: String!) {

//   }
// `;

// export const EDIT_JOB = gql`
//   mutation editJob(jobId: ID!) {

//   }
// `;

// export const DELETE_POST = gql`
//   mutation deletePost(postId: ID!) {

//   }
// `;

// export const DELETE_JOB = gql`
//   mutation deleteJob(jobId: ID!) {
    
//   }
// `;