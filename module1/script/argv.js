// node argv.js first second third fourth

process.argv.forEach((val, index) => {
    console.log("process.argv[" + index + "]: " + val);
});


/*
Output:

process.argv[0]: /home/ubuntu/.nvm/versions/node/v4.4.0/bin/node
process.argv[1]: /home/ubuntu/workspace/intro-node/module1/script/argv.js
process.argv[2]: first
process.argv[3]: second
process.argv[4]: third
process.argv[5]: fourth
*/