const { Router } = require("express");
const { getNotes, deleteNote, createNote } = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.delete("/:id", deleteNote);
router.post("/", createNote);

module.exports = router;
