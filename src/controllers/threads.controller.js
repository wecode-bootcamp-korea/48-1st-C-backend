const threadsService = require('../services/threads.service');

//thread 작성
const threadUp = async (req, res) => {
  try {
    const {user_id, content} = req.body;
 
    await threadsService.threadUp(user_id, content);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

//thread 수정
const threadMod = async (req, res) => {
  try {
    const {content, id} = req.body;
 
    await threadsService.threadMod(content, id);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

//thread 삭제 
const threadDelete = async (req, res) => {
  try {
    const {id} = req.body;
 
    await threadsService.threadDelete(id);

    res.status(201).json({message: "Successful Delete"});
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { threadUp, threadMod, threadDelete };