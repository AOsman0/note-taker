const path = require("path");

const renderNotePage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/notes.html");
  res.sendFile(filePath);
};

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/index.html");
  res.sendFile(filePath);
};

module.exports = { renderHomePage, renderNotePage };
