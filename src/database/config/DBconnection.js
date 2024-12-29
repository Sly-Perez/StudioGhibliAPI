const mongoose = require('mongoose');

const connectToDB = async()=>{
    try {
        const connectToDB = await mongoose.connect(process.env.CONNECTION_STRING);
    } catch (err) {
        console.log(`Error while connecting to Database: ${err}`);
        process.exit(1);
    }
};

module.exports = connectToDB;