#!/bin/sh

# First delete.js is executed to delete all documents from db
node delete.js

# Then, migration is executed to insert in db
# batch is the size of the batch, that determinates how many documents are inserted in each task
batch=100

node migration.js $((batch))

