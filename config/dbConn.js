const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tokhy1:mo2412007@cluster0.5zfogwx.mongodb.net/todo_list?retryWrites=true&w=majority');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;