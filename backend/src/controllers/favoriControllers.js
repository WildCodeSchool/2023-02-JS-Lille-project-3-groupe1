const models = require("../models");

const browse = (req, res) => {
  models.favori
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const getFavoriteArtworks = (userId, callback) => {
//   const sql = `
//     SELECT artworks.*
//     FROM artworks
//     INNER JOIN favori ON artworks.id = favori.artworks_id
//     WHERE favori.user_id = ?
//   `;
//   const params = [userId];

//   // Send the SQL query to the database
//   this.database.query(sql, params, (error, results) => {
//     if (error) {
//       callback(error);
//       return;
//     }

//     // Map the results to an array of JavaScript objects
//     const favoriteArtworks = results.map((row) => ({
//       id: row.id,
//       title: row.title,
//       image: row.url,
//       // Add more properties as needed
//     }));
//     res.json(favoriteArtworks);
//   });
// };

const read = (req, res) => {
  models.favori
    .findbyuser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const edit = (req, res) => {
  const favori = req.body;

  // TODO validations (length, format...)

  favori.id = parseInt(req.params.id, 10);

  models.favori
    .update(favori)
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
  const favori = req.body;

  // TODO validations (length, format...)

  models.favori
    .insert(favori)
    .then(([result]) => {
      res.location(`/favori/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const favori = req.body;
  models.favori
    .remove(favori)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(favori).status(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
