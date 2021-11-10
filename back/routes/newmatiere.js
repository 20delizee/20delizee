module.exports = app => {
    const questionnaireController = require("../controllers/new_matiere.js")
    var router = require("express").Router();

    router.post("/saveMatiere", function(req, res, next){
        questionnaireController.saveMatiere(req, res, next);
    });
    router.get("/getMatiere", questionnaireController.getMatiere);
    
    app.use('/success', router);
}