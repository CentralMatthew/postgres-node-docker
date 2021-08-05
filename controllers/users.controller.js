const db = require('../dataBase/PostgreSQL').getInstance();

module.exports = {
  getUsers: async (req, res, next) => {
    const Users = db.getModel('Users');
    try {
      const users = await Users.findAll()
      res.json(users);
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const Users = db.getModel('Users');

      const newUser = await Users.create(req.body);

      res.json(newUser);
    } catch (e) {
      next(e);
    }
  },
};
