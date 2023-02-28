const userRoutes = require("express").Router();
const User = require("../models/user");

userRoutes.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
});

userRoutes.post("/", async (req, res) => {
  try {
    if (req.body.email === undefined) {
      res.status(400).json({
        error: "Missing required field(s):email",
      });
    }
    const newContact = await User.create(req.body);
    res.status(201).send(newContact);
  } catch (error) {
    res.status(400).json({
      error: "Missing required field(s):email",
    });
  }
});

userRoutes.get("/:id", async (req, res) => {
  try {
    const existingUser = await User.findById({ _id: req.params.id });
    res.status(200).send(existingUser);
  } catch (error) {
    res.status(404).json({
      error: "There is no contact with that id",
    });
  }
});

userRoutes.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: req.params.id });
    console.log(deleteUser);
    res.status(204).send();
  } catch (error) {
    res.status(204).send();
  }
});

userRoutes.put("/:id", async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    const updateUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        firstName,
        lastName,
        email,
        phone,
      },
      {
        new: true,
      }
    );
    console.log(updateUser);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({
      error: "There is no contact with that id",
    });
  }
});

userRoutes.patch("/:id", async (req, res) => {
  try {
    const update = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    console.log(updatedUser);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({
      error: "There is no contact with that id",
    });
  }
});
module.exports = userRoutes;
