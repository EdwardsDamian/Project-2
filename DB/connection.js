const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/Project-2";

// Connect to database - enables to use the mongo db created by heroku once you deploy
if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
}   else {
    mongoose.connect(connectionString, {useNewUrlParser: true})
}
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });

module.exports = mongoose;