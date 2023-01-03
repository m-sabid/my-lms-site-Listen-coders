

const schedule = require('node-schedule');

function schedulePost() {
  // do something here, such as posting to a social media platform or sending an email
  console.log('Posting scheduled content');
}

// schedule the function to be executed on December 25th at 10:00 AM
const date = new Date(2022, 11, 25, 10, 0, 0);

const j = schedule.scheduleJob(date, schedulePost);

j.cancel();