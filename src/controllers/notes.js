const fs = require("fs");
const uuid = require("uuid");
const path = require("path");

const getNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../db/db.json");
  const notes = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(notes);
};

const deleteNote = (req, res) => {
  const filePath = path.join(__dirname, "../../db/db.json");
  const notes = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  // get id from the req.params??
  // filter this array filter method
  const filterNotes = notes.filter((note) => note.id !== req.params.id);
  // write data file sync
  fs.writeFileSync(filePath, JSON.stringify(filterNotes));
  res.json(filterNotes);
};

const createNote = (req, res) => {
  const filePath = path.join(__dirname, "../../db/db.json");
  const notes = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  // before we push need to add an ID to req.body
  // const new note = object req.body add id using UUID)
  const newNote = req.body;
  newNote.id = uuid.v4();
  notes.push(newNote);
  fs.writeFileSync(filePath, JSON.stringify(notes));
  res.json(notes);
};

module.exports = { getNotes, deleteNote, createNote };
