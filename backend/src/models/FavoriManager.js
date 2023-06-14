const AbstractManager = require("./AbstractManager");

class FavoriManager extends AbstractManager {
  constructor() {
    super({ table: "favori" });
  }

  insert(favori) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      favori.title,
    ]);
  }

  update(favori) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [favori.title, favori.id]
    );
  }
}

module.exports = FavoriManager;
