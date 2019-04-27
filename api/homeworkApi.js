const mongoose = require('../DB/connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId

const HomeworkSchema = mongoose.Schema({

    user: {type:ObjectId, ref:"User"},
    readingMinutes: Number,
    mathAssigned: Boolean,
    mathCompleted: Boolean
});

const HomeworkCollection = mongoose.model("Homework", HomeworkSchema);

function createHomework (homework) {
    return HomeworkCollection.create(homework);
}

function getHomeworkByUserId(userId) {
    return HomeworkCollection.findOne({user:userId})
}

function getHomework() {
        // .populate method used to reference objects in the user collection
    return HomeworkCollection.find().populate("user");
}

function getHomeworkById(homeworkId) {
    return HomeworkCollection.findById(homeworkId).populate("user");
}

function updateHomework(homeworkId, homework) {
    return HomeworkCollection.updateOne({_id:homeworkId}, homework).populate("user")
}

function deleteHomework (homeworkId) {
    return HomeworkCollection.findByIdAndDelete(homeworkId).populate("user");
}

module.exports = {
    createHomework,
    getHomeworkByUserId,
    getHomework,
    getHomeworkById,
    updateHomework,
    deleteHomework
}