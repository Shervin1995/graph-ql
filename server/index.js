import express from "express";
const { graphqlHTTP } = require('express-graphql');
import schema from "./schema";
  
const app = express();
 
//
var root = {
    friend: () => {
        return {
            id: 23,
            fname: "world!",
            emails: [
                "me@me.com",
                "me2@me.com",
            ],
            Emails: [{
                email: "me@me.com"
            },{
                email: "me@me2.com"
            }]
        }
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