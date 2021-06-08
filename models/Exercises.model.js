const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const contentSchema = new Schema({
  level: {
    type: String,
  },
  title: {
    type: String,
  },
  questionText: {
    type: String,
  },
  answerOptions: [
    {
      answerText: {
        type: String,
      },
      isCorrect: {
        type: Boolean,
      },
    },
  ],
});

const Content = model("Content", contentSchema);

module.exports = Content;
