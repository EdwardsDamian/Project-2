const mongoose = require('../DB/connection.js');

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    grade: String
});

const UserCollection = mongoose.model("User", UserSchema);

function createUser (newUser) {
    return UserCollection.create(newUser);
}

function getUsers() {
    return UserCollection.find();
}


function getUserById(userId) {
    return UserCollection.findById(userId);
}

function updateUser(userId, user) {
    
    return UserCollection.updateOne({_id:userId}, user)
}

function deleteUser(userId) {
    return UserCollection.deleteOne({_id:userId})
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}