// Create routes/index.js which imports and exports posts.js and 
// comments.js so they can be used with require('routes') in server.js

const posts = require('./posts');
const comments = require('./comments');

var i = 3;

let store= {};
store.accounts = [];

var Counter  = {
    count: 0,
    add: function() {
        Counter.count++;
    },
    remove: function() {
        Counter.count--;
    }
}

module.exports.myGet = posts.myGet;
module.exports.myPost = posts.myPost;
module.exports.myPut = posts.myPut;
module.exports.myDelete = posts.myDelete;

module.exports.commentsGet = comments.myGet;
module.exports.commentsPost = comments.myPost;
module.exports.commentsPut = comments.myPut;

module.exports.i = i;
module.exports.Counter = Counter;
module.exports.store = store;