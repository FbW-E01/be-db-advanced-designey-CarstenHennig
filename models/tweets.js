import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  text: String,
  img1: Buffer,
  img2: Buffer,
  img3: Buffer,
  img4: Buffer,
  hashtag: String,
  tags: String,
  likes: Number,
  shares: Number,
});

const tweetCollection = "tweets";
const Tweets = mongoose.model(tweetCollection, tweetSchema);
export default Tweets;
