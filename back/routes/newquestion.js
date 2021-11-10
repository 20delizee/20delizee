module.exports = app => {
    const questionController = require("../controllers/new_question.js")
    var router = require("express").Router();

    router.post("/saveQuestion", function(req, res, next){
        questionController.saveQuestion(req, res, next);
    });
    app.use('/success', router);
}
