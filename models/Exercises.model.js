const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const exercisesSchema = new Schema({
  level: {
    type: String,
  },
  title: {
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

const Exercises = model("Exercises", exercisesSchema);

module.exports = Exercises;
