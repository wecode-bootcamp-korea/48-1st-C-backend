const likesService = require("../services/likes.service");

const likeon = async (req, res) => {
  try {
    const { thread_id, user_id } = req.body;

    await likesService.likeButtonOn(thread_id, user_id);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const likeoff = async (req, res) => {
  try {
    const { thread_id, user_id } = req.body;

    await likesService.likeButtonOff(thread_id, user_id);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};
module.exports = { likeon, likeoff };
