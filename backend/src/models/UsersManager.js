const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (name, mail, hashedPassword, admin) values (?, ?, ?, ?)`,
      [user.name, user.mail, user.hashedPassword, user.admin]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set name = ?, mail= ?, hashedPassword=?, admin=? where id = ?`,
      [user.name, user.mail, user.hashedPassword, user.admin, user.id]
    );
  }

  login(user) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE mail = ?`, [
      user.mail,
    ]);
  }
}
//login(mail, hashedPassword) {
//     const table = "user";

//     const query = `SELECT * FROM ${table} WHERE mail = ? AND hashedPassword = ?`;
//     const values = [mail, hashedPassword];

//     return this.database.query(query, values);
//   }
// }
module.exports = UsersManager;
