const db = require('../models');
const question = db.question;

exports.saveQuestion = (req, res, next) => {
    // Validation de la requête
    // Création de l'objet
    var questions = new question(req.body);
    // Sauvegarde de l'objet dans la base de données
    questions
        .save(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Erreur | Impossible de créer l'objet Tutorial"
            });
        });
}