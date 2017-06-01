
var mongoose = require('mongoose');
var settings = require('./db/settings.js');
var db = mongoose.connect(settings.URL);