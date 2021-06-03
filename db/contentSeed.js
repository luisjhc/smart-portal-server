require("dotenv/config");
const mongoose = require("mongoose");

const Content = require("../models/Content.model");

const c = `We can use _even though, although, despite_ and _in spite of_ to communicate that something is surprising or unexpected.
    
We use _despite/in spite of_ before a noun or gerund. We use _even though/although_  before a subject and a verb.

_Despite_ being sick, I came to work. 

_In spite of_ being sick, I came to work.  

Despite I was sick, I came to work.

In spite of I was sick, I came to work. (We need the gerund or a noun after _despite_ or _in spite of._)

_Although_ I was sick, I came to work.  

_Even though_ I was sick, I came to work.

Although being sick, I came to work.

Even though my sickness, I came to work. (We need a subject + verb after _although_ or _even_ _though._)

## Additional Notes

In sentences with _even though_, _although_, _despite_, or _in spite of,_ the condition can come before or after the result. If the condition comes before the result, we need a comma.  
Examples:_Despite_ having little experience, Shirley has succeeded in her new role.  
Shirley has succeeded in her new role _despite_ having little experience.  
_Even though_ Shirley has little experience, she has succeeded in her new role.  
Shirley has succeeded in her new role _even though_ she has little experience.

_In spite of_ and _despite_ can be used interchangeably. _Despite_ is a little more formal.

_Even though_ and _although_ can often be used interchangeably. However, we often use _even though_ as a stronger, more emphatic form of _although_.

We can use _though_ instead of _although. Although_ is generally considered more formal.  
Example:  
_Although/though_ I was tired, I went to the event_.  
Note that _though_ can be used as an adverb, but _although_ cannot.

We can use _in spite of/despite the fact that_ + subject + verb_._ We do not use _that_ clauses after _although_ and _even though_.  
Examples:  
_In spite of the fact that_ the application is free, few people have downloaded it.  
_Despite the fact that_ the application is free, few people have downloaded it.  
Although the fact that the application is free, few people have downloaded it.  
Even though the fact that the application is free, few people have downloaded it.`;

const contentArr = [
  {
    level: "intermediate",
    title: "Even though/Although/In spite of/Despite",
    text: c,
    video: "https://www.youtube.com/watch?v=nX8N9RiGCZg",
  },
  {
    level: "intermediate",
    title: "intermediate title",
    text: `this should be displayed`,
  },
  {
    level: "beginner",
    title: "beginner title",
    text: `this shouldn't be displayed`,
  },
  {
    level: "beginner",
    title: "beginner title",
    text: `If you start typing
And then press enter, this will not be considered Markdown. Because there is space behind it where there shouldnt be non`,
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
