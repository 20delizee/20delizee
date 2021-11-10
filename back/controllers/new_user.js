const db = require('../models');

const User = db.user;

exports.login = (req, res, next) => {
  User.findOne({ id_user: req.body.id_user })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            id_user: user.id_user,
            token: jwt.sign(
              { id_user: user.id_user },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Create and Save a new Tutorial
exports.saveUser = (req, res, next) => {
  // Validation de la requête 

  var user = new User(req.body);
  // Sauvegarde de l'objet dans la base de données
  user.save(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Erreur | Impossible de créer l'objet Tutorial"
      });
    });
};

// Retrieve all Tutorials from the database.
exports.getUser = (req, res) => {
  User.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Erreur | Impossible de récupérer les objets Tutorial via bdd "
      });
    });
};
