import { buildSchema } from 'graphql';
  
 
  //
  var schema = buildSchema(`
    type Email {
      email: String
    }

    type Friend {
      id: ID
      fname: String
      email: String
    }

    type Friendput {
      id: ID
      fname: String!
      email: String 
    }
 

    type Query {
      friend: Friend
    }

    type Mutation {
      createFriend(friendinfo: Friendput): Friend
    }`);
 

  //
  export default schema;