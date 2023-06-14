const AbstractManager = require("./AbstractManager");

class ArtworksManager extends AbstractManager {
  constructor() {
    super({ table: "artworks" });
  }

  insert(artworks) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      artworks.title,
    ]);
  }

  update(artworks) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [artworks.title, artworks.id]
    );
  }
}

module.exports = ArtworksManager;
