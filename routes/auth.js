const express = require('express');
const passport = require('passport');
const sign = require("../config/controllers")
const router = express.Router();

const isAuthenticated = (req, res, next) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
      // If the user is authenticated, allow access to the next middleware or route handler
      return next();
    }
  
    // If the user is not authenticated, redirect or send an error response
    res.status(401).json({ message: 'Unauthorized' });
  };

router.post("/signup", sign)
router.post("/login", passport.authenticate("local"), (req,res) => {
    res.json({ message: 'Successfully logged in' });
})
router.get("/protected-route", isAuthenticated, (req,res) => {
    res.send("<h1>protected route access granted</h1>")
})
router.get('/logout', (req, res) => {
    // Call req.logout() with a callback function
    req.logout((err) => {
      if (err) {
        // Handle any errors that occur during logout
        console.error(err);
        return res.status(500).json({ message: 'Logout failed' });
      }
      
      // Optionally, you can clear the session to remove all session data
      req.session.destroy((err) => {
        if (err) {
          // Handle any errors that occur during session destruction
          console.error(err);
          return res.status(500).json({ message: 'Logout failed' });
        }
        
        // Redirect or send a response indicating successful logout
        res.json({ message: 'Logged out successfully' });
      });
    });
  });
  
module.exports = router