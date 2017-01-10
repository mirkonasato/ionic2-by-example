const Database = require('better-sqlite3');

class ExpenseService {

  constructor(path) {
    this.db = new Database(path);
  }

  getUser(username) {
    const select = `SELECT id, username, password FROM users WHERE username = :username`;
    return this.db.prepare(select).get({username: username});  
  }

  getExpense(userId, id) {
    const select = `
      SELECT id, date, amount, category, description
      FROM expenses
      WHERE id = :id AND user = :userId
    `;
    return this.db.prepare(select).get({id: id, userId: userId});
  }

  getExpenses(userId) {
    const select = `
      SELECT id, date, amount, category, description
      FROM expenses
      WHERE user = :userId
    `;
    return this.db.prepare(select).all({userId: userId});
  }

  createExpense(userId, expense) {
    const insert = `
      INSERT INTO expenses (id, user, date, amount, category, description)
      VALUES (:id, :userId, :date, :amount, :category, :description)
    `;
    const params = Object.assign({userId: userId}, expense);
    return this.db.prepare(insert).run(params);
  }

  updateExpense(userId, expense) {
    const update = `
      UPDATE expenses
      SET date = :date, amount = :amount, category = :category, description = :description
      WHERE id = :id AND user = :userId
    `;
    const params = Object.assign({userId: userId}, expense);
    return this.db.prepare(update).run(params);
  }

  deleteExpense(userId, id) {
    const deleteSql = `DELETE FROM expenses WHERE id = :id AND user = :userId`;
    return this.db.prepare(deleteSql).run({id: id, userId: userId});
  }

}

module.exports = ExpenseService;
