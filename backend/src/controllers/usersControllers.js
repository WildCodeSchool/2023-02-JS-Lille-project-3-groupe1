const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user

    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// ...

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const user = req.body;

  models.user
    .login(user)
    .then(([users]) => {
      if (users.length > 0) {
        [req.user] = users;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from the database");
    });
};
// const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
//   const { mail, hashedPassword } = req.body;

//   models.user
//     .login(mail, hashedPassword)
//     .then((results) => {
//       if (results.length > 0) {
//         req.user = {
//           mail: results[0].mail,
//           hashedPassword: results[0].hashedPassword,
//         };
//         next();
//       } else {
//         res.sendStatus(401);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Error retrieving data from the database");
//     });
// };

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getUserByEmailWithPasswordAndPassToNext,
};
