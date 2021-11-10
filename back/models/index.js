// Appel de la conffiguration de la base de données et de Mongoose
const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

// Initialisations de Mongoose
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.matiere = require("../models/matiere.js")(mongoose);
db.answers = require("../models/answer.js")(mongoose);
db.question = require("../models/question.js")(mongoose);
db.user = require("../models/user.js")(mongoose);



module.exports = db;

