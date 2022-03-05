//Import the mongoose package to create the database connection
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/portfolio-connect`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;