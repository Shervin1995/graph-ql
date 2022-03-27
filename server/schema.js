import { buildSchema } from 'graphql';
  
 
  //
  var schema = buildSchema(`

    type Email {
      email: String
    }

    type Friend {
      id: ID,
      fname: String,
      emails: [String]
      Emails: [Email]!
    }

    type Query {
      friend: Friend
    }
  `);
 

  //
  export default schema;