const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema({
  title: String,
  header: String,
  paragraph: String,
  paragraph2: String,
  paragraph3: String,
  paragraph4: String
});

mongoose.model('topics', topicSchema);