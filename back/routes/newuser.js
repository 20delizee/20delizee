const auth = require('../middleware/auth');    
var router = require("express").Router();

module.exports = app => {

    const questionnaireController = require("../controllers/new_user.js")

    router.post("/saveUser", function(req, res, next){
        questionnaireController.saveUser(req, res, next);
    });
    router.get("/login", auth, function(req, res, next){
        questionnaireController.login(req, res, next)
    });

    router.get("/getUser", function(req, res, next){
        questionnaireController.getUser(req, res, next);
    });
    app.use('/success', router);
}
//{
  //  id_user:"20courtot",
    //nom:"coutot",
    //prenom:"lukas",
    //type_account:"collaborateur"
//}