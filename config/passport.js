const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const User = require("../model/User")

// This function will be exported and called in server.js
module.exports = async (passport) => {
    // Configure the LocalStrategy for Passport
    passport.use(
      new LocalStrategy(async (username, password, done) => {
        // Implement your authentication logic here
        // You can query the database or perform any other necessary checks
        // Once authentication is successful, call the done() function
        // with the user object as the second parameter
        // e.g., done(null, user);
  
        // Example using a hardcoded user for demonstration purposes

        const user = await User.findOne({username})

        if(!user){
            return done(null, false, { message: 'user doesnt exist' });
        }
  
        // Hash the provided password using crypto and compare it to the stored hash
        const hash = crypto.createHash('sha256').update(password).digest('hex');
        if (hash !== user.password) {
          return done(null, false, { message: 'Incorrect password' });
        }
  
        return done(null, user);
      })
    );
  
    // Serialize and deserialize user instances
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });
  
    passport.deserializeUser(async (id, done) => {
      // Implement your user retrieval logic here
      // You might want to fetch the user from the database based on the provided id
      // Once the user is retrieved, call the done() function with the user object
      // e.g., done(null, user);
  
      // Example using the hardcoded user from above
      const user = await User.findById(id)
  
      done(null, user);
    });
  };