import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_JOB } from '../../utils/mutations';
import { QUERY_JOBS, Query_JOBS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const JobForm = () => {
 const [formState, setJobText] = useState({
  jobTitle: '',
  description: '',
  rate: '',
  startDate: '',
  endDate: '',
 });

 const [characterCount, setCharacterCount] = useState(0);

 const [addJob, { error }] = useMutation(ADD_JOB, {
  update(cache, { data: { addJob } }) {
   try {
    const { jobs } = cache.readQuery({ query: QUERY_JOBS });

    cache.writeQuery({
     query: QUERY_JOBS,
     data: { jobs: [addJob, ...jobs] },
    });
   } catch (e) {
    console.error(e);

   }
  }
 });

 const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);

  try {
   const { data } = await addJob({
    variables: {
     ...formState,
     author: Auth.getUser().data.username,
    },
   });

   setJobText('');
  } catch (err) {
   console.error(err);
  }
 };

 const handleChange = (event) => {
  const { name, value } = event.target;
  setJobText({
   ...formState,
   [name]: value,
  });
 };

 return (
  <div>
   <h3>
    Post your job and find the talent you need!
   </h3>
   <div>
    {Auth.loggedIn() ? (
     <>
    <p className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''}`}>
     Character Count: {characterCount}/280
    </p>
    <form className="flex-row justify-center justify-space-between-md align-center" onSubmit={handleFormSubmit}>
      <div className="col-12 col-lg-9">
        <textarea
         name="jobTitle"
         placeholder="Job Title"
         value={formState.jobTitle}
         className="form-input w-100"
         style={{ lineHeight: '1.5', resize: 'vertical' }}
         onChange={handleChange}
         ></textarea>
      </div>
      <div className="col-12 col-lg-9">
       <textarea
       name="description"
       placeholder="Describe your job"
       value={formState.description}
       className="form-input w-100"
       style={{ lineHeight: '1.5', resize: 'vertical' }}
       onChange={handleChange}
       ></textarea>
      </div>
      <div className="col-12 col-lg-9">
       <textarea
       name="rate"
       placeholder="What are you willing to pay?"
       value={formState.rate}
       className="form-input w-100"
       style={{ lineHeight: '1.5', resize: 'vertical' }}
       onChange={handleChange}
       ></textarea>
      </div>
      <div className="col-12 col-lg-9">
       <textarea
       name="startDate"
       placeholder="When will this job begin?"
       value={formState.startDate}
       className="form-input w-100"
       style={{ lineHeight: '1.5', resize: 'vertical' }}
       onChange={handleChange}
       ></textarea>
      </div>
      <div className="col-12 col-lg-9">
       <textarea
        name="endDate"
        placeholder="When will this job end?"
        value={formState.endDate}
        className="form-input w-100"
        style={{ lineHeight: '1.5', resize: 'vertical' }}
        onChange={handleChange}
       ></textarea>
      </div>
      <div className="col-12 col-lg-3">
       <button className="btn btn-primary btn-block py-3" type="submit">
        Add Job
       </button>
      </div>
      {error && (
       <div className="col-12 my-3 bg-danger text-white p-3">
        {error.message}
       </div>
      )}
    </form>
    </>
    ) : (
     <p>
      You need to be logged in to post your hob.  Please{' '}<Link to="/login">login</Link> or <Link to="/signup">signup</Link>
     </p>
    )}
   </div>
  </div>
 )
};

export default JobForm;
