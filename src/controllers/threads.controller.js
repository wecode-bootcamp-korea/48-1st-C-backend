const threadsService = require("../services/threads.service");

const threadSet = async (req, res) => {
  try {

    const threadSetId = await threadsService.threadSet(res.user.user_id);

    res.status(200).json(threadSetId);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const threadCreate = async (req, res) => {
  try {
    const { content } = req.body;

    await threadsService.threadCreate(res.user.user_id, content);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const threadModify = async (req, res) => {
  try {
    const { content, id } = req.body;

    await threadsService.threadModify(content, id);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const threadDelete = async (req, res) => {
  try {
    const { id } = req.body;

    await threadsService.threadDelete(id);

    res.status(201).json({ message: "Successful Delete" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const threadList = async (req, res) => {
  try {
    const threadListShow = await threadsService.threadList();

    res.status(200).json(threadListShow);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = {
  threadSet,
  threadCreate,
  threadModify,
  threadDelete,
  threadList,
};