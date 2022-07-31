import mongoose from "mongoose";
const { Schema } = mongoose;

var reminderTemplate = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

var Reminder = mongoose.model("remindersTable", reminderTemplate);
export default Reminder;
