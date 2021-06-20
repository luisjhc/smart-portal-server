require("dotenv/config");
const mongoose = require("mongoose");

const Content = require("../models/Content.model");

const contentArr = [
  {
    level: "intermediate",
    title: "Even though/Although/In spite of/Despite",
    text: `We can use _even though, although, despite_ and _in spite of_ to communicate that something is surprising or unexpected.
    
We use _despite/in spite of_ before a noun or gerund. We use _even though/although_  before a subject and a verb.
    
- _Despite_ being sick, I came to work.   
- _In spite of_ being sick, I came to work.  
- Despite I was sick, I came to work. 
- In spite of I was sick, I came to work. (We need the gerund or a noun after _despite_ or _in spite of._)   
- _Although_ I was sick, I came to work.     
- _Even though_ I was sick, I came to work.    
- _Although_ being sick, I came to work.    
- _Even though_ my sickness, I came to work. (We need a subject + verb after _although_ or _even_ _though._)
    
## Additional Notes
    
In sentences with _even though_, _although_, _despite_, or _in spite of,_ the condition can come before or after the result. If the condition comes before the result, we need a comma.  

Examples:

- _Despite_ having little experience, Shirley has succeeded in her new role.  
- Shirley has succeeded in her new role _despite_ having little experience.  
- _Even though_ Shirley has little experience, she has succeeded in her new role.  
- Shirley has succeeded in her new role _even though_ she has little experience.
    
_In spite of_ and _despite_ can be used interchangeably. _Despite_ is a little more formal.
    
_Even though_ and _although_ can often be used interchangeably. However, we often use _even though_ as a stronger, more emphatic form of _although_.
    
We can use _though_ instead of _although. Although_ is generally considered more formal.  

Example:  
- _Although/though_ I was tired, I went to the event.
Note that _though_ can be used as an adverb, but _although_ cannot.
    
We can use _in spite of/despite the fact that_ + subject + verb. We do not use _that_ clauses after _although_ and _even though_.  

Examples:  
- _In spite of the fact that_ the application is free, few people have downloaded it.  
- _Despite the fact that_ the application is free, few people have downloaded it.  
- Although the fact that the application is free, few people have downloaded it.  
- Even though the fact that the application is free, few people have downloaded it.`,
    video: "https://www.youtube.com/watch?v=nX8N9RiGCZg",
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
    audioSource: "https://www.youtube.com/watch?v=q-Y-z6HmRgI",
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
  {
    level: "beginner",
    title: "Yes and No Questions vs. Information Questions",
    image:
      "https://res.cloudinary.com/dertdncse/image/upload/v1623418941/smart%20portal/audio%20exercises/beginner_yes-no_questions_q1rs2u.png",
    text: `One of the most important tasks in speaking any language is asking questions. This article will help you learn how to ask and answer questions so you can begin having conversations in English. To help you, questions are divided into categories with a short explanation.
There are two main types of questions in English: questions that can be answered with a simple yes or no, and questions that require a more detailed response.
## Yes and No Questions    
- Are you happy today?. / Yes, I am.
- Did you have fun at the party. / No, I didn't.
- Will you come to class tomorrow?. / Yes, I will.   
## Information Questions    
Information questions are asked with the question words what, where, when, how, why, and which. These questions require longer answers to provide the specific information requested. Notice that each of these questions are answered with the positive or negative form of the helping verb.
- Where are you from?. / I'm from Seattle.
- What did you do on Saturday evening?. / We went to see a film.
- Why was the class difficult?. / The class was difficult because the teacher didn't explain things well.    
## Questions With Greetings: Saying Hello    
Start the conversation with a greeting. Examples include:
- How are you?
- How's it going?
- What's up?
- How's life?     
## General Questions   
General questions are questions we ask to help us start a conversation or keep the conversation going. Here are some common general questions:
- Where did you go?
- What did you do [next]?
- Where were you?
- Do you have a car/house/children/etc. ?
- Can you play tennis/golf/football/etc.?
- Can you speak another language?`,
    video: "https://www.youtube.com/watch?v=j9b1CNN_rFU",
    quiz: [
      {
        questionText: "Where are you going?.",
        answerOptions: [
          { answerText: "Tomorrow", isCorrect: false },
          { answerText: "To work", isCorrect: true },
          { answerText: "Yes, please", isCorrect: false },
        ],
      },
      {
        questionText: "What do you like to eat?",
        answerOptions: [
          { answerText: "No, thank you.", isCorrect: false },
          { answerText: "Italian food.", isCorrect: true },
          { answerText: "Yesterday afternoon.", isCorrect: false },
        ],
      },
      {
        questionText: "Do you like vegetables?.",
        answerOptions: [
          { answerText: "No, I don’t.", isCorrect: true },
          { answerText: "Yes, please.", isCorrect: false },
          { answerText: "No, thank you.", isCorrect: false },
        ],
      },
      {
        questionText: "Are you enjoying your time?.",
        answerOptions: [
          { answerText: "Yes, I do.", isCorrect: false },
          { answerText: "No, I don’t.", isCorrect: false },
          { answerText: "Yes, I am.", isCorrect: true },
        ],
      },
    ],
    audioSource:
      "https://res.cloudinary.com/dertdncse/video/upload/v1623415795/smart%20portal/audio%20exercises/A2_eating_out_omq8t6.mp3",
    audioQuiz: [
      {
        questionText: "True or False: The customers want two tables. ",
        answerOptions: [
          { answerText: "True", isCorrect: false },
          { answerText: "False", isCorrect: true },
        ],
      },
      {
        questionText: "True or False: There are two customers eating together.",
        answerOptions: [
          { answerText: "True", isCorrect: true },
          { answerText: "False", isCorrect: false },
        ],
      },
      {
        questionText:
          "True or False: The two customers order the same starter.",
        answerOptions: [
          { answerText: "True", isCorrect: false },
          { answerText: "False", isCorrect: true },
        ],
      },
      {
        questionText:
          "True or False: Both customers order the Thai chicken for their main course.",
        answerOptions: [
          { answerText: "True", isCorrect: true },
          { answerText: "False", isCorrect: false },
        ],
      },
      {
        questionText: "True or False: The customers order cold drinks.",
        answerOptions: [
          { answerText: "True", isCorrect: true },
          { answerText: "False", isCorrect: false },
        ],
      },
      {
        questionText: "True or False: Both customers order a dessert.",
        answerOptions: [
          { answerText: "True", isCorrect: false },
          { answerText: "False", isCorrect: true },
        ],
      },
    ],
  },
];

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/smart-portal")
  .then(() => {
    console.log("CONNECTED WITH STUFF");
    Content.deleteMany({}).then(() => {
      Content.insertMany(contentArr).then(() => {
        console.log("ADDED STUFF");
        mongoose.disconnect();
        console.log("DISCONNECTED STUFF");
      });
    });
  });
