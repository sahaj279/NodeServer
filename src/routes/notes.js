const express = require("express");
const router = express.Router();
const Note=require('../models/notes');
//   app.get("/notes/list/:userid", async (req, res) => {
//     //to fetch notes of a particular user(userid is a param)
//     var allnotes = await Note.find({ userid: req.params.userid });
//     res.json(allnotes);
//   }); //now we'll write notes/list/useremail and not notes/list; /useremail will send all the keys who have userid as this user email
//   //so fetching all notes of a particular user

//converting this get to post

router.post("/list", async(req, res) => {
  var notes =await Note.find({ userid: req.body.userid });
  res.json(notes);
});
router.post("/add", async (req, res) => {
  await Note.deleteOne({ id: req.body.id }); //if the note with an id which is already in collection is added, it will get deleted, so in a way, we are updating a prev note

  var newNote = new Note({
    id: req.body.id,
    userid: req.body.userid,
    title: req.body.title,
    desc: req.body.desc,
  });
  await newNote.save(); //to save the data to collection //cluster0, sahajdp database, notes collection
  res.json({
    message: "Note added successfully " + `id is ${req.body.id}`,
  });
});

router.post("/delete", async (req, res) => {
  await Note.deleteOne({ id: req.body.id }); //if the note with an id which is already in collection is added, it will get deleted, so in a way, we are updating a prev note
  res.json({
    message: "Note deleted successfully " + `id is ${req.body.id}`,
  });
});
module.exports=router;