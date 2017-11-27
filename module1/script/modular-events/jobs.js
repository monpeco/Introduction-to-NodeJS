"use strict";

const EventEmitter = require('events');
class Job extends EventEmitter{
    constructor(ops){
        super(ops);
        this.on('start', ()=> {
            this.process();
        });
        
        this.on('yield', ()=> {
            this.passing();
        });
    }
    process(){
        setTimeout(()=> {
            //emullate the delay of the job - async
            this.emit('done', {completedOn: new Date()}
            ,700)
        });
    }
    passing(){
        console.log("This job is passing");
    }
}


module.exports = Job;