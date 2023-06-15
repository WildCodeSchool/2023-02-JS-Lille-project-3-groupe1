const AbstractManager = require("./AbstractManager");

class ArtworksManager extends AbstractManager {
  constructor() {
    super({ table: "artworks" });
  }

  insert(artworks) {
    return this.database.query(
      `insert into ${this.table} (url,full_title,short_title,description,dimensions,technique,author,year_created,category,related_article) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        artworks.full_title,
        artworks.short_title,
        artworks.description,
        artworks.dimensions,
        artworks.technique,
        artworks.author,
        artworks.year_created,
        artworks.category,
        artworks.related_article,
      ]
    );
  }

  update(artworks) {
    return this.database.query(
      `update ${this.table} set url = ?,full_title = ?,short_title = ?,description = ?,dimensions = ?,technique = ?,author = ?,year_created = ?,category = ?,related_article = ?, where id = ?`,
      [
        artworks.full_title,
        artworks.short_title,
        artworks.description,
        artworks.dimensions,
        artworks.technique,
        artworks.author,
        artworks.year_created,
        artworks.category,
        artworks.related_article,
        artworks.id,
      ]
    );
  }
}

module.exports = ArtworksManager;
