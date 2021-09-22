import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  text: String,
  img1: File,
  img2: File,
  img3: File,
  img4: File,
  hashtag: String,
  tags: String,
  likes: Number,
  shares: Number,
});

const tweetCollection = "tweets";
const Tweet = mongoose.model(tweetCollection, tweetSchema);
export default Tweets;
