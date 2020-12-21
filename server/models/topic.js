const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema({
  title: String,
  header: String,
  paragraph: String,
  paragraph2: String,
  paragraph3: String,
  picture: String
});

mongoose.model('topics', topicSchema);