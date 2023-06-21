LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcryptjs");

// let User = require("../models/Users");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      function (email, password, done) {
        User.findOne(
          {
            email: email,
          },
          function (err, user) {
            if (err) {
              return done(err);
            }
            if (!user) {
              return done(null, false, {
                message: "Incorrect email.",
              });
            }

            bcrypt.compare(password, user.password, function (err, isMatch) {
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {
                //  req.flash("error_msg", "Votre lien n est pas valide ou à expiré");
                  message: "Password USER Incorrect",
                });
              }
            });
          }
        );
      }
    )
  );

  passport.serializeUser(function (user, done) {
    return done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      return done(err, user);
    });
  });
};
