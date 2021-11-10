const db = require('../models');
const questionnaire = db.questionnaire;
const Answer = db.answers;

var userList = {};

exports.create = (req, res) =>{
    question.save(question)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
};



exports.getRandUs = (req, res) => {
    questionnaire.find()
            .then(data => {
              console.log(data)
              userList = data;
          })
          .catch(err => {
              res.status(500).send({
                  message: err.message || "Il y un problème avec la reception des utilisateur."
              });
          });
        console.log(userList)
        res.send(userList)
    
  }


exports.saveAnswer = (req, res, next) => {
    // Validation de la requête
    if (!req.body.answer_content ) {
        res.status(400).send({ message: "Le contenu ne peux pas être vide" });
    return;
    }

    // Création de l'objet
    const ans = new Answer({
        id_questions: req.body.questions,
        answer_content: req.body.answer_content 
    });

    // Sauvegarde de l'objet dans la base de données
    ans
        .save(ans)
        .then(data => {
           res.send(data);
        })
        .catch(err => {
            res.status(500).send({
               message: err.message || "Erreur | Impossible de créer l'objet Tutorial"
           });
    });
}