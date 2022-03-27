import express from "express";
// import restify from "restify";
const { graphqlHTTP } = require('express-graphql');
import schema from "./schema";
  

// const app = restify.createServer();
const app = express();


// GET
app.get('/', graphqlHTTP({
    schema, 
    graphiql: true,
}));
 
// POST
app.post('/', graphqlHTTP({
    schema, 
    graphiql: false,
}));
 

 
//
app.listen(8080);