const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/Project-2";

//newUrlParser to disable deprecation warning
mongoose.connect(connectionString, {useNewUrlParser: true})
    .then(() => {
        console.log("connected to mongo at: " + connectionString);
    });
module.exports = mongoose;