const mongoose = require('../DB/connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId

const ActivitiesSchema = mongoose.Schema({
    user: {type:ObjectId, ref:"User"},
    sunday: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String
});

const ActivitiesCollection = mongoose.model("Activities", ActivitiesSchema);

function createActivities (activities) {
    return ActivitiesCollection.create(activities);
}

function getActivitiesByUserId (userId) {
    console.log("userId", userId)
    return ActivitiesCollection.findOne({user:userId}).populate("user")
}


function getActivities() {
        // .populate method used to reference objects in the user collection
    return ActivitiesCollection.find().populate("user");
}

function getActivitiesById(activitiesId) {
    return ActivitiesCollection.findById(activitiesId).populate("user");
}

function updateActivities(activitiesId, activities) {
    return ActivitiesCollection.updateOne({_id:activitiesId}, activities).populate("user")
}

function deleteActivities (activitiesId) {
    return ActivitiesCollection.findByIdAndDelete(activitiesId).populate("user");
}

module.exports = {
    createActivities,
    getActivitiesByUserId,
    getActivities,
    getActivitiesById,
    updateActivities,
    deleteActivities
}