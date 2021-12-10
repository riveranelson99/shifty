import { gql } from '@apollo/client';

export const QUERY_JOBS = gql`
  query getJobs($category: ID) {
    jobs(category: $category) {
      _id
      jobTitle
      description
      rate
      startDate
      endDate
      category {
        _id
      }
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
}`
  ;

export const QUERY_JOBS = gql`
  {
    products {
        _id
      jobTitle
      description
      rate
      startDate
      endDate
      category {
        _id
      }
    }
  }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  {
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
}`
  ;