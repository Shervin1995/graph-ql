import express from "express";
const { graphqlHTTP } = require('express-graphql');
import schema from "./schema";
  
const app = express();
 
//
var root = {
    hello: () => {
        return "world!"
    }
}

// GET
app.get('/', graphqlHTTP({
    schema, 
    rootValue: root, 
    graphiql: true,
}));
 
// POST
app.post('/', graphqlHTTP({
    schema,  
    rootValue: root, 
    graphiql: false,
}));
 

 
//
app.listen(8080);