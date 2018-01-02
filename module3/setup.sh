# Change user to /data/db
sudo chown ubuntu:ubuntu -R /data/db

# Execute mongod
mongod -f /etc/mongodb.conf 

# Another terminal
mongo

# Repair 
mongod --dbpath /data/db --repair