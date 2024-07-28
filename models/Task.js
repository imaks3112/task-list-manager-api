const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  taskDescription: { type: String, required: false },
  assginedTo: { type: String, required: false },
});

module.exports = mongoose.model('Task', TaskSchema);
