import { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } from 'graphql';
  


  //
  var fields = {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'worldllll';
      },
    },
    hello1: {
      type: GraphQLString,
      resolve() {
        return 'worldllll';
      },
    },
  }



  //
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields,
    }),
  });

  //
  export default schema;