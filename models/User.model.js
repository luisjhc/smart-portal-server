const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    username: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
    },

    profilePic: {
      type: String,
      default:
        "https://res.cloudinary.com/dertdncse/image/upload/v1622613422/smart%20portal/default%20user%20pic/woman_student_gt27uy.png",
    },
    role: {
      type: String,
      enum: ["teacher", "student"],
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
