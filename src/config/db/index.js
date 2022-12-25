const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog_dev');
        console.log('connect successfully');
    } catch (error) {
        console.log('error');
    }
}

module.exports = { connect };
