const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const TodoModel = require("./db/Models/TodoModels");
const mongoUrl = "mongodb://localhost:27017/todoooos";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const todoList = await TodoModel.find();
  res.json(todoList);
});

app.post("/", async (req, res) => {
  const createTodo = await TodoModel.create({
    text: req.body.text,
  });
  res.json(createTodo);
});

app.patch("/", async (req, res) => {
  try {
    const doneTodo = await TodoModel.findById(req.body.id);
    doneTodo.status = !doneTodo.status;
    await doneTodo.save();
    res.json(doneTodo.id);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.delete("/", async (req, res) => {
  const delTodo = await TodoModel.findByIdAndDelete(req.body.id);
  res.json(delTodo._id);
});

app.put("/", async (req, res) => {
  const editTodo = await TodoModel.findById(req.body.id);
  editTodo.text = req.body.text;
  await editTodo.save();
  res.json({id:editTodo._id, text:editTodo.text });
});

app.listen(3001, () => {
  console.log("Go retard");
  connect(
    mongoUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    },
    () => {
      console.log("База зазазаз");
    }
  );
});
