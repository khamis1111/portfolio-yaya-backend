const mongoose = require("mongoose");

const database = () => mongoose.connect(process.env.MONGO_DB_URL)
    .then(res => console.log(`Database Connected ${res.connection.name}`))

module.exports = database