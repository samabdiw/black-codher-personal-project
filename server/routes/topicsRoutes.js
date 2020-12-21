const mongoose = require('mongoose');
const Topic = mongoose.model('topics');


module.exports = (app) => {
  app.get(`/api/topic`, async (req, res) => {
    console.log("Hello World")
    const topics = await Topic.find();
    console.log(topics)
    return res.status(200).send(topics);
  });



  app.put(`/api/topic/:id`, async (req, res) => {
    const { id } = req.params;

    const topic = await Topic.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      topic,
    });
  });

  app.delete(`/api/topic/:id`, async (req, res) => {
    const { id } = req.params;

    const topic = await Topic.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      topic,
    });
  });
};
