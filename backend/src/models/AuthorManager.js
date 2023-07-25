const AbstractManager = require("./AbstractManager");

class AuthorManager extends AbstractManager {
  constructor() {
    super({ table: "author" });
  }

  insert(author) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, dob, dod, nationality, description, avatarUrl) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        author.firstname,
        author.lastname,
        author.dob,
        author.dod,
        author.nationality,
        author.description,
        author.avatarUrl,
      ]
    );
  }

  update(author) {
    return this.database.query(
      `update ${this.table} set firstname = ?,lastname = ?, dob = ?, dod = ?, nationality = ?, description = ?, avatarUrl = ?, where id = ?`,
      [
        author.firstname,
        author.lastname,
        author.dob,
        author.dod,
        author.nationality,
        author.description,
        author.avatarUrl,
        author.id,
      ]
    );
  }
}

module.exports = AuthorManager;
