const db = require('./connection');
const { User, Post, Job } = require('../models');

db.once('open', async () => {
  await Job.deletMany();

  const jobs = await Job.insertMany([
    { name: 'Popup' },
    { name: 'Chilis' },
    { name: 'Portillos' },
    { name: 'Eberly' },
    { name: 'Cocktails and Culture'}
  ]);

  console.log('jobs seeded');

  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
      name: 'job name 1',
      description: 'prohibition style party',
      dates: '12/13/21-12/15/21',
      rate: 1000,
      job: jobs[0]._id
    },
    {
      name: 'job name 2',
      description: 'Family reunion',
      dates: '12/20/21',
      rate: 500,
      job: jobs[3]._id
    },
    {
      name: 'job name 3',
      description: 'Northwestern University Christmas party',
      dates: '12/23/21',
      rate: 1500,
      job: jobs[2]._id
    },
    {
      name: 'job name 4',
      description: 'Museum of Science and Industry',
      dates: '12/20/21',
      rate: 2348,
      job: jobs[4]._id
    },
  ]);

  console.log('posts seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Larry',
    lastName: 'Lernantino',
    email: 'larrylernantino@test.com',
    password: 'password12345',
    employer: true,
    posts: [
      {
        posts: [posts[0]._id, posts[4]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Mary',
    lastName: 'Masterson',
    email: 'marymasterson@testmail.com',
    password: 'password12345',
    employer: true,
    posts: [
      {
        posts: [posts[1]._id, posts[2]._id, posts[3]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Jack',
    lastName: 'Andjill',
    email: 'jackandjill@testing.com',
    password: 'password98765',
    employer: false,
    jobs: [
      {
        jobs: [jobs[1]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});