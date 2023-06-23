const AbstractManager = require("./AbstractManager");

class ArtworksManager extends AbstractManager {
  constructor() {
    super({ table: "artworks" });
  }

  insert(artworks) {
    return this.database.query(
      `insert into ${this.table} (url,full_title,short_title,description,dimensions,technique,year_created,author_id, category,related_article, img_ref) values (?, ?, ?, ?, ?, ?, ?, ?,?,?, ?)`,
      [
        artworks.url,
        artworks.full_title,
        artworks.short_title,
        artworks.description,
        artworks.dimensions,
        artworks.technique,
        artworks.year_created,
        artworks.author_id,
        artworks.category,
        artworks.related_article,
        artworks.img_ref,
      ]
    );
  }

  update(artworks) {
    return this.database.query(
      `update ${this.table} set url = ?,full_title = ?,short_title = ?,description = ?,dimensions = ?,technique = ?, year_created = ?, author_id = ?, category = ?,related_article = ?, img_ref=? where id = ?`,
      [
        artworks.url,
        artworks.full_title,
        artworks.short_title,
        artworks.description,
        artworks.dimensions,
        artworks.technique,
        artworks.year_created,
        artworks.author_id,
        artworks.category,
        artworks.related_article,
        artworks.img_ref,
        artworks.id,
      ]
    );
  }
}

module.exports = ArtworksManager;
