const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// module.exports = (sequelize, DataTypes) =>
// sequelize.define('User', {
//     email: {
//         type: DataTypes.STRING,
//         unique: true
//     },
//     password: DataTypes.STRING
// })

// This function is to provide a hash for the password (encrypt it)
function hashPassword (user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return;
    }

    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
        user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
    },
    password: DataTypes.STRING
    }, {
        hooks: {
            // beforeCreate: hashPassword,
            // beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    // Compare password looks does not work properly with hashing. Recheck 40 min - 45 min video part 3.
    User.prototype.comparePassword = function (password) { 
        return bcrypt.compareAsync(password, this.password)
    }
    
    return User
}