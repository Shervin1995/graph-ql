  
  
  
  //
  class Friend {
    constructor({id, fname, age, gender, contacts}) {
      this.id = id;
      this.fname = fname; 
      this.age = age; 
      this.gender = gender; 
      this.contacts = contacts; 
    }
  }
  
  // 
  var db = {};
  
  //
  var resolvers = {   
    createFriend: ({input}) => {
      var id = require('crypto').randomBytes(10).toString('hex');
      db = {id , ...input}
      return new Friend(db);
    }
  };

  export default resolvers;