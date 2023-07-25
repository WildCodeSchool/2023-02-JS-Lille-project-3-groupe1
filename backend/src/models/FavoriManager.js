const AbstractManager = require("./AbstractManager");

class FavoriManager extends AbstractManager {
  constructor() {
    super({ table: "favori" });
  }

  insert(favori) {
    return this.database.query(
      `insert into ${this.table} (artworks_id, user_id) values (?, ?)`,
      [favori.artworks_id, favori.user_id]
    );
  }

  findbyuser(favori) {
    return this.database.query(
      `select * from  ${this.table} where user_id = ?`,
      [favori]
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
}

module.exports = FavoriManager;
