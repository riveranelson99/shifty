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
        email
        bio
        workplaces
        rate
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String, $content: String!) {
    addPost(title: $title, content: $content) {
      _id
      title
      content
      datePosted
      # comments {
      #   _id
      #   commentText
      # }
    }
  }
`

export const ADD_JOB = gql`
  mutation addJob($jobTitle: String!, $description: String!, $rate: Int!, $startDate: String!, $endDate: String!) {
    addJob(jobTitle: $jobTitle, description: $description, rate: $rate, startDate: $startDate, endDate: $endDate) {
      _id
      jobTitle
      description
      rate
      startDate
      endDate
    }
  }
`;

// export const EDIT_POST = gql`
//   mutation editPost(postId: ID!, content: String!) {

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