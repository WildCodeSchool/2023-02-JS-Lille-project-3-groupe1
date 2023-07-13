const AbstractManager = require("./AbstractManager");

class FavoriManager extends AbstractManager {
  constructor() {
    super({ table: "favori" });
  }

  insert(favori) {
    console.log("fav in insert => ", favori);
    return this.database.query(
      `insert into ${this.table} (artworks_id, user_id) values (?, ?)`,
      [favori.artworks_id, favori.user_id]
    );
  }

  remove(favori) {
    return this.database.query(
      `delete from ${this.table} where user_id = ? and artworks_id = ?`,
      [favori.user_id, favori.artworks_id]
    );
  }

  update(favori) {
    return this.database.query(
      `update ${this.table} set artworks_id = ? where user_id = ?`,
      [favori.artworks_id, favori.user_id]
    );
  }

  getFavoriteArtworks(userId, callback) {
    const sql = `
      SELECT artworks.*
      FROM artworks
      INNER JOIN favori ON artworks.id = favori.artworks_id
      WHERE favori.user_id = ?
    `;
    const params = [userId];

    // Send the SQL query to the database
    this.database.query(sql, params, (error, results) => {
      if (error) {
        callback(error);
        return;
      }

      // Map the results to an array of JavaScript objects
      const favoriteArtworks = results.map((row) => ({
        id: row.id,
        title: row.title,
        image: row.image,
        // Add more properties as needed
      }));

      callback(null, favoriteArtworks);
    });
  }
}

module.exports = FavoriManager;
