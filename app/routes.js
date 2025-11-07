module.exports = function(app, passport, db) {

  // normal routes ===============================================================
  
      // show the home page (will also have our login links)
      app.get('/', function(req, res) {
          res.render('index.ejs');
      });
  
      // PROFILE SECTION =========================
      app.get('/profile', isLoggedIn, function(req, res) {
          db.collection('songs').find().toArray((err, result) => {
            if (err) return console.log(err)
            res.render('profile.ejs', {
              user : req.user,
              songs: result
            })
          })
      });
  
      // LOGOUT ==============================
      app.get('/logout', function(req, res) {
          req.logout(() => {
            console.log('User has logged out!')
          });
          res.redirect('/');
      });
  
  // song board routes ===============================================================
  
      app.post('/songs', (req, res) => {
        db.collection('songs').save({name: req.body.name, msg: req.body.msg, ratings: [], averageRating: 0}, (err, result) => {
          if (err) return console.log(err)
          console.log('saved to database')
          res.redirect('/profile')
        })
      })
  
      app.put('/songs/rate', (req, res) => {
        db.collection('songs')
        .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
          $push: {
            ratings: req.body.rating
          }
        }, {
          sort: {_id: -1},
          upsert: false
        }, (err, result) => {
          if (err) return res.send(err)
          
          // Calculate new average rating
          db.collection('songs').findOne({name: req.body.name, msg: req.body.msg}, (err, song) => {
            if (err) return res.send(err)
            const avgRating = song.ratings.reduce((a, b) => a + b, 0) / song.ratings.length
            
            db.collection('songs').findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
              $set: { averageRating: avgRating }
            }, (err, result) => {
              if (err) return res.send(err)
              res.send(result)
            })
          })
        })
      })
  
      app.delete('/songs', (req, res) => {
        db.collection('songs').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
          if (err) return res.send(500, err)
          res.send('Song deleted!')
        })
      })
  
  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================
  
      // locally --------------------------------
          // LOGIN ===============================
          // show the login form
          app.get('/login', function(req, res) {
              res.render('login.ejs', { message: req.flash('loginMessage') });
          });
  
          // process the login form
          app.post('/login', passport.authenticate('local-login', {
              successRedirect : '/profile', // redirect to the secure profile section
              failureRedirect : '/login', // redirect back to the signup page if there is an error
              failureFlash : true // allow flash messages
          }));
  
          // SIGNUP =================================
          // show the signup form
          app.get('/signup', function(req, res) {
              res.render('signup.ejs', { message: req.flash('signupMessage') });
          });
  
          // process the signup form
          app.post('/signup', passport.authenticate('local-signup', {
              successRedirect : '/profile', // redirect to the secure profile section
              failureRedirect : '/signup', // redirect back to the signup page if there is an error
              failureFlash : true // allow flash messages
          }));
  
  // =============================================================================
  // UNLINK ACCOUNTS =============================================================
  // =============================================================================
  // used to unlink accounts. for social accounts, just remove the token
  // for local account, remove email and password
  // user account will stay active in case they want to reconnect in the future
  
      // local -----------------------------------
      app.get('/unlink/local', isLoggedIn, function(req, res) {
          var user            = req.user;
          user.local.email    = undefined;
          user.local.password = undefined;
          user.save(function(err) {
              res.redirect('/profile');
          });
      });
  
  };
  
  // route middleware to ensure user is logged in
  function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
          return next();
  
      res.redirect('/');
  }