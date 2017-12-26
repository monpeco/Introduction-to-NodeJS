#!/usr/bin/env

curl -X POST -d '{"name" : "Top 10 ES6 Features every Web Developer must know", "url" : "https://webapplog.com/es6", "text" : "This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation."}' localhost:8080/posts -i -H "content-type: application/json"
curl -X POST -d '{"name" : "     This is a comment!!!! !!     "} ' localhost:8080/posts/0/comments -i -H "content-type: application/json"
curl -X POST -d '{"name" : "     Another commennt wooo!!      "} ' localhost:8080/posts/0/comments -i -H "content-type: application/json"

curl -X POST -d '{"name" : "This lab will solidify your Express skills", "url" : "https://courses.edx.org", "text" : "Most often, servers have complex logic and business relations."}' localhost:8080/posts -i -H "content-type: application/json"
curl -X POST -d '{"name" : "    This is a on the second post!!     "} ' localhost:8080/posts/1/comments -i -H "content-type: application/json"
curl -X POST -d '{"name" : "    Another commento on second!!       "} ' localhost:8080/posts/1/comments -i -H "content-type: application/json"

curl -X PUT -d '{"name": "    new new new  !!  "}' localhost:8080/posts/1/comments/0 -i -H "content-type: application/json"

curl -X DELETE localhost:8080/posts/1/comments/1

curl -X DELETE localhost:8080/posts/1

echo ""
curl localhost:8080/posts
echo ""

