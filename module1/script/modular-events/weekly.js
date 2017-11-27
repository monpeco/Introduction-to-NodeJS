"use strict";
let Job = require('./jobs.js');
let job = new Job();

job.on('done', (details)=> {
   console.log("Weekly email job was completed at", details.completedOn); 
});

job.emit('start');