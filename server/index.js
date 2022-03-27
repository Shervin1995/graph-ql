import express from 'express' 
import { graphqlHTTP } from 'express-graphql'

import schema from './schema'
import resolvers from './resolvers';
const rootValue = resolvers

var app = express();


//
app.get('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

app.post('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: false,
}));


//
app.listen(4000);