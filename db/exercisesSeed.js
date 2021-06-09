require("dotenv/config");
const mongoose = require("mongoose");

const Exercises = require("../models/Exercises.model");

const exercisesArr = [
  {
    level: "intermediate",
    title: "Even though/Although/In spite of/Despite",
    quiz: [
      {
        questionText:
          "Fill the phrase: _____ being the CEO of a successful company, Nancy was always a humble, down-to-earth person.",
        answerOptions: [
          { answerText: "Although", isCorrect: false },
          { answerText: "Despite", isCorrect: true },
          { answerText: "Even though", isCorrect: false },
        ],
      },
      {
        questionText:
          "Fill the phrase: _____ we’ve listed the job opening, we’ve had few qualified candidates for the position.",
        answerOptions: [
          { answerText: "Although", isCorrect: false },
          { answerText: "Despite", isCorrect: false },
          { answerText: "Even though", isCorrect: true },
        ],
      },
      {
        questionText:
          "Fill the phrase: Nothing has changed _____ our recommendations.",
        answerOptions: [
          { answerText: "Although", isCorrect: false },
          { answerText: "Despite", isCorrect: true },
          { answerText: "Even though", isCorrect: false },
        ],
      },
      {
        questionText:
          "Fill the phrase: _____ the stiff competition, our firm has continued to succeed.",
        answerOptions: [
          { answerText: "Although", isCorrect: false },
          { answerText: "In spite of", isCorrect: true },
          { answerText: "Even though", isCorrect: false },
        ],
      },
      {
        questionText:
          "Fill the phrase: _____ we advertised the job opening, we didn't receive many applications.",
        answerOptions: [
          { answerText: "Although", isCorrect: false },
          { answerText: "In spite of", isCorrect: true },
          { answerText: "Even though", isCorrect: false },
        ],
      },
    ],
    audioSource:
      "https://www.ted.com/talks/damon_brown_how_to_choose_your_news/transcript#t-210078",
    audioQuiz: [
      {
        questionText:
          "True or False: Democratic governments sometimes mislead the public with media cooperation.",
        answerOptions: [
          { answerText: "True", isCorrect: true },
          { answerText: "False", isCorrect: false },
        ],
      },
      {
        questionText:
          "True or False: You won't get the truth by following local reporters on social media.",
        answerOptions: [
          { answerText: "True", isCorrect: false },
          { answerText: "False", isCorrect: true },
        ],
      },
      {
        questionText:
          "True or False: In events like terrorist attacks and natural disasters, watch continuous coverage to be updated with the latest news.",
        answerOptions: [
          { answerText: "True", isCorrect: false },
          { answerText: "False", isCorrect: true },
        ],
      },
      {
        questionText:
          "True or False: Tuning in to various sources and noting the differences lets you put the pieces together for a more complete picture.",
        answerOptions: [
          { answerText: "True", isCorrect: true },
          { answerText: "False", isCorrect: false },
        ],
      },
    ],
  },
];

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/smart-portal")
  .then(() => {
    console.log("CONNECTED WITH STUFF");
    Exercises.deleteMany({}).then(() => {
      Exercises.insertMany(exercisesArr).then(() => {
        console.log("ADDED STUFF");
        mongoose.disconnect();
        console.log("DISCONNECTED STUFF");
      });
    });
  });
