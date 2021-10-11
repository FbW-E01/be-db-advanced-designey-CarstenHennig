import mongoose from "mongoose";
import Tweets from "./models/tweets.js";
import fs from "fs";

const username = "mongoUser";
const password = "password";

try {
  await mongoose.connect("mongodb://localhost:27017/test", {
    auth: { username: username, password: password },
    authSource: "admin",
  });
  console.log("Connected to MongoDB");
  const newTweet = new Tweets({
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequa",
    img1: fs.readFileSync("./img/db_twitter.jpg"),
    hashtag: "#dci",
    tags: "@DC_INstitute1",
    likes: 0,
    shares: 0,
  });
  newTweet
    .save()
    .then(() => {
      console.log("Tweet saved");
    })
    .catch((e) => console.log("Unable to save Tweet", e))
    .finally(() => mongoose.connection.close());
} catch (error) {
  console.error("Error connecting to MongoDB", error);
}
