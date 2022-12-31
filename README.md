# Rest node mongo app

### About
- simple reset app use node.js and mongo, it's for a simple category module.

### Used Technologies:
- node.js
- express.js
- nodemon
- mongoose
- morgan
- slugify
- express-async-handler
- express-validator
- dotenv

### Usage
- Follow the installation instructions then import the 
reset-node-mongo-postman_collection.json file to your API development platform(postman, insomnia, ..)

### Installation
- Connect to mongo shell and run`use rest_node_app` to create database.
- To create user & password for the created database run `db.createUser({user:"hello_admin", pwd:"hello123", roles:[{role: "readWrite", db:"rest_node_app"}]})`
- `cp .env.example .env`
- `npm i && npm run dev`



