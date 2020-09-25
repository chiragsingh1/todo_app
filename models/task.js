const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    newTask: {
        type: String,
        required :true
    },
    category : {
        type :String,
        required: true
    },
    dueDate : {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;