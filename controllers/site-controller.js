const User = require('../models/user-model');
const passport = require('passport');


module.exports = {
    index: (req, res) => {
        res.render('pages/index');
},
   login: (req, res) => {
    res.render('pages/login');
},
login_post: (req, res) => {
    const {username, password} = req.body;
    const user = new User ({
        username: username,
        password: password
    })
    req.login(user, (error) => {
      if (error) {
        console.log(`The error at login is: ${error}`);
      } else {
        passport.authenticate('local')(req, res, () => {
          res.redirect('/profile');
        });
      };
   });
},
create: (req, res) => {
    res.render('pages/create');
},
create_post: (req, res) => {
    const {username, password} = req.body;
    User.register({username: username}, password, (error, user) => {
        if(error) {
            console.log(`The error at register is: ${error}`);
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/profile');
            });
        }
    });
},
google_get: passport.authenticate('google', {
    scope: ['openid', 'profile', 'email']
}),
google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res) {
        res.redirect('/profile');
    }
],
logout: (req, res) => {
    req.logout(function(error) {
        if(error) {
            return error 
         } else {
            res.redirect('/');
        }
    });
    
},
    profile: (req, res) => {
        if (req.isAuthenticated()) {
        res.render('pages/profile');
        } else {
            res.redirect('/login');
        }
        //possible:here will be a varaible i.e maps: data
    },
   maps: (req, res) => {
    res.render('pages/maps');
},

   about: (req, res) => {
    res.render('pages/about');
},
contact: (req, res) => {
    res.render('pages/contact');
},
}

