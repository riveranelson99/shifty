const db = require('./connection');
const { User, Post, Job } = require('../models');

db.once('open', async () => {

  //// POST SEEDING
  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
      title: 'Interesting tidbit',
      content: 'Did you know a margarita has different flavors',
      datePosted: '12/13/21',
    },
    {
      title: 'Did you know',
      content: 'Liquor is a liquid',
      datePosted: '12/09/21',
    },
    {
      title: 'Here\'s a great recipe to try',
      content: 'Add a bay leaf to blueberry vodka.  You\'re welcome!',
      datePosted: '12/10/21',
    },
    {
      title: 'Article',
      content: 'I read a great article on trying new flavor combinations.  If you have time, I recommend it.',
      datePosted: '12/01/21',
    },
    {
      title: 'Great experience',
      content: 'I worked a shift last night with Mack at Mattengas, and LOVED it.  Mack was so helpful getting me situated, and then trusted me to handle the shift.  I will go back anytime!',
      datePosted: 12/09/21,
    },
    {
      title: 'Steer clear',
      content: 'I picked up a shift at NorthEnd, and will never return.  The manager was very rude the entire shift, and didn\'t trust me to make a drink by myself.',
      datePosted: '12/05/21',
    },   
  ]);

  console.log('posts seeded');




  //// JOB SEEDING
  await Job.deleteMany();

  const jobs = await Job.insertMany([
    {
      jobName: 'Popup',
      description: 'Open bar at a family reunion.',
      rate: 35,
      datePosted: '12 / 12 / 21',
      startDate: '12 / 20 / 21',
      endDate: '12 / 20 / 21',
    },
    {
      jobName: 'Chilis',
      description: 'Bartending 4pm-12pm',
      rate: 15,
      datePosted: '12 / 9 / 21',
      startDate: '12 / 11 / 21',
      endDate: '12 / 14 / 21',
    },
    {
      jobName: 'Portillos',
      description: 'Christmas party with cash bar',
      rate: 60,
      datePosted: '12 / 07 / 21',
      startDate: '12 / 23 / 21',
      endDate: '12 / 24 / 21',
    },
    { 
      jobName: 'Eberly',
      description: 'Christmas party with cash bar',
      rate: 60,
      datePosted: '12 / 09 / 21',
      startDate: '12 / 23 / 21',
      endDate: '12 / 24 / 21',
    },
    {
      jobName: 'Cocktails and Culture',
      description: 'Popup at Museum of Science and Industry',
      rate: 55,
      datePosted: '12 / 01 / 21',
      startDate: '12 / 11 / 21',
      endDate: '12 / 11 /21'
    }
  ]);

  console.log('jobs seeded');




  // USER SEEDING
  await User.deleteMany();

  await User.insertMany([
    {
      username: 'larrylern',
      email: 'larrylernantino@test.com',
      password: 'password12345',
      bio: 'Bartending since the dinosaurs.  Pouring cocktails with flair and pizaz.',
      workplaces: [
        'Bar America, The Local Bar, On The Rocks'
      ],
      rate: 35,
      employer: true,
      posts: [
        {
          posts: [posts[0]._id, posts[4]._id, posts[5]._id]
        }
      ],
      jobs: [
        {
          jobs: [jobs[0]._id, jobs[1]._id]
        }
      ],
    },
    {
      username: 'marymastersbars',
      email: 'marymasterson@testmail.com',
      password: 'password12345',
      bio: 'LOOOOOOOVE mimosas and doing parties.  Let\'s have fun!',
      workplaces: 'Main Street Bar, Zombies Bar, Freelance',
      rate: 50,
      employer: false,
      posts: [
        {
          posts: [posts[1]._id, posts[2]._id,]
        }
      ],
    },
    {
      username: 'barninja',
      email: 'bartsimpson@test.com',
      password: 'password13579',
      bio: 'Beer conniseur.  Test me, I bet I\'ll pass.',
      workplaces: 'Moe\'s Pub',
      rate: 25,
      employer: false,
      posts: [
        {
          posts: [posts[5]._id]
        }
      ],
    },
    {
      username: 'Boss',
      email: 'stanleyyelnats@testing.com',
      password: 'password2468',
      bio: 'In need of good, honest people to help staff special events.',
      workplaces: 'Eberly, Special Events',
      rate: 31,
      employer: true,
      jobs: [
        {
          jobs: [jobs[2]._id, jobs[3]._id]
        }
      ],
    },
    {
      username: 'Joan Wick',
      email: 'joannie@testingemails.com',
      password: 'password54321',
      bio: 'Popups are my thing.  Any and every where.  Join my team.',
      workplaces: 'EventsToYou',
      rate: 30,
      employer: true,
      posts: [
        {
          posts: [posts[3]._id]
        }
      ],
      jobs: [
        {
          jobs: [jobs[4]._id]
        }
      ],
    },
  ]);

  console.log('users seeded');


  process.exit();
});