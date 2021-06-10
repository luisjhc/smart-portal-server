const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const contentSchema = new Schema({
  level: {
    type: String,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  video: {
    type: String,
  },
  quiz: [
    {
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
    },
  ],
  audioSource: {
    type: String,
  },
  audioQuiz: [
    {
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
    },
  ],
});

const Content = model("Content", contentSchema);

module.exports = Content;
