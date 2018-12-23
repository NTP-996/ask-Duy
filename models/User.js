const sequelize = require('../server').sequelize;
const Sequelize = require('../server').Sequelize;

const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        avatar: {
            type: STRING
        },
        date: {
            type: Sequelize.DATE,
            defaudefaultValue: Sequelize.NOW
        }
    });

sequelize.sync()
    .then(() => {
        console.log('User db and user table have been created')
    });

module.exports = User;