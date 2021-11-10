module.exports = app => {
    const successController = require("../controllers/question.js");
    var router = require("express").Router();
    router.get("/getRandUs", successController.getRandUs);
    
    router.post("/saveAnswer", function(req, res, next) {
        successController.saveAnswer(req, res, next);
    });

    
    
    app.use('/success', router);
}