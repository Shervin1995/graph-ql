import { buildSchema } from 'graphql';
  
var schema = buildSchema(`

  type Contact {
    fname: String
    lname: String
  }

  input ContactInput { 
    fname: String!
    lname: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Friend {
    id: ID
    fname: String
    gender: Gender
    age: Int
    contacts: [Contact]
  }

  input FriendInput {
    id: ID
    fname: String
    gender: Gender
    age: Int
    contacts: [ContactInput]
  }


  type Query {
    getFriend(id: ID!): Friend
  }
  
  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`);


  //
  export default schema;