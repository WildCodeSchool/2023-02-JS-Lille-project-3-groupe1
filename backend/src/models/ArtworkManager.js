const AbstractManager = require("./AbstractManager");

class ArtworksManager extends AbstractManager {
  constructor() {
    super({ table: "artworks" });
  }

  insert(artworks) {
    return this.database.query(
      `insert into ${this.table} (url,full_title,short_title,description,dimensions,technique,author,year_created,category,related_article) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        artworks.url,
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
        artworks.url,
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

  findArtworkIdByArtworkId(artworksId) {
    return this.database.query(
      `SELECT a.id
      FROM ${this.table} AS a
      INNER JOIN favori AS f ON a.id = f.artworks_id
      WHERE f.artworks_id = ?`,
      [artworksId]
    );
  }
}

module.exports = ArtworksManager;
