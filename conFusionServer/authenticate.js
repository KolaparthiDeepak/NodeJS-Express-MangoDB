var passport = require('passport');
var LocalStatergy = require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new LocalStatergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());