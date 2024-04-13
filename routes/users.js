const User = require('../models/user');

const getUsers = async (req, res) => {
  try {
    const { data } = await axios.get('https://randomuser.me/api/?results=10');
    const users = data.results.map(user => new User(user.name.first, user.email, moment().format('YYYY-MM-DD HH:mm:ss')));
    res.json(users);
  } catch (error) {
    console.error(chalk.red('Error al consultar usuarios:', error));
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { getUsers };