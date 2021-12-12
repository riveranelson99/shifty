import { gql } from '@apollo/client';

export const QUERY_JOBS = gql`
  query allJobs {
    jobs {
      _id
      jobTitle
      description
      rate
      startDate
      endDate
    }
  }
`;

export const QUERY_SINGLE_JOB = gql`
  query singleJob($jobId: ID!) {
    job(jobId: $jobId) {
      _id
      jobTitle
      description
      rate
      startDate
      endDate
    }
  }
`;



export const QUERY_USER = gql`
  query getUsers($category: ID) {
      users(category: $category) {
          _id
          username
          email
          workplaces
          rate
          posts
          jobs
      }
  }`
  ;

export const QUERY_POST = gql`
query getPosts($category: ID) {
    postMessage(category: $category) {
        _id
        title
        content
        date
    }
  }
`;



export const QUERY_USERS = gql`
query allUsers{
  users {
    _id

    username
    email
    workplaces
    rate
    posts
    jobs
    }
}

`;

export const QUERY_POSTS = gql` 
  {
    _id
        title
        content
        date
  }
`;