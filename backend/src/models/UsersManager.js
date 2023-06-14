const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (name, mail, hashedPassword, admin) values (?, ?, ?, ?)`,
      [users.name, users.mail, users.hashedPassword, users.admin]
    );
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set name = ?, mail= ?, hashedPassword=?, admin=? where id = ?`,
      [users.name, users.mail, users.hashedPassword, users.admin, users.id]
    );
  }
}

module.exports = UsersManager;
